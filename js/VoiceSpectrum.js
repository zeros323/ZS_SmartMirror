/**
 * http://usejsdoc.org/
 */

var space = $('p').width() + 2;
var numBars = 5;
update();

function update(){
	$('#bars').html('<p></p>');
	
	for (i = 0; i < numBars; i++)
	{
	  $('<p></p>').insertAfter('p');
	}  
	  
	$('p').each(function(index, element){
	  $(this).css('left', (index * space) + 'px');
	});
}

setInterval(function(){
  $('p').each(function(){
    $(this).css('height', function(){
      return (Math.random() * 150)
    });
  });
},150);

$('input').change(function(){
  var red = $('#red').attr('value');
  var green = $('#green').attr('value');
  var blue = $('#blue').attr('value');
  var opacity = $('#opacity').attr('value') / 100;
  space = $('#space').attr('value');
  numBars = $('#numBars').attr('value');
  update();
  
  $('p').css('background-image', '-webkit-linear-gradient(bottom, rgba(' + red + ',' + green + ',' + blue + ',' + opacity + '), transparent)');
});



update();

