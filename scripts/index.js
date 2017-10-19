var io = new IntersectionObserver(
	entries => {
		const target = entries[0].target.parentElement(
			Array.from(document.querySelectorAll('.topMenu a')).forEach(menuEl => {
				menuEl.parentElement.classList.toggle(
					'active',
					menuEl.getAttribute('href') == '#' + target.id
				)
			})
		)
	},
	{
		rootMargin: '0px 0px 50%',
		threshold: [0.1]
	}
)
// Start observing an element
Array.from(document.querySelectorAll('.scrollblock h2')).forEach(el => {
	io.observe(el)
})
