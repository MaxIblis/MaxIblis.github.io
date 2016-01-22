$(function () {

var $links = $('.menu a');
var $active = $('.menu a.is-active');
var $divActive = $('.text');

$links.on('click', function(e){
	e.preventDefault();
	$active.removeClass('is-active');
	var $act = $(this).addClass("is-active");
	$active = $(this);
	var $click = $active.attr('rel');
	console.log($click);
	$divActive.css('display', 'none');
	var $div = $("#"+$click).css('display','block');
	$div = $divActive;

})




})



