**README.md das instalações e configurações**, com **apenas os títulos e comandos** de instalação + arquivos criados ou configurados:

---

# Next.js com TypeScript

```bash
npx create-next-app@latest . --ts
````

---

# ESLint

Já vem com o Next.js, mas pode atualizar:

```bash
npm install --save-dev eslint @eslint/eslintrc eslint-config-next
```
---

# Prettier

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

### .prettierrc


```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

### No seu eslint.mjs, adicione "plugin:prettier/recommended" nos extends:


```json
...compat.extends(
  "next/core-web-vitals",
  "plugin:prettier/recommended"
)
```

### .prettierignore

```
node_modules
.next
out
```
---

# Styled-Components

```bash
npm install styled-components
npm install --save-dev @types/styled-components babel-plugin-styled-components
```
### next.config.ts

```
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;

```
---

# ts-node (opcional para executar .ts direto)

```bash
npm install --save-dev ts-node
```

---

# Scripts úteis

```bash
npm run dev
npm run build
npm run start
npm run lint
```
