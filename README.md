# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Getting Started

1. git clone `git@github.com:albho/tweeter.git`
2. cd `tweeter`
3. run `npm install`
4. run `npm start` or `npm run local` to use nodemon
5. access in web browser @ http://localhost:8080

- If developing, edit CSS using the Sass (.scss) files and use the `npm run sass-watch` command in terminal.

## Features

- **Fully Responsive**
  - Mobile first design
- **DOM Manipulation**
  - Input field toggles dynamically with animations
  - Button to help user easily scroll back up
  - Display tweets in reverse chronological order
- **Error handling**
  - Dynamically updating character count
  - Displays error message for invalid tweets
  - Button disables briefly after 'tweet' submission to prevent double submission
- **Security**
  - Basic XSS protection

## Screenshots

!["Screenshot of tweeting on a small screen"](https://github.com/albho/tweeter/blob/master/docs/small-screen.png?raw=true)

!["Screenshot of collapsed tweet box on a small desktop"](https://github.com/albho/tweeter/blob/master/docs/medium-screen.png?raw=true)

!["Screenshot of all tweets on a large screen"](https://github.com/albho/tweeter/blob/master/docs/large-screen.png?raw=true)

## Dependencies

- [Node 5.10.x or above](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [chance](https://www.npmjs.com/package/chance)
- [md5](https://www.npmjs.com/package/md5)

**Imports**

- CSS
  - [Normalize.css 8.0.1](https://necolas.github.io/normalize.css/)
- JS
  - [jQuery 3.4.1](https://code.jquery.com/jquery-3.4.1.js)
  - [timeago.js 4.0.2](https://timeago.org/)
  - [Font Awesome 6.0.0-beta3](https://fontawesome.com/)
- Fonts
  - [Bungee](https://fonts.google.com/specimen/Bungee)
  - [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)

**Development**

- [Sass](https://sass-lang.com/)
- [nodemon](https://www.npmjs.com/package/nodemon)
