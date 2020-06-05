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
    $("#javaScript").show();
    $("#bestLang").show();
    $("#python, #ruby").hide();
  } else if (type === "analytical") {
    $("#python").show(); 
    $("#javaScript, #ruby").hide();
  } else {
    $("#ruby").show(); 
    $("#javaScript, #python").hide();
  }

  event.preventDefault();
  });
}); 