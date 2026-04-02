import type { APIRoute } from "astro";
import { getImage } from "astro:assets";
import { products } from "../data/products";

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site
    ? site.toString().replace(/\/$/, "")
    : "https://bloomfitness.es";

  let itemsXml = "";

  for (const product of products) {
    // Clean up price (e.g., "25€" -> "25.00 EUR")
    const numericPrice = product.price
      .replace(/[^0-9.,]/g, "")
      .replace(",", ".");
    const formattedPrice = `${parseFloat(numericPrice).toFixed(2)} EUR`;

    for (const color of product.colors) {
      const renders = product.images[color] || [];
      const photos = product.photos[color] || [];
      const colorImages = [...renders, ...photos];
      
      if (colorImages.length === 0) continue;

      // Optimize images to ensure they are under 8MB
      // Converting to webp and setting a max width of 1024px
      const optimizedMainImg = await getImage({
        src: colorImages[0],
        width: 1024,
        format: "webp",
        quality: 85,
      });

      const mainImage = optimizedMainImg.src.startsWith("http")
        ? optimizedMainImg.src
        : `${baseUrl}${optimizedMainImg.src}`;

      const optimizedAdditionalImgs = await Promise.all(
        colorImages.slice(1).map((img) =>
          getImage({
            src: img,
            width: 1024,
            format: "webp",
            quality: 85,
          }),
        ),
      );

      const additionalImages = optimizedAdditionalImgs.map((img) => {
        return img.src.startsWith("http") ? img.src : `${baseUrl}${img.src}`;
      });

      for (const size of product.sizes) {
        // Get the specific variant ID if it exists
        const variantId = product.variants[color]?.[size];

        if (!variantId) continue; // Skip if no variant ID exists for this combination

        const title = `${product.title} - ${color} - Talla ${size}`;
        const link = `${baseUrl}/tienda/${product.slug}?color=${encodeURIComponent(color)}&amp;size=${encodeURIComponent(size)}`;

        const additionalImagesXml = additionalImages
          .map(
            (imgUrl) =>
              `<g:additional_image_link>${imgUrl}</g:additional_image_link>`,
          )
          .join("\n      ");

        itemsXml += `
    <item>
      <g:id>${variantId}</g:id>
      <g:title><![CDATA[${title}]]></g:title>
      <g:description><![CDATA[${product.description}]]></g:description>
      <g:link>${link}</g:link>
      <g:image_link>${mainImage}</g:image_link>
      ${additionalImagesXml}
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      <g:price>${formattedPrice}</g:price>
      <g:brand><![CDATA[Bloom Fitness]]></g:brand>
      <g:item_group_id>${product.slug}</g:item_group_id>
      <g:color><![CDATA[${color}]]></g:color>
      <g:size><![CDATA[${size}]]></g:size>
      <g:gender>${product.gender || "unisex"}</g:gender>
      <g:age_group>${product.ageGroup || "adult"}</g:age_group>
      <g:size_system>${product.sizeSystem || "EU"}</g:size_system>
      <g:size_type>${product.sizeType || "regular"}</g:size_type>
      <g:google_product_category>${(product.googleCategory || "Ropa y accesorios > Ropa > Camisetas y tops").replace(/>/g, "&gt;")}</g:google_product_category>
      <g:identifier_exists>no</g:identifier_exists>
    </item>`;
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Bloom Fitness Store</title>
    <link>${baseUrl}</link>
    <description>Productos oficiales de Bloom Fitness</description>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
