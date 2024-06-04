# Chess

<img width="1918" alt="image" src="https://github.com/albertpratomo/chess/assets/25815584/9abb7240-50b8-4757-a07b-e551d19708cc">

This is a chessboard which records which squares you clicked. You can play with it [here](https://chessbert.vercel.app/).

## Setup

1. `git clone` this repo
1. Install `pnpm` on your machine
1. `pnpm i`
1. `pnpm dev`
1. App should be live in `localhost:3000`
1. `pnpm test` to run the automated tests

## Application Requirements

1. Create a page with a chessboard and a sidebar.
1. On desktop devices the sidebar should be positioned to the right of the chessboard.
1. On mobile devices the sidebar should be positioned below the chessboard.
1. The chessboard should resize responsively to consume available space.
1. Clicking a chessboard square should highlight the square.
1. Keep track of which squares are clicked and the order in which they're clicked.
1. Display the information collected from step 6 in the sidebar.

## Notes

1. This app is fully responsive (mobile, tablet, desktop). The chessboard will grow to consume the available space.
1. As a bonus I added a feature where user can change the theme of the board. I implemented this feature using CSS variables.
1. I added a Vitest component test to ensure that the main functions are working well. See this [test file](https://github.com/albertpratomo/chess/blob/main/pages/index.test.ts).

## Improvement List

1. Create reusable TS enum and type for `type Theme = 'Green' | 'Brown' | 'Purple'`.
1. Improve the ThemeSelect component to use a better dropdown component.
1. Use vue-i18n instead of hardcoding texts.
1. Add test for the "theme switching" feature.
