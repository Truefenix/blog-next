# Blog Next - Em Andamento

Este é um projeto de blog desenvolvido com **Next.js**, utilizando **Styled Components** para estilização e suporte a **SSG (Static Site Generation)** para otimização de performance.

## 🔍 Funcionalidades

- Listagem de posts com título e slug.
- Estilização com `styled-components` e tema global.
- Estrutura moderna usando a pasta `app` do Next.js 13+.
- Requisição de dados de uma API externa para preencher os posts.

## 🛠 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [zod](https://zod.dev/?id=requirements)

## 🚀 Como rodar o projeto localmente

1. **Clone o repositório:**

    ```bash
   git clone https://github.com/seu-usuario/blog-next.git
   cd blog-next
    ````

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## 4. Configurações e Instalações na Pasta:

### [readme/README-DEV.md](readme/README-DEV.md)

## 5. Acesse o app em:
`http://localhost:3000`

## 6. 📦 Variáveis de Ambiente (.env.local)

Para configurar URLs e chaves sensíveis no projeto, use um arquivo `.env.local` na **raiz do projeto**, **fora da pasta `src/`**.

#### ✅ Exemplo de `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> ⚠️ Toda variável que for usada no **frontend (client-side)** precisa começar com `NEXT_PUBLIC_`.

---

* Para acessar a variável no código:

  ```tsx
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  ```
---
.<br>.<br>.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## ✍️ Autor
<table align="center">
<tr>
<td align="center">
<a href="https://github.com/Truefenix">
<img src="https://avatars.githubusercontent.com/u/94227038?s=400&u=0c061da14bb3c2f5bf9de8467443f49d7068c365&v=4" width="150px;" alt="Truefenix image" />
<br />
<sub><b>Eduardo-Roque</b></sub>
</a>
</td>
</tr>
</table>

<h4 align="center">
By<a href="https://github.com/Truefenix" target="_blank"> Truefenix </a>✍️
