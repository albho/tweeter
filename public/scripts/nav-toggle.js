$(() => {
  $("button#nav-toggle").click(() => {
    if ($("section#new-tweet").css("display") === "none") {
      // show and focus text field, toggle button arrow direction
      $("section#new-tweet").slideDown();
      $("i.fa-angle-double-up").css("display", "block");
      $("i.fa-angle-double-down").css("display", "none");
      $("textarea#tweet-text").focus();
    } else {
      // hide and blur text field, toggle button arrow direction
      $("section#new-tweet").slideUp();
      $("i.fa-angle-double-down").css("display", "block");
      $("i.fa-angle-double-up").css("display", "none");
      $("textarea#tweet-text").blur();
    }
  });
});
