/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const renderTweets = function (tweets) {
    for (const tweet in tweets) {
      const newTweet = createTweetElement(tweets[tweet]);
      $("#all-tweets").append(newTweet);
    }
  };

  const createTweetElement = function (tweet) {
    const { user, content, created_at } = tweet;

    let $tweet = `<article>
      <header>
        <div class="user-info">
          <div>
            <img src='${user.avatars}' alt='user avatar'>
            <p>${user.name}</p>
          </div>
          <p class="handle">${user.handle}</p>
        </div>
        <div class="content">
          <p>
            ${content.text}
          </p>
        </div>
      </header>
      <footer>
        <p>${timeago.format(created_at)}</p>
        <div class="icons">
          <i class="fa-solid fa-flag fa-xs"></i>
          <i class="fa-solid fa-retweet fa-xs"></i>
          <i class="fa-solid fa-heart fa-xs"></i>
        </div>
      </footer>
    </article>`;

    return $tweet;
  };

  renderTweets(data);
});
