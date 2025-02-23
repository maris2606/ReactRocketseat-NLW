import { defineConfig } from 'orval'

export default defineConfig({
    api:{
        // entra a url do json swagger
        // q ta dentro do swagger
        input: 'http://localhost:3333/docs/json',
        output: {
            target: './src/http/api.ts',
            client: 'fetch',
            httpClient: 'fetch',
            clean: true, // evita conflito
            baseUrl: 'http://localhost:3333', // url backend

            override: {
                fetch: {
                    // se uma requisição pode retornar varios tipos de resposta,
                    // de statusz
                    // falso, pq quero só os dados
                    includeHttpResponseReturnType: false,
                }
            }
        },

    },
})