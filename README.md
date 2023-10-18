# Gedanken Versichert

## Build instructions

1.  ```sh
    git clone https://github.com/Gedanken-Versichert/web.git
    cd web
    ```

2.  ```sh
    bun install
    bun dev
    ```

    Then open `localhost:4321` in your browser to see a live preview of the site.

3.  ```sh
    bun run build
    ```
    This will build the site and place it in `dist/`

## Licenses

All of the code in this repository is under the [MIT license](./LICENSE), unless specified otherwise.

The licenses of all dependencies are in their respective folders in `node_modules/` when you install them with `npm install`.

[Astro](https://astro.build/), the static site generator used to generate these sites, is licensed under the [MIT license](https://github.com/withastro/astro/blob/main/LICENSE).