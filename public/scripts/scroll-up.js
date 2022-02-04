(function ($) {
  $(() => {
    $(".scroll-up").on("click", onClick);
    $(document).on("scroll", onScroll);
  });

  function onClick() {
    // scroll up with animation
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
  }

  // toggle scroll button visibility based on page position
  function onScroll() {
    const $documentPosition = $(this).scrollTop();
    const $scrollBtn = $(".scroll-up");
    const $btnIsDisplayed =
      $scrollBtn.css("display") === "block" ? true : false;

    if ($documentPosition < 200 && $btnIsDisplayed) {
      $scrollBtn.fadeOut();
      return;
    }

    if ($documentPosition >= 200 && !$btnIsDisplayed) {
      $scrollBtn.fadeIn();
      return;
    }
  }
})(jQuery);
