$(() => {
  // scroll back up with animation
  $(".scroll-up").on("click", () => {
    $("html").animate(
      {
        scrollTop: 0,
      },
      500
    );

    // show and focus text field
    $(".new-tweet").slideDown();
    $("#tweet-text").focus();
    $(".nav-toggle > i.fa-angle-double-up").css("display", "block");
    $("i.fa-angle-double-down").css("display", "none");
  });

  // toggle scroll up button visibility based on page position
  $(document).scroll(() => {
    const $displayProperty = $(".scroll-up").css("display");
    const $documentPosition = $(document).scrollTop();

    if ($documentPosition < 200 && $displayProperty === "block") {
      $(".scroll-up").fadeOut();
      return;
    }

    if ($documentPosition >= 200 && $displayProperty === "none") {
      $(".scroll-up").fadeIn();
      return;
    }
  });
});
