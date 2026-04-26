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
    modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxtjs/supabase'],
    fonts: {
        families: [
            // Automatically resolved if @fontsource/roboto is in your package.json
            { name: 'Nunito', provider: 'google' },
        ],
    },
    runtimeConfig: {
        public: {
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseKey: process.env.SUPABASE_KEY,
        },
    },
    supabase: {
        redirect: false,
    }
})