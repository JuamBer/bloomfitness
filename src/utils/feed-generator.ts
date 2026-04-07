import { products } from "../data/products";

export type FeedPlatform = "google" | "tiktok" | "meta";

/**
 * Generates an XML product feed in Google Shopping format (RSS 2.0).
 * Supports platform-specific tracking parameters.
 */
export function generateProductFeed(baseUrl: string, platform: FeedPlatform): string {
  let itemsXml = "";

  // Platform-specific tracking parameters
  const utmParams: Record<FeedPlatform, string> = {
    google: "utm_source=google&utm_medium=cpc&utm_campaign=shopping",
    tiktok: "utm_source=tiktok&utm_medium=paid&utm_campaign=shopping",
    meta: "utm_source=facebook&utm_medium=cpc&utm_campaign=catalog",
  };

  const tracking = utmParams[platform];

  for (const product of products) {
    // Clean and format price (e.g., "25€" -> "25.00 EUR")
    const numericPrice = product.price
      .replace(/[^0-9.,]/g, "")
      .replace(",", ".");
    const formattedPrice = `${parseFloat(numericPrice).toFixed(2)} EUR`;

    for (const color of product.colors) {
      const photos = product.photos[color] || [];
      if (photos.length === 0) continue;

      // Use the first photo as the main image
      // Note: No optimization applied as per user request (images are pre-optimized)
      const mainImageSrc = photos[0].src;
      const mainImage = mainImageSrc.startsWith("http")
        ? mainImageSrc
        : `${baseUrl}${mainImageSrc}`;

      // Additional images
      const additionalImagesXml = photos
        .slice(1)
        .map((img) => {
          const src = img.src;
          const fullUrl = src.startsWith("http") ? src : `${baseUrl}${src}`;
          return `\n      <g:additional_image_link>${fullUrl}</g:additional_image_link>`;
        })
        .join("");

      for (const size of product.sizes) {
        // Get the specific variant ID if it exists
        const variantId = product.variants[color]?.[size];
        if (!variantId) continue; // Skip if no variant ID exists for this combination

        const title = `${product.title} - ${color} - Talla ${size}`;
        
        // Construct the link with tracking parameters
        // Escaping '&' to '&amp;' for XML safety
        const link = `${baseUrl}/tienda/${product.slug}?color=${encodeURIComponent(color)}&amp;size=${encodeURIComponent(size)}&amp;${tracking.replace(/&/g, "&amp;")}`;

        itemsXml += `
    <item>
      <g:id>${variantId}</g:id>
      <g:title><![CDATA[${title}]]></g:title>
      <g:description><![CDATA[${product.description}]]></g:description>
      <g:link>${link}</g:link>
      <g:image_link>${mainImage}</g:image_link>${additionalImagesXml}
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

  return xml;
}
