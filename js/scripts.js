$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();
    var name = $("input#name").val();

    $(".name").text(name);

    $("#result").show();
