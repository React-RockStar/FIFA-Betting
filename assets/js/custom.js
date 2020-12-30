
$(document).ready(() => {
	// script for auto review slide
	let reviewPages = $('div.review-page')
	let dots = $('div.dot')


	// set interval for auto slide
	setInterval(() => {
		showNextReviewPage(1)
	}, 5000);


	// set handler for next, prev button
	$('div.arrow.left').click(() => showNextReviewPage(0))
	$('div.arrow.right').click(() => showNextReviewPage(1))

	// set handler for eact dot
	$('div.dot').click(function() {
		// get no of page to show
		let target = $(this).attr('data-no')

		// show that page
		reviewPages.map((i, page) => {
			if(i != target)
				return $(page).removeClass('show')

			return $(page).addClass('show')
		})

		// make this dot active
		return activeDot(target)
	})



	// function to show next review page
	let showNextReviewPage = direction => {
		for (var i = reviewPages.length - 1; i >= 0; i--) {
			if(!!$(reviewPages[i]).hasClass('show')) {
				$(reviewPages[i]).removeClass('show')

				if(!!direction)
					if(i !== (reviewPages.length - 1)) {
						$(reviewPages[i+1]).addClass('show')
						activeDot(i+1)
					}
					else {
						$(reviewPages[0]).addClass('show')
						activeDot(0)
					}
				else 
					if(i !== 0) {
						$(reviewPages[i-1]).addClass('show')
						activeDot(i-1)
					}
					else {
						$(reviewPages[reviewPages.length - 1]).addClass('show')
						activeDot(reviewPages.length - 1)
					}

				break;
			}
		}
	}


	// function to active certain dot
	let activeDot = target => {
		dots.map((i, dot) => {
			$(dot).removeClass('active')
		})

		return $(`div.dot[data-no="${target}"]`).addClass('active')
	}

})