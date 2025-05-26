# Getting Started with Pixi TypeScript Library

This project is a modular PixiJS game library written in TypeScript.  
It is built using [Vite](https://vitejs.dev) in library mode and supports both development and production environments.

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the project in development mode.  
Open [http://localhost:8080](http://localhost:8080) to view the game in your browser.

The app will reload automatically if you make changes to the code.  
You’ll also see any ESLint warnings or errors in the terminal.

### `pnpm build`

Builds the project as a library into the `dist/` folder.  
It generates both UMD and ES module outputs and includes `.d.ts` type declarations.

This build is optimized for external usage (e.g. importing into other projects or CMS systems).

### `pnpm preview`

Serves the built production output (from `dist/`) locally on [http://localhost:4173](http://localhost:4173)  
Useful for testing production builds before deployment.

### `pnpm start`

Alias for `pnpm dev`.  
Useful for deployment tools and conventions (e.g. Netlify, Railway).

### `pnpm lint`

Runs ESLint on the `./src` folder.  
Enforces clean and consistent code style with no warnings allowed.

### `pnpm format`

Formats all `.ts`, `.js`, `.json`, `.scss`, and `.md` files in the `src/` folder using Prettier.

### `pnpm find-deadcode`

Uses [ts-prune](https://github.com/nadeesha/ts-prune) to find unused exported functions/types in the codebase.  
Generates a report in `unused-code.txt`.

### `pnpm prepare`

Installs Git hooks via [husky](https://typicode.github.io/husky/#/).  
Used to enforce formatting and linting before commits (optional).

## Project Structure

src/
├── PixiGame.ts ← Core entry point (exported class)
├── scenes/ ← Game scenes (optional)
├── core/ ← Engine logic (future)
├── ui/ ← Optional canvas overlays (future)
index.html ← Demo entry for development
vite.config.ts ← Build & dev config
tsconfig.json ← TypeScript strict mode setup
