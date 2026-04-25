// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        optimizeDeps: {
            include: [
                '@vue/devtools-core',
                '@vue/devtools-kit',
            ]
        }
    },
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
    fonts: {
        families: [
            // Automatically resolved if @fontsource/roboto is in your package.json
            { name: 'Nunito', provider: 'google' },
        ],
    }
})