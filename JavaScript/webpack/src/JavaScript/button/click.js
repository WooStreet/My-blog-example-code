document.querySelectorAll('.button').forEach(function (button) {
	button.addEventListener('click', {value: `${button.value}`, handleEvent: onClickButton});
})

function onClickButton() {
	console.log(`${this.value}がクリックされました`)
}