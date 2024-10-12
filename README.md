# Gedanken Versichert

## Usage

1. Open `src/config.json` in a text editor of your choice.

2. Customise the values inside as needed. The details for the values can be found in code autocompletion as you write
   the configuration file in your IDE.

3. Follow the [build instructions](#build-instructions), and deploy the site!

## Build instructions

1. Clone the repository

   ```sh
   git clone https://github.com/Gedanken-Versichert/web.git
   cd web
   ```

2. Build the site.

   ```sh
   bun run build
   ```

   This will build the site and place it in `dist/`

3. Preview the site.

   ```sh
   bun run preview
   ```

   This will start a preview server from the `dist/` directory. Ensure that the site has been built using
   `bun run build` first.
