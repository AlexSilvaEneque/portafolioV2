export default defineNuxtConfig({
    devtools: { enable: false },
    
    runtimeConfig: {
        email: process.env.EMAIL,
        email_pass: process.env.EMAIL_PASS
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'AMSE Dev',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {
                    name: 'description',
                    content: 'My porftolio web'
                }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/AMSE.png'
                }
            ]
        }
    },

    modules: [
        '@nuxt/ui',
    ],
    css: [
        "primevue/resources/themes/lara-light-blue/theme.css",
    ],

    build: {
        transpile: [
            "primevue"
        ]
    }
})
