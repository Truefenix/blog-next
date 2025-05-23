# 🧪 Testes com Jest + React + TypeScript + Styled Components

Este projeto demonstra como configurar um ambiente de testes usando **Jest**, **React Testing Library**, **TypeScript** e **Styled Components**.

---

## ✅ Pré-requisitos

Certifique-se de já ter um projeto React com TypeScript criado. Exemplo com Next.js:

```bash
npx create-next-app@latest my-app --typescript
cd my-app
````

---

## 📦 Instalação dos pacotes

Instale todos os pacotes necessários:

```bash
npm install --save-dev jest ts-jest @types/jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom jest-styled-components babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/core @babel/plugin-transform-runtime @babel/runtime styled-components @types/styled-components

```

---

## ⚙️ Configuração do Jest

### 1. Crie o arquivo `jest.config.js` na raiz do projeto:

```js
module.exports = {
    collectCoverage: true, // Ativa a coleta de cobertura de testes
    collectCoverageFrom: ['src/**/*.{ts,tsx}'], // Quais arquivos serão usados para a cobertura
    coverageDirectory: 'coverage', // Pasta onde será salvo o relatório de cobertura

    testEnvironment: 'jest-environment-jsdom', // Ambiente de simulação do navegador (ideal para React)
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)', // Testes na pasta __tests__ com .js, .ts, .jsx, .tsx
        '**/?(*.)+(spec|test).[tj]s?(x)' // Arquivos com .spec ou .test (JS ou TS)
    ],
    testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/', '/public/'], // ignora

    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest' // babel transforme esses arquivos
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};

```

---

### 2. Crie o arquivo `babel.config.js` na raiz:

```js
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

```

> Se você estiver usando **Next.js**, pode usar `presets: ['next/babel']` no lugar.

---

### 3. Crie o arquivo `jest.setup.ts` na raiz:

```ts
import '@testing-library/jest-dom';
import 'jest-styled-components';
```

## 📝 Ajuste no `package.json`

Antes de rodar os testes, adicione o script abaixo no seu `package.json`:

```json
"scripts": {
  "test": "jest"
}
```
---

## 🧪 Exemplo de teste

### `Hello.tsx`

```tsx
import React from 'react';

type HelloProps = {
  name: string;
};

export default function Hello({ name }: HelloProps) {
  return <h1>Hello, {name}!</h1>;
}
```

---

### `Hello.spec.tsx`

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello component', () => {
  it('renders with name', () => {
    render(<Hello name="Maria" />);
    expect(screen.getByText('Hello, Maria!')).toBeInTheDocument();
  });
});
```

---

## ▶️ Executar os testes

```bash
npm test
```

---
