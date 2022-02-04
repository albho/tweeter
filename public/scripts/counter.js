(function ($) {
  $(() => {
    $("#tweet-text").on("input", onInput);
  });

  function onInput() {
    const $input = $(this);

    // dynamically update counter number and color
    const counterText = 140 - $input.val().length;
    const textColor = counterText >= 0 ? "inherit" : "red";

    const $form = $input.closest("form");
    const $counter = $form.find("#char-counter");

    $counter.text(counterText).css("color", textColor);
  }
})(jQuery);
