import type { APIRoute } from "astro";
import { products } from "../data/products";

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site
    ? site.toString().replace(/\/$/, "")
    : "https://bloomfitness.es";

  let itemsXml = "";

  for (const product of products) {
    const mainImage = product.images[0]?.src || "";
    const additionalImages = product.images.slice(1).map((img) => img.src);

    // Clean up price (e.g., "25€" -> "25.00 EUR")
    const numericPrice = product.price
      .replace(/[^0-9.,]/g, "")
      .replace(",", ".");
    const formattedPrice = `${parseFloat(numericPrice).toFixed(2)} EUR`;

    for (const color of product.colors) {
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
