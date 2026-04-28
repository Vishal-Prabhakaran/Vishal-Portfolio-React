import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    // Set base to './' for GitHub Pages, or '/' for Netlify/Vercel
    // For GitHub Pages with repo name: base: '/Vishal-Portfolio-React/'
    base: './',
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    plugins: [
        tailwindcss(),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
        },
    },
});
