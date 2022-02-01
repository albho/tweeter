$(document).ready(() => {
  $("section.new-tweet > form > #tweet-text").on("input", function () {
    const counter = 140 - $(this).val().length;
    const textColor = counter >= 0 ? "inherit" : "red";
    $(".counter").text(counter).css("color", textColor);

    // *** review - compass wants .counter
    // to be selected via dom traversal***
    // $(this)
    //   .parent("form")
    //   .children("div > output.counter")
    //   .text(140 - $(this).val().length);
  });
});
