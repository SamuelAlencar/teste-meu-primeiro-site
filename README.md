# Meu Primeiro Site

Projeto educacional simples feito com Next.js, App Router, TypeScript e CSS.

## Executar

Com Node.js 20.9 ou superior e npm instalados:

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para experimentar, altere `app/page.tsx` e veja a página atualizar automaticamente.

## Verificar e compilar

```bash
npm run typecheck
npm run build
```

Após a compilação, `npm start` executa a versão de produção.

## Estrutura

- `app/page.tsx`: conteúdo da página inicial, na rota `/`.
- `app/layout.tsx`: layout compartilhado, idioma e metadados do site.
- `app/globals.css`: cores, tipografia, espaçamento e adaptação para telas menores.
- `tsconfig.json`: configuração do TypeScript com verificação estrita.
- `next-env.d.ts`: tipos gerados e mantidos pelo Next.js; não editar manualmente.
- `package.json`: dependências e comandos do projeto.
- `package-lock.json`: versões das dependências para instalações reproduzíveis.
- `.gitignore`: arquivos locais e gerados que não devem ir para o Git.

A página não precisa de estado ou eventos JavaScript, então utiliza o componente de servidor padrão do App Router.

Referência: [documentação oficial do Next.js](https://nextjs.org/docs/app/getting-started/installation).
