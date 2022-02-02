/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const renderTweets = tweets => {
    // clear input field & all tweets
    $("#tweets-container").html("");
    $("textarea#tweet-text").val("");

    // order (most recent at the top) & render tweets
    tweets.reverse();

    for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $("#tweets-container").append(newTweet);
    }
  };

  // prevent XSS
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = tweet => {
    const { user, content, created_at } = tweet;

    let $tweet = `<article>
      <header>
        <div class="user-info">
          <div>
            <img src='${escape(user.avatars)}' alt='user avatar'>
            <p>${escape(user.name)}</p>
          </div>
          <p class="handle">${escape(user.handle)}</p>
        </div>
        <div class="content">
          <p>
            ${escape(content.text)}
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

  // send data to server via ajax
  $("form").submit(function (e) {
    e.preventDefault();

    // error handling
    const tweetLength = $("textarea#tweet-text").val().length;
    if (!tweetLength) {
      return alert("Tweet cannot be empty.");
    }

    if (tweetLength > 140) {
      return alert("Tweet cannot exceed 140 characters.");
    }

    // send tweet to server
    const form = $(this);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success: null,
      dataType: "json",
    }).done(loadTweets());
  });

  // get data from server via ajax
  const loadTweets = () => {
    $.ajax("/tweets", { method: "GET" }).then(data => {
      renderTweets(data);
    });
  };

  loadTweets();
});
