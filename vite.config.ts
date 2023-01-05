import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [vanillaExtractPlugin(), react()],
});
