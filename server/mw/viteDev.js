const viteDevServer = 
  // Check if running in prod or dev
  process.env.NODE_ENV === "production"
    // If in production: do nothing
    ? null 
    // If in dev: 
    // Fire a promise to load vite module
    : await import("vite").then((vite) => 
      // Create vite dev server
      vite.createServer({
        server: {
          middlewareMode: true
      },
    })
  );

  export default viteDevServer;