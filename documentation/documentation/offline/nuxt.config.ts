// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'VRISTO - Multipurpose Tailwind CSS Admin Template',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Best Admin Templates, Top Admin Templates, Top 10 Templates, Best Admin Themes, Top Admin Themes, Top 10 Themes, Download Free Tailwind Css Themes, Tailwind Css Templates, Admin Themes, Admin Templates, Admin Dashboard Themes, Admin Dashboard Templates, Dashboard Templates, and Site Templates built on top of Tailwind Css, HTML, React, Vue, Angular, Next, Nuxt, Laravel, PHP, CakePHP, Codeigniter, Ruby, React + Laravel, Vue + Laravel, AlpineJs, Vite, Figma, Django, Node.js, AdonisJs, Symfony, Laravel, Python',
                },
                {
                    name: 'keywords',
                    content:
                        'Free taillwind css templates, multipurpose templates, multipurpose themes, tailwind css themes, admin templates, admin dashboard templates, site templates, web development, web design, font icons, duotone icons, admin themes, tailwind css admin themes, freebies, form validation, starter kits, figma',
                },

                { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:title', property: 'og:title', content: 'VRISTO - Multipurpose Tailwind CSS Admin Template' },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content:
                        'Best Admin Templates, Top Admin Templates, Top 10 Templates, Best Admin Themes, Top Admin Themes, Top 10 Themes, Download Free Tailwind Css Themes, Tailwind Css Templates, Admin Themes, Admin Templates, Admin Dashboard Themes, Admin Dashboard Templates, Dashboard Templates, and Site Templates built on top of Tailwind Css, HTML, React, Vue, Angular, Next, Nuxt, Laravel, PHP, CakePHP, Codeigniter, Ruby, React + Laravel, Vue + Laravel, AlpineJs, Vite, Figma, Django, Node.js, AdonisJs, Symfony, Laravel, Python',
                },
                { hid: 'og:site_name', property: 'og:site_name', content: 'vristo.sbthemes.com' },
                { hid: 'og:url', property: 'og:url', content: 'https://vristo.sbthemes.com/' },
                { hid: 'og:image', property: 'og:image', content: 'https://vristo.sbthemes.com/assets/images/social.png' },
                { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://vristo.sbthemes.com/assets/images/social.png' },
                { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
                { hid: 'og:image:height', property: 'og:image:height', content: '630' },

                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                { hid: 'twitter:title', name: 'twitter:title', content: 'VRISTO - Multipurpose Tailwind CSS Admin Template' },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content:
                        'Best Admin Templates, Top Admin Templates, Top 10 Templates, Best Admin Themes, Top Admin Themes, Top 10 Themes, Download Free Tailwind Css Themes, Tailwind Css Templates, Admin Themes, Admin Templates, Admin Dashboard Themes, Admin Dashboard Templates, Dashboard Templates, and Site Templates built on top of Tailwind Css, HTML, React, Vue, Angular, Next, Nuxt, Laravel, PHP, CakePHP, Codeigniter, Ruby, React + Laravel, Vue + Laravel, AlpineJs, Vite, Figma, Django, Node.js, AdonisJs, Symfony, Laravel, Python',
                },
                { hid: 'twitter:url', property: 'twitter:url', content: 'https://vristo.sbthemes.com/' },
                { hid: 'twitter:site', property: 'twitter:site', content: 'vristo.sbthemes.com' },
                { hid: 'twitter:image', name: 'twitter:image', content: 'https://vristo.sbthemes.com/assets/images/social.png' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
                { rel: 'canonical', href: 'https://vristo.sbthemes.com/' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Nunito:400,500,600,700&display=swap',
                },
            ],
        },
    },
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [],
});
