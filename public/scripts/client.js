/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const renderTweets = function (tweets) {
    for (const tweet in tweets) {
      const newTweet = createTweetElement(tweets[tweet]);
      $("#tweets-container").append(newTweet);
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

  $("form").submit(function (e) {
    e.preventDefault();

    const form = $(this);
    const actionUrl = form.attr("action");

    $.ajax({
      type: "POST",
      url: actionUrl,
      data: form.serialize(),
    });
  });

  const loadTweets = function () {
    $.ajax("/tweets", { method: "GET" }).then(function (data) {
      renderTweets(data);
    });
  };

  loadTweets();
});
