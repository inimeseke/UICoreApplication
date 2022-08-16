import {nodeResolve} from "@rollup/plugin-node-resolve"
import path from "path"
import sourcemaps from "rollup-plugin-sourcemaps"
import {terser} from "rollup-plugin-terser"
import webWorkerLoader from "rollup-plugin-web-worker-loader"
import typescript from "rollup-plugin-typescript2"



const onwarn = (warning, rollupWarning) => {
    
    // Silence circular dependency warning for CBCore and CBSocketClient
    if (warning.code === "CIRCULAR_DEPENDENCY" && !warning.importer.indexOf(path.normalize("scripts/CBCore/CBCore.ts"))) {
        return
    }
    if (warning.code === "CIRCULAR_DEPENDENCY" && !warning.importer.indexOf(path.normalize("scripts/CBCore/CBSocketClient.ts"))) {
        return
    }
    
    if (warning.code === "THIS_IS_UNDEFINED") {
        return
    }
    
    rollupWarning(warning)
    
}

const devMode = (process.env.NODE_ENV === 'development');
console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

const configuration = {
    input: "scripts/RootViewController.ts",
    output: {
        file: "compiledScripts/webclient.js",
        format: "cjs",
        sourcemap: devMode && "inline"
    },
    onwarn: onwarn,
    plugins: [
        nodeResolve({
            browser: true
        }),
        typescript({ sourceMap: true }),
        sourcemaps(),
        webWorkerLoader({
            targetPlatform: "browser",
            sourcemap: devMode === true,
            pattern: /web-worker:(.+)/,
            inline: true
        })
    ]
}


if (!devMode) {
    
    configuration.plugins.push(terser({
        ecma: 2020,
        mangle: {toplevel: true},
        compress: {
            module: true,
            toplevel: true,
            properties: true,
            reduce_funcs: true,
            unsafe_arrows: true,
            drop_console: !devMode,
            drop_debugger: !devMode
        },
        output: {quote_style: 1}
    }))
    
}

export default configuration
