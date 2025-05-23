# Projeto Next.js com TypeScript e Testes Jest

Este projeto usa Next.js 15.3.2 com TypeScript e está configurado para executar testes unitários com Jest e React Testing Library.

---

## Dependências necessárias

Instale as dependências para testes, Babel e suporte TS:

```bash
npm install --save-dev \
jest @types/jest ts-jest \
@testing-library/react @testing-library/jest-dom \
jest-environment-jsdom \
babel-jest @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
````

---

## Configurações do projeto

### 1. `babel.config.js`

Configuração do Babel para transpilar TS, JSX e código moderno:

```js
module.exports = {
    presets: [
        'next/babel',
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
};
```

> O preset `next/babel` já inclui suporte para React e ESNext.

---

### 2. `jest.config.ts`

Configuração do Jest para usar ts-jest e ambiente jsdom:

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/*.spec.(ts|tsx)'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // para importar estilos no teste (opcional)
  },
};
```

---

### 3. `package.json`

Adicione o script para rodar os testes:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

# **jest-styled-components**

```bash
npm install --save-dev jest-styled-components
```

Depois disso, só garantir que no seu `jest.config.ts` você inclua ele em `setupFilesAfterEnv` assim:

```js
setupFilesAfterEnv: [
  '@testing-library/jest-dom/extend-expect',
  'jest-styled-components'
],
```

---

## Uso

1. **Criar seus componentes React com TSX**, sempre importando o React:

```tsx
import React from 'react';

interface HelloProps {
  name: string;
}

export default function Hello({ name }: HelloProps) {
  return <h1>Hello, {name}!</h1>;
}
```

2. **Criar testes com extensão `.spec.tsx`**, por exemplo `Hello.spec.tsx`:

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

3. **Rodar os testes:**

```bash
npm test
```

---
