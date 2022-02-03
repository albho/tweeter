$(() => {
  $("#tweet-text").on("input", function () {
    const counter = 140 - $(this).val().length;
    const textColor = counter >= 0 ? "inherit" : "red";

    $(this)
      .parent()
      .children("div")
      .children("output.counter")
      .text(counter)
      .css("color", textColor);

    $("#error-message").slideUp();
  });
});
