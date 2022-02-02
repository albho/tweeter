$(() => {
  // scroll back up with animation
  $("button#scroll-up").on("click", () => {
    $("html").animate(
      {
        scrollTop: 0,
      },
      500
    );

    // show and focus text field
    $("section#new-tweet").slideDown();
    $("textarea#tweet-text").focus();
    $("#nav-toggle > i.fa-angle-double-up").css("display", "block");
    $("i.fa-angle-double-down").css("display", "none");
  });

  // toggle scroll up button based on page position
  $(document).scroll(function () {
    if ($(this).scrollTop() < 200) {
      $("button#scroll-up").fadeOut();
    } else {
      $("button#scroll-up").fadeIn();
    }
  });
});
