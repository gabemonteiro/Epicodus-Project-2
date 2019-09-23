$(document).ready(function() {
  $("button").click(function(event) {

    var name = $("input#name").val();
    var age = $('#ageRange').val();
    var interests = $('#interests').val();
    var color = $('#color-select').val();

    event.preventDefault()
  });
});
