function hightlightMenuItem() {
	const el = Array.from(document.querySelectorAll('.scrollblock[id]')).find(el => el.getBoundingClientRect().bottom > window.innerHeight * 0.5	)
	Array.from(document.querySelectorAll('.topMenu a')).forEach(menuEl => {
		menuEl.parentElement.classList.toggle(
			'active',
			menuEl.getAttribute('href') == '#' + el.id
		)
	})
}

document.addEventListener(
	'scroll',
	() => {
		hightlightMenuItem()
	},
	{ passive: true }
)

hightlightMenuItem()
