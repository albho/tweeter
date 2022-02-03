$(() => {
  $("#tweet-text").on("input", onInput);
});

function onInput() {
  const $input = $(this);

  // enable submit button and ensure error message is hidden on input change
  $("form button").prop("disabled", false);
  $("#error-message").slideUp();

  // dynamically change counter number and color
  const $charLength = $input.val().length;
  const counterText = 140 - $charLength;
  const textColor = counterText >= 0 ? "inherit" : "red";

  const $form = $input.closest("form");
  const $counter = $form.find("#char-counter");
  $counter.text(counterText).css("color", textColor);
}
