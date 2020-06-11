$(document).ready(function() {
  $("#survey").submit(function(event) {
  const nameInput = $("#userName").val();  
  //const dob = $("#birthDate").val();
  //const hobby = $("#favHobby").val();
  //const color = $("#favColor").val();
  //const season = $("#favSeason").val();
  //const type = $("input:radio[name=sunSign]:checked").val();
  $("#python, #ruby, #javaScript").hide();
  $("#bestLang").show();


  const type = $("#jobStyle").val();

  if (type === "creative") {
    $(".userName").text(nameInput);
    $("#javaScript").show();
    
  } else if (type === "analytical") {
    $(".userName").text(nameInput);
    $("#python").show(); 
    
  } else {
    $(".userName").text(nameInput);
    $("#ruby").show(); 
    
  }

  event.preventDefault();
  });
}); 