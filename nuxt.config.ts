// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
        serverMiddleware: [
            'redirect-ssl',
            { path: '/router', handler: '~/router/router.js'},
            {path: '/api', handler: '~/api/courseAPI.js'},
            
        ]
      
}


