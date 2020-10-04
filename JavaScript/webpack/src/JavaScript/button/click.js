console.log('Hello Click2')
const button = document.querySelectorAll('.button').forEach(function (button) {
	button.addEventListener('click', {value: `${button.value}`, handleEvent: onClickButton});
})

function onClickButton(e) {
	console.log(`${this.value}がクリックされました`)
}