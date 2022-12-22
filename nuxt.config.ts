// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@vueuse/motion/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
    ],
    components: true,
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        viewer: true
    }
})
