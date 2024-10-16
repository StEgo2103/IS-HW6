const bodyNodes = () => {
	const body = document.body;

	body.childNodes.forEach((node) => {
		console.log(node);
	});
};

bodyNodes();
