import { services } from "../data/services";
import type { FeedPlatform } from "./feed-generator";

const billingPeriodLabel: Record<string, string> = {
  session: "por sesión",
  month: "al mes",
  year: "al año",
  package: "el bono",
};

/**
 * Generates an XML services feed (RSS 2.0, Google product feed schema).
 * Each tariff becomes its own item since feed formats only support a single
 * price per item; g:item_group_id links tariffs back to their parent service.
 */
export function generateServiceFeed(baseUrl: string, platform: FeedPlatform): string {
  let itemsXml = "";

  const utmParams: Record<FeedPlatform, string> = {
    google: "utm_source=google&utm_medium=cpc&utm_campaign=services",
    tiktok: "utm_source=tiktok&utm_medium=paid&utm_campaign=services",
    meta: "utm_source=facebook&utm_medium=cpc&utm_campaign=services",
  };

  const tracking = utmParams[platform];

  const sortedServices = [...services].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  for (const service of sortedServices) {
    const imageSrc = service.image.src;
    const mainImage = imageSrc.startsWith("http")
      ? imageSrc
      : `${baseUrl}${imageSrc}`;

    for (const tariff of service.tariffs) {
      const formattedPrice = `${tariff.price.toFixed(2)} EUR`;
      const link = `${baseUrl}/servicios/${service.slug}?${tracking.replace(/&/g, "&amp;")}`;
      const title = `${service.title} - ${tariff.name}`;
      const description = `${service.description} Tarifa: ${tariff.name} (${billingPeriodLabel[tariff.billingPeriod]}).`;

      const inventoryTags =
        platform === "meta"
          ? `\n      <g:inventory>1</g:inventory>\n      <g:quantity_to_sell_on_facebook>1</g:quantity_to_sell_on_facebook>`
          : `\n      <g:quantity>1</g:quantity>`;

      itemsXml += `
    <item>
      <g:id>${tariff.id}</g:id>
      <g:title><![CDATA[${title}]]></g:title>
      <g:description><![CDATA[${description}]]></g:description>
      <g:link>${link}</g:link>
      <g:image_link>${mainImage}</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>${platform === "tiktok" ? "in stock" : "in_stock"}</g:availability>
      <g:price>${formattedPrice}</g:price>
      <g:brand><![CDATA[Bloom Fitness]]></g:brand>
      <g:item_group_id>${service.slug}</g:item_group_id>
      <g:google_product_category>${service.googleCategory.replace(/>/g, "&gt;")}</g:google_product_category>
      <g:identifier_exists>no</g:identifier_exists>${inventoryTags}
    </item>`;
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Bloom Fitness Services</title>
    <link>${baseUrl}</link>
    <description>Servicios oficiales de Bloom Fitness</description>
    <language>es-ES</language>
    ${itemsXml}
  </channel>
</rss>`;

  return xml;
}
