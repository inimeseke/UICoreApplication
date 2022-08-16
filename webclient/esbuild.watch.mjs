import inlineWorkerPlugin from "esbuild-plugin-inline-worker"
import {build} from "esbuild"


build({
    
    entryPoints: ["scripts/RootViewController.ts"],
    bundle: true,
    outfile: "compiledScripts/webclient.js",
    plugins: [inlineWorkerPlugin({ sourcemap: "inline" })],
    sourcemap: true,
    minify: false,
    format: "esm",
    watch: true
    
})




