import type { APIRoute } from "astro";
import { generateServiceFeed } from "../../utils/service-feed-generator";

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site
    ? site.toString().replace(/\/$/, "")
    : "https://bloomfitness.es";

  const xml = generateServiceFeed(baseUrl, "google");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
