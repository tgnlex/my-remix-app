import { createRequestHandler} from "@remix-run/express";
import express from "express";
import viteDevServer from './mw/viteDev.js';
import build from './scripts/build.js';

const app = express();

app.use(  
  viteDevServer 
    ? viteDevServer.middlewares 
    : express.static("build/client"));

// For all routes:
// Run createRequestHandler.
app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
})