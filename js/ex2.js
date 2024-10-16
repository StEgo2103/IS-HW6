const displayText400 = () => {
	const level400 = document.getElementsByClassName('400level');

	for (let i = 0; i < level400.length; i++) {
		console.log(level400[i].textContent);
	}
};

displayText400();
