$(document).ready(function() {
  $("button").click(function(event) {

    var name = $("input#name").val();
    var age = $("#ageRange").val();
    var experience = $("input[type=radio]:checked").val();
    var interests = $("#interests").val();
    var color = $("#color-select").val();

    // Check to make sure user has made all selections
    if (name === "" || age === "unselected" || interests === "unselected" || color === "unselected") {
      alert("Please fill out the entire form.")
      event.preventDefault()
      return;
    }

  // Show old message if user is over 50
    if (age === "over50") {
      $("#old").toggleClass("hidden");
      $("#old h1").toggleClass(color);
      $("#old .name").text(name);
      $("#old .experience").text(experience);
      $("#quiz").hide();
    }
// Show sponge message for user under 18
    if (age === "sub18" && (interests === "web" || "mobile" || "apps" || "undecided")) {
      $("#resultsYoung").toggleClass("hidden");
      $("#resultsYoung h1").toggleClass(color);
      $("#resultsYoung .name").text(name);
      $("#resultsYoung .experience").text(experience);
      $("#quiz").hide();
    }

// 18 to 30 - Will display HTML based on interests
    if (age === "18to30" && (interests === "web" || interests === "undecided")) {
      $("#resultsHtml").toggleClass("hidden");
      $("#resultsHtml h1").toggleClass(color);
      $("#resultsHtml .name").text(name);
      $("#resultsHtml .experience").text(experience);
      $("#quiz").hide();
    }

// 18 to 30 - Will display JavaScript based on interests
    if (age === "18to30" && (interests === "apps")) {
      $("#resultsJavascript").toggleClass("hidden");
      $("#resultsJavascript h1").toggleClass(color);
      $("#resultsJavascript .name").text(name);
      $("#resultsJavascript .experience").text(experience);
      $("#quiz").hide();
    }

// 18 to 30 - Will display Ruby based on interests
    if (age === "18to30" && (interests === "mobile")) {
      $("#resultsRuby").toggleClass("hidden");
      $("#resultsRuby h1").toggleClass(color);
      $("#resultsRuby .name").text(name);
      $("#resultsRuby .experience").text(experience);
      $("#quiz").hide();
    }

// 18 to 30 - Will display Python based on interests
    if (age === "18to30" && (interests === "data")) {
      $("#resultsPython").toggleClass("hidden");
      $("#resultsPython h1").toggleClass(color);
      $("#resultsPython .name").text(name);
      $("#resultsPython .experience").text(experience);
      $("#quiz").hide();
    }

// 30 to 50 - Will display HTML based on interests
    if (age === "30to50" && (interests === "web" || interests === "undecided")) {
      $("#resultsHtml").toggleClass("hidden");
      $("#resultsHtml h1").toggleClass(color);
      $("#resultsHtml .name").text(name);
      $("#resultsHtml .experience").text(experience);
      $("#quiz").hide();
    }

// 30 to 50 - Will display JavaScript based on interests
    if (age === "30to50" && (interests === "apps")) {
      $("#resultsJavascript").toggleClass("hidden");
      $("#resultsJavascript h1").toggleClass(color);
      $("#resultsJavascript .name").text(name);
      $("#resultsJavascript .experience").text(experience);
      $("#quiz").hide();
    }

// 30 to 50 - Will display Ruby based on interests
    if (age === "30to50" && (interests === "mobile")) {
      $("#resultsRuby").toggleClass("hidden");
      $("#resultsRuby h1").toggleClass(color);
      $("#resultsRuby .name").text(name);
      $("#resultsRuby .experience").text(experience);
      $("#quiz").hide();
    }

// 30 to 50 - Will display Python based on interests
    if (age === "30to50" && (interests === "data")) {
      $("#resultsPython").toggleClass("hidden");
      $("#resultsPython h1").toggleClass(color);
      $("#resultsPython .name").text(name);
      $("#resultsPython .experience").text(experience);
      $("#quiz").hide();
    }

    event.preventDefault()
  });
});
