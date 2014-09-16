(function(){
	// Show room name in the input box (placeholder)
	$('.room-header').each(function() {
		$(this).parent().find('.room-textarea')
			.attr('placeholder', $(this).find('.room-marg .room-name').text());
	});
})();
