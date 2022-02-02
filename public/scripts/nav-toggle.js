$(() => {
  $("button#nav-toggle").click(() => {
    if ($("section#new-tweet").css("display") === "none") {
      // show and focus text field, toggle button arrow direction
      $("section#new-tweet").slideDown();
      $("textarea#tweet-text").focus();
      $("#nav-toggle > i.fa-angle-double-up").css("display", "block");
      $("i.fa-angle-double-down").css("display", "none");
    } else {
      // hide and blur text field, toggle button arrow direction
      $("section#new-tweet").slideUp();
      $("textarea#tweet-text").blur();
      $("i.fa-angle-double-down").css("display", "block");
      $("#nav-toggle > i.fa-angle-double-up").css("display", "none");
    }
  });
});
