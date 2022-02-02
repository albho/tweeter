$(() => {
  $("button#nav-toggle").click(() => {
    let $newTweet = $("section#new-tweet");
    if ($newTweet.css("display") === "none") {
      $("section#new-tweet").slideDown();
    } else {
      $("section#new-tweet").slideUp();
    }
  });
});
