SUPERLYTICS = {
	TIMER_DELAY: 1000,
	CURRENT_TIME: 0,
	URL: 'http://localhost:3001/',
	KEY: 'KEY_TEMP',
	SCROLL_ARRAY: [],
	MOUSE_ARRAY: []
}

function setCounter() {
	setInterval(function() {
		SUPERLYTICS.CURRENT_TIME++
	}, SUPERLYTICS.TIMER_DELAY)
}

function captureScroll() {
	setInterval(function() {
		scroll_item = {}
		scroll_item["position"] = $(document).scrollTop()
		scroll_item["time"] = SUPERLYTICS.CURRENT_TIME
		SUPERLYTICS.SCROLL_ARRAY.push(scroll_item)
	}, SUPERLYTICS.TIMER_DELAY)
}

function captureMousePosition() {
	var currentMousePos = { x: -1, y: -1 };
	$(document).mousemove(function(event) {
	    currentMousePos.x = event.pageX;
	    currentMousePos.y = event.pageY;
	});
	setInterval(function() {
		mouse_item = {}
		mouse_item["mouse_x"] = currentMousePos.x
		mouse_item["mouse_y"] = currentMousePos.y
		mouse_item["time"] = SUPERLYTICS.CURRENT_TIME
		SUPERLYTICS.MOUSE_ARRAY.push(mouse_item)
	}, SUPERLYTICS.TIMER_DELAY)
}

function captureClicks() {
	$(document).on('click', '*', function(e) {
		e.stopPropagation()
		click_item = {}
		click_item["DOM"] = $(this)[0]
		click_item["time"] = SUPERLYTICS.CURRENT_TIME
	})
}
$(window).on('unload',function() {
	$.ajax({
		url: SUPERLYTICS.URL,
		key: SUPERLYTICS.KEY,
		data: 'data',
		success: function() {
			console.log('success')
		},
		error: function() {
			console.log('oops')
		}
	})
})
