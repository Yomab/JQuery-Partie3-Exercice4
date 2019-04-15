$('#hauteur').click(function(){
var height10 = $('#rectangle').css('height','+=10px');
console.log($('#rectangle').css('height'));
if (($('#rectangle').css('height'))=='100px'){
  $('#rectangle').css('height','10px');
}
});
$('#green').click(function(){
var green = $('#rectangle').css('background-color','green');
});
$('#initColor').click(function(){
var firstcolor = $('#rectangle').css('background-color','#1e89d6');
});
$('#hide').click(function(){
var hiderect = $('#rectangle').hide();
});
$('#show').click(function(){
var hiderect = $('#rectangle').show();
});
