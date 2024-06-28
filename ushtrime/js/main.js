$(window).ready(function(){

    alert('It is woorking!!');


});

$('#header');

$('li').click(function(){
    alert('clicked');

});

$('#btn').click(function(){
	console.log($('#h1').text());
    $('#h1').text('Testing text');
    $('#h1').append('Extra text');
});

$(".hidden").show();
$(".hidden").show(300);
$(".hidden").show('slow');

$('#square').animate({
    'width':'200px',
    'height':'200px'
});