import { defineConfig } from "vitest/config";
import { resolve as pathResolve } from "path";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
    plugins: [
        legacy({
            targets: ["ie >= 11"]
        })
    ],
    test: {
        alias: {
            keycloakify: pathResolve(__dirname, "./src")
        },
        watchExclude: ["**/node_modules/**", "**/dist/**", "**/sample_react_project/**"]
    }
});
