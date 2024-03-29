SUPERLYTICS = {
	TIMER_DELAY: 1000,
	CURRENT_TIME: 0,
	ENDPOINT: 'http://localhost:3001/event/create',
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
		click_item["event"] = 'CLICKS'
		click_item["DOM"] = $(this).html()
		click_item["time"] = SUPERLYTICS.CURRENT_TIME
		gotoWindow = $(this).attr('href') ? $(this).attr('href') : $(this).parents().closest($('a')).attr('href')
		$.ajax({
			type: "POST",
			url: SUPERLYTICS.ENDPOINT,
			data: click_item,
			dataType: "JSON",
			success: function (data) {
				if (gotoWindow) {
					window.location.href = gotoWindow
				}
			},
			error: function(data) {
				if (gotoWindow) {
					window.location.href = gotoWindow
				}
			}
		})
		return false;
	})
}
$(window).on('unload',function() {
	$.ajax({
		url: SUPERLYTICS.ENDPOINT,
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
$(document).ready(function() {
	setCounter()
	captureClicks()
})
