 modules: [
          [
            "@storyblok/nuxt",
            {
              accessToken: "YOUR_PREVIEW_TOKEN",
              cacheProvider: "memory",
            },
          ],
        ]
        export default {
            target: 'static',
            head: {
              title: 'cpnt-262',
              htmlAttrs: {
                lang: 'en'
              },
              meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
              ],
              link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
              ]
            },
            css: [
            ],
            plugins: [
            ],
            components: true,
            buildModules: [
              '@nuxtjs/tailwindcss',
              '@nuxt/image',
              '@nuxtjs/google-analytics',
            ],
        }
        export default {
            modules: [
              '@nuxtjs/gtm',
            ],
            gtm: {
              id: 'GTM-XXXXXXX'
            }
          }
          
