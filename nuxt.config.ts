export default defineNuxtConfig({
    
    runtimeConfig: {
        email: process.env.EMAIL,
        email_pass: process.env.EMAIL_PASS
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'AMSE Dev',
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
                    href: '/logo.png'
                }
            ]
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },

})
