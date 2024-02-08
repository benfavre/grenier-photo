import { tailwind } from "elysia-tailwind"; // 1. Import
import Elysia from "elysia";
import { html } from '@elysiajs/html'
import Page from './templates/index'

new Elysia()
    .use(html())
    // .use(tailwind({                           // 2. Use
    //     path: "/public/stylesheet.css",       // 2.1 Where to serve the compiled stylesheet;
    //     source: "./src/styles.css",        // 2.2 Specify source file path (where your @tailwind directives are);
    //     config: "./tailwind.config.js",       // 2.3 Specify config file path or Config object;
    //     options: {                            // 2.4 Optionally Specify options:
    //         minify: true,                     // 2.4.1 Minify the output stylesheet (default: NODE_ENV === "production");
    //         map: true,                        // 2.4.2 Generate source map (default: NODE_ENV !== "production");
    //         autoprefixer: false               // 2.4.3 Whether to use autoprefixer;
    //     },
    // }))
    .get('/', () => Page)
    .get('/id/:id', ({ params: { id } }) => id)
    .post('/form', ({ body }) => body)
    .listen(8080)