// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    components: true,
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        viewer: true
    }
})
