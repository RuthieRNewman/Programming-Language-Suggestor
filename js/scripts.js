$(document).ready(function() {
  $("#survey").submit(function(event) {
  const nameInput = $("#userName").val();  
  //const dob = $("#birthDate").val();
  //const hobby = $("#favHobby").val();
  //const color = $("#favColor").val();
  //const season = $("#favSeason").val();
  //const type = $("input:radio[name=sunSign]:checked").val();


  const type = $("#jobStyle").val();

  if (type === "creative") {
    $(".userName").append(nameInput);
    $("#bestLang").show();
    $("#javaScript").show();
    $("#python, #ruby").hide();
  } else if (type === "analytical") {
    $(".userName").append(nameInput);
    $("#bestLang").show();
    $("#python").show(); 
    $("#javaScript, #ruby").hide();
  } else {
    $(".userName").append(nameInput);
    $("#bestLang").show();
    $("#ruby").show(); 
    $("#javaScript, #python").hide();
  }

  event.preventDefault();
  });
}); 