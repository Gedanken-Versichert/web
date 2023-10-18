# Gedanken Versichert

## Usage

1. Open `src/config.json` in a text editor of your choice.

2. Customise the values inside as needed. The details for the values can be found in [Configuration](#configuration).

3. Follow the [build instructions](#build-instructions), and deploy the site!

### Configuration

`title` (_string_): The title of the site.

`description` (_string_, optional): A short description of the site.

`sections` (_array_): Array of sections, eg. Mathematik, Physik, etc. The values should be in the format:

```json
{
    "title": "The title of the section",
    
    // See "links" below
    "links": []
}
```

`links` (_array_): The array of links in each section. Each link should be in the format:

```json
{
    "title": "The title of the link",
    "url": "A URL to the link"
}
```

`touchWarning` (_string_): The warning to be shown to users with touch screens.

Example config:

```json
{
    "title": "Gedanken Versichert",
    "description": "",
    "sections": [
        {
            "title": "Mathematik",
            "links": []
        },
        {
            "title": "Physik",
            "links": [
                {
                    "title": "Bewegung eines Balles - von Bendegúz & Botond",
                    "url": "/programs/parabola-motion/"
                },
                {
                    "title": "Newtonsche Gravitation - von Bendegúz",
                    "url": "/programs/newtonsche-gravitation/"
                },
                {
                    "title": "Vortex-Graphik - von Bendegúz",
                    "url": "/programs/random-points/"
                }
            ]
        },
        {
            "title": "Programmierung",
            "links": []
        }
    ],
    "touchWarning": "WARNUNG: Diese Programme funktionieren nicht mit Touchscreens"
}
```

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