// Prevent spoilerphobes from seeing spoilers
// Solution: Hide spoilers and reveal them through user interaction

// 1. Hide spoilers
var $spoiler = $('.spoiler').find('span').hide();
// 2. Add buttons
var $button = $('.spoiler').append('<button>Reveal Spoiler!</button>').find('button');
// 3. When button pressed
$button.on('click', function () {
	$clickedButton = $(this);
	// 3.1 Show the spoiler
	$clickedButton.prev().show()
	// 3.2 Get rid of button
	$clickedButton.remove();	
});

