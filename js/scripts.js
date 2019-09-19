$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();
    var name = $("input#name").val();

    var age = document.getElementById('ageRange')
    var interests = document.getElementById('interests')
    var age = document.getElementById('ageRange')

    $(".name").text(name);

    $("#result").show();
