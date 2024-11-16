# Практика Nuxt 3 на основе следующих курсов:

 1. [Build and Deploy a Full Stack Social Media App with Nuxt 3, TailwindCSS and Prisma | FULL COURSE](https://www.youtube.com/watch?app=desktop&v=_cM4j9_LfQk&t=5518s)
    - <a href="http://www.youtube.com/watch?feature=player_embedded&v=_cM4j9_LfQk" target="_blank"><img src="http://img.youtube.com/vi/_cM4j9_LfQk/0.jpg" 
alt="Build and Deploy a Full Stack Social Media App with Nuxt 3, TailwindCSS and Prisma | FULL COURSE" width="240" height="180" border="10" /></a>
    - репозитрий из курса: https://github.com/hassnian/d-twitter-clone
    - assets (иконки и прочее): https://gist.github.com/hassnian/a8ef7f243dcc933887b31af77e73df29
    - реализация сделана в отдельном layout `twitter` и посмотреть можно на роуте `/twitter`
    - deploy
      - [vercel](https://foto-nuxt-3.vercel.app/twitter/auth)
      - [netlify](https://foto-nuxt-3.netlify.app/twitter/auth)
    - TODO:
      - на проде, т.к. внутри предполагается использование Postgree, то авторизация не работает, т.к. надо как-то настроить базу по всей видимости
      - есть проблемы с авторизацией в целом:
        - нужно чтобы после авторизации редиректило на страницу, на которую пользователь изначально собирался зайти, а не на домашнюю
        - сейчас находясь даже не на страницах twitter всё равно редиректит на страницу авторизации, если пользователь не авторизован
         

2. [Nuxt 3 tutorial part 1. Build a full stack app with Nuxt 3](https://youtu.be/A24aKCQ-rf4?si=rSxgfGMUT2BTJrWU)
    - <a href="http://www.youtube.com/watch?feature=player_embedded&v=A24aKCQ-rf4" target="_blank"><img src="http://img.youtube.com/vi/A24aKCQ-rf4/0.jpg" 
alt="Nuxt 3 tutorial part 1. Build a full stack app with Nuxt 3" width="240" height="180" border="10" /></a>
    - репозитрий из курса: https://github.com/jurassicjs/nuxt3-fullstack-tutorial
    - в планах вынести то, что касается к этому курсу в роут `/full-stack-jack`

## Также практика использования:
 - Prisma
 - Postgre
 - TailwindCSS

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
