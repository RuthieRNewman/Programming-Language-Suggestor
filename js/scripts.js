$(document).ready(function(){
  $("#survey").submit(function(event){
  const dob = $("#birthDate").val();
  const hobby = $("#favHobby").val();
  const color = $("#favColor").val();
  const season = $("#favSeason").val();

  const type = $("#jobStyle").val();
 

  if (type === "creative") {
    $("#javaScript").show();
  }

  event.preventDefault();
  });
}); 