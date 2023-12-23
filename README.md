# 1) Deployed URL
### https://icecream.sheleoni.com/ 🍦

## Previous Repo
This is a refactored version of https://github.com/sheleoni/hiragana-icecream , which previously was deployed on Netlify using Vite. 
In order to add login functions, we have refactored the game into NextJS + AuthJS (aka NextAuth). 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# 2) Gameplay
- Click the pronunciation of the hiragana / katakana character shown
- If you answer correctly for the same character consecutively, the tide level in the hexgon rises
- Once a hexagon is filled, you can click on it to unlock a new ice-cream scoop! 

![Demo_hiragana_game_vite_unlock_hiragana](https://github.com/sheleoni/hiragana-icecream/assets/85994674/5e5b0e70-9754-491e-a458-8a1b5d50aee5)

## Functionalities

### Filter Hiragana / Katakana Characters
- Click the funnel (⏳) icon to toggle the modal. Choose which hiragana / katakana characters you would like to be tested on.
![Demo_hiragana_game_vite_filter_modal](https://github.com/sheleoni/hiragana-icecream/assets/85994674/a9c4c3ae-c8e4-4c7e-9655-e4548c361edb)

### Save to DB (MongoDB)
- Clicking 'Submit Score' saves current user data (score, icecream stack, tide level) to database 
![Demo_hiragana_game_vite_save_to_database](https://github.com/sheleoni/hiragana-icecream/assets/85994674/504f5244-8c77-4d21-9521-fde9d3f8a843)



# 3) Testing on your computer

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
