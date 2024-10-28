const elementsHref = document.head.querySelectorAll("[href]")
	// console.log(elementsHref);

	elementsHref.forEach(element => {
		const anchor = document.createElement('a');
		anchor.href = element.href;
		anchor.target = '_blank';
		anchor.textContent = '↗';
		element.appendChild(anchor);
	});

	const elementsSrc = document.head.querySelectorAll("[src]")
	console.log(elementsSrc);

	elementsSrc.forEach(element => {
		const anchor = document.createElement('a');
		anchor.href = element.src;
		anchor.target = '_blank';
		anchor.textContent = '↗';
		element.appendChild(anchor);
	});

