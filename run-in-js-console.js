(function(){
	function checkRooms() {
		// Show room name in the input box (placeholder)
		$('.room-header').each(function() {
			$(this).parent().find('.room-textarea')
				.attr('placeholder', $(this).find('.room-marg .room-name').text());
		});
	}
	// Opened rooms
	checkRooms();
	// Trigger from clicking on forums or orgs
	$('.roster-forums li, .roster-orgs li').click(function() {
		checkRooms();
	});
})();
