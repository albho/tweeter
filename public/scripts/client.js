(function ($) {
  $(() => {
    loadTweets();
  });

  // get tweets from server
  const loadTweets = () => {
    $.get("/tweets").then(data => {
      resetElements();
      renderTweets(data);
    });
  };

  // clear input field and all tweets, reset character counter, enable submit button
  const resetElements = () => {
    $("#tweet-text").val("");
    $(".tweets-container").empty();
    $(".char-counter").text(140);
    $("form button").text("Tweet").prop("disabled", false);
    return;
  };

  // prepend templated tweet to page (reverse chronological)
  const renderTweets = tweets => {
    return tweets.forEach(tweet => {
      const newTweet = createTweetElement(tweet);
      $(".tweets-container").prepend(newTweet);
    });
  };

  // create string with tweet object
  const createTweetElement = tweet => {
    const { user, content, created_at } = tweet;

    let tweet = `
    <article>
      <header>
        <div class="user-info">
          <div>
            <img src='${escapeInput(user.avatars)}' alt='user avatar'>
            <p>${escapeInput(user.name)}</p>
          </div>
          <p class="handle">${escapeInput(user.handle)}</p>
        </div>
        <div class="content">
          <p>
            ${escapeInput(content.text)}
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

    return tweet;
  };

  // helper function to prevent XSS attacks
  const escapeInput = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // send data to server via ajax
  $("form").submit(e => {
    e.preventDefault();

    // error handling for invalid tweet lengths
    const $tweetLength = $("#tweet-text").val().length;
    if (!$tweetLength) {
      const errorMsg = "Tweet cannot be empty.";
      return $(".error-message").text(errorMsg).slideDown(200);
    }

    if ($tweetLength > 140) {
      const errorMsg = `Tweet cannot exceed 140 characters. You currently have ${$tweetLength} characters.`;
      return $(".error-message").text(errorMsg).slideDown(200);
    }

    // ensure error message is hidden, indicate that tweet is submitting
    $(".error-message").text("").slideUp(200);
    $("form button").text("Tweeting...").prop("disabled", true);

    // send tweet to server
    const $data = $("form").serialize();
    return $.post("/tweets", $data).then(() => loadTweets());
  });
})(jQuery);
