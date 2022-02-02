/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  // helper function to prevent XSS
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // create template string with tweet obj
  const createTweetElement = tweet => {
    const { user, content, created_at } = tweet;

    let $tweet = `
      <article>
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
      </article>
    `;

    return $tweet;
  };

  // append templated tweet to page
  const renderTweets = tweets => {
    // clear input field & all tweets, clear and hide error message
    $("#tweets-container").html("");
    $("#tweet-text").val("");

    // order (most recent at the top) & render tweets
    tweets.reverse();
    for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $("#tweets-container").append(newTweet);
    }
  };

  // get tweets from server
  const loadTweets = () => {
    $.ajax("/tweets", { method: "GET" }).then(data => {
      renderTweets(data);
    });
  };

  const renderErrMsg = msg => {
    $("#error-message").text(msg).slideDown(200);
  };

  // send data to server via ajax
  $("form").submit(e => {
    e.preventDefault();

    $("#error-message").text("").slideUp(200);

    // error handling
    const tweetLength = $("#tweet-text").val().length;
    if (!tweetLength) {
      return renderErrMsg("Tweet cannot be empty.");
    }

    if (tweetLength > 140) {
      return renderErrMsg(
        `Tweet cannot exceed 140 characters. You currently have ${tweetLength} characters.`
      );
    }

    // send tweet to server
    $.ajax({
      method: "POST",
      url: $("form").attr("action"),
      data: $("form").serialize(),
      success: null,
      dataType: "json",
    }).always(() => {
      loadTweets();
    });
  });

  loadTweets();
});
