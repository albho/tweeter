(function ($) {
  $(() => {
    $(".nav-toggle").on("click", onClick);
  });

  function onClick() {
    const $composeSection = $(".new-tweet");
    const $downArrow = $("i.fa-angle-double-down");
    const $upArrow = $(".nav-toggle i.fa-angle-double-up");
    const $input = $("#tweet-text");

    if ($composeSection.css("display") === "none") {
      // show and focus text field, toggle button arrow direction
      $composeSection.slideDown();
      $input.focus();
      $upArrow.css("display", "block");
      $downArrow.css("display", "none");
    } else {
      // hide and blur text field, toggle button arrow direction
      $composeSection.slideUp();
      $input.blur();
      $downArrow.css("display", "block");
      $upArrow.css("display", "none");
    }
  }
})(jQuery);
