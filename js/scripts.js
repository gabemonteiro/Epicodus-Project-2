$(document).ready(function() {
  $("button").click(function(event) {

    var name = $("input#name").val();
    var age = $('#ageRange').val();
    var interests = $('#interests').val();
    var color = $('#color-select').val();

    // Check to make sure user has made all selections
    if (name === '' || age === 'unselected' || interests === 'unselected' || color === 'unselected') {
      alert("Please fill out all your selections")
      event.preventDefault()
      return;
    }

    // Logic to handle which results we display
    if (age === 'over50') {
      $("#old").toggleClass('hidden');
      $("#old .name").text(name);
      $("#quiz").hide();
      
    }
    if (age === "sub18" && (interests === "web" || "mobile" || "apps" || "undecided")) {
      $("#resultsYoung").toggleClass("hidden")
      $('#resultsYoung h1').toggleClass(color);
      $("#resultsYoung .name").text(name);
      $("#quiz").hide();
    }

    event.preventDefault()
  });
});
