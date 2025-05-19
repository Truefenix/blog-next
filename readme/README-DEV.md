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

# Giscus

#### 🔧 1. Ative o GitHub Discussions no seu repositório, Vá até o seu repositório:

 - Clique em Settings > Features.
 - Marque a opção Discussions.

#### 🔧 2. Configure o Giscus no site oficial

 - Acesse: https://giscus.app

 - Preencha os campos:
```bash
    Repository: seu-usuario/seu-repositorio

    Category: selecione ou crie uma (ex: Comentários)

    Mapping: pathname (recomendado para blogs)

    Reaction, Metadata, etc.: marque como preferir

    Theme: preferred_color_scheme

Copie o código gerado no final da página (ele já vem com repoId, categoryId e tudo pronto).
```

```bash
npm install @giscus/react
```

---

# Scripts úteis

```bash
npm run dev
npm run build
npm run start
npm run lint
```
