# Gedanken Versichert

## Usage

1. Open `src/config.json` in a text editor of your choice.

2. Customise the values inside as needed. The details for the values can be found in [Configuration](#configuration).

3. Follow the [build instructions](#build-instructions), and deploy the site!

## Build instructions

1. Clone the repository

   ```sh
   git clone https://github.com/Gedanken-Versichert/web.git
   cd web
   ```

2. Install dependencies and start the development server.

   ```sh
   bun install
   bun dev
   ```

   Then open `localhost:3000` in your browser to see a live preview of the site.

3. Build the site.

   ```sh
   bun run build
   ```

   This will build the site and place it in `dist/`
