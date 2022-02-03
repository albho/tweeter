# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

**Stack**: HTML, CSS, JS, SASS, jQuery, AJAX, Node, Express

## Notable Features

- **Fully Responsive**
  - Mobile first design
  - Mobile, tablet, and desktop views
- **DOM Manipulation**
  - Tweet input field toggles dynamically with animations
  - Button to help user easily scroll back up
  - Display tweets in reverse chronological order with time submitted
- **Error handling**
  - Dynamically updating character count
  - Displays error message for invalid tweets
  - Button disables briefly after 'tweet' submission to prevent double submission
- **Security**
  - Basic XSS protection

## Notes

- Data is not persistent

## Dependencies

- Express
- Node 5.10.x or above
