$(() => {
  $("button#nav-toggle").click(() => {
    if ($("section#new-tweet").css("display") === "none") {
      $("section#new-tweet").slideDown();
      $("i.fa-angle-double-up").css("display", "block");
      $("i.fa-angle-double-down").css("display", "none");
    } else {
      $("section#new-tweet").slideUp();
      $("i.fa-angle-double-down").css("display", "block");
      $("i.fa-angle-double-up").css("display", "none");
    }
  });
});
