module.exports = {
    // Presets usados para transformar o código
    presets: [
        '@babel/preset-env',      // Transpila JavaScript moderno para versões compatíveis com ambientes mais antigos
        '@babel/preset-react',    // Habilita a transformação de JSX (React)
        '@babel/preset-typescript'// Suporte a TypeScript
    ],

    // Plugins aplicados em todos os ambientes (exceto "test", que sobrescreve abaixo)
    plugins: [
        [
            'styled-components',    // Plugin para melhorar a depuração e renderização do styled-components
            {
                ssr: true,            // Suporte para Server-Side Rendering (SSR)
                displayName: true     // Adiciona nomes legíveis aos componentes nos DevTools
            }
        ]
    ],

    // Configurações específicas para o ambiente de testes
    env: {
        test: {
            plugins: [
                [
                    'styled-components', // Reconfigura o plugin apenas para testes
                    {
                        ssr: false,         // SSR desativado nos testes para simplificar
                        displayName: false  // Desativa nomes legíveis nos testes (melhora performance)
                    }
                ]
            ]
        }
    }
};
