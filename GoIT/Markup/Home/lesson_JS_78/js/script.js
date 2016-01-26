$(function () {

	var $links = $('.menu a');
	var $active = $('.menu a.is-active');
	var $divActive = $('.text__shown');

	$links.on('click', 
		function(e){
			e.preventDefault();
			$active.removeClass('is-active');
			var $act = $(this).addClass("is-active");
			$active = $act;
			var $click = $active.attr('rel');
			$divActive.removeClass('text__shown');
			var $div = $("#"+$click).addClass('text__shown');
			$divActive = $div;
		}
	);
	
	$('input').hover(showText, hideText);

	function showText(){
			$(this).parent().find('.show_hint').remove();
			var $hint = $(this).attr('title');
			$(this).parent().append("<p class='show_hint'>" + $hint + "</p>");
	}; 	
	
	function hideText(){
			$(this).parent().find('.show_hint').remove();
	};

	$('input').mouseover( 
		function(){
			var $hint = $(this).attr('title');
			$(this).attr('title', "");
			$(this).on('mouseout',
				function(){
				$(this).attr('title', $hint);
				});
		});

	

	$('.info').on('click', 
		function(){
			$('.form input').each(showText);
		});

	// function allHints(){
	// 	$('.form input').each(showText);
	// };
	// function allHintsHide(){
	// 	$('.form input').each(hideText);
	// };

	// $('.info').toggle(allHints, allHintsHide);

})



