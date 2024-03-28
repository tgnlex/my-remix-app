import viteDevServer from '../mw/viteDev.js';

const build = viteDevServer 
    ? () => 
      viteDevServer.ssrLoadModule(
        "virtual:remix/server-build"
    )
    :  await import("./build/server/index.js");

  
  export default build;