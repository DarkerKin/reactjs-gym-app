# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```sh {"id":"01J9AM28GC3FGEVH2DNGSB270A"}
# Set up local environment
fnm env --use-on-cd --shell power-shell | Out-String | Invoke-Expression 

# Set the Node.js version
fnm use --install-if-missing 20

# Check for npm and node versions
node -v
npm -v

# Run the React app on the local server
npm run dev

```
