import type { APIRoute } from "astro";
import { generateProductFeed } from "../../utils/feed-generator";

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site
    ? site.toString().replace(/\/$/, "")
    : "https://bloomfitness.es";

  const xml = generateProductFeed(baseUrl, "meta");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
