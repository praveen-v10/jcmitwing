export default async function sitemap() {
  const baseUrl = "https://jcmitwing.com";

  const routes = [
    "",
    "/",
    "/form",
  ];

  const pages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return pages;
}
