document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.super-accordion-item')
		.forEach(item => {
			item.querySelector('.toggler')
				.addEventListener('click', function () {
					$(item.querySelector('.wrapper'))
						.slideToggle()
					this.classList.toggle('show')
				})
			if (item.classList.contains('show')) {
				$(item.querySelector('.wrapper'))
					.slideDown()
				item.querySelector('.toggler')
					.classList.add('show')
			}
		})
})