$(function () {

var $links = $('.menu a');
var $active = $('.menu a.is-active');


$links.on('click', function(e){
	e.preventDefault();
	$active.removeClass('is-active');
	var $act = $(this).addClass("is-active");
	$active = $(this);
	var $click = $active.attr('rel');
})




})



