$(() => {
  // scroll back up with animation
  $("#scroll-up").on("click", () => {
    $("html").animate(
      {
        scrollTop: 0,
      },
      500
    );

    // show and focus text field
    $("#new-tweet").slideDown();
    $("#tweet-text").focus();
    $("#nav-toggle > i.fa-angle-double-up").css("display", "block");
    $("i.fa-angle-double-down").css("display", "none");
  });

  // toggle scroll up button based on page position
  $(document).scroll(function () {
    if ($(this).scrollTop() < 200) {
      $("#scroll-up").fadeOut();
    } else {
      $("#scroll-up").fadeIn();
    }
  });
});
