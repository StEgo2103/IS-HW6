const table = document.createElement('table');
table.style.width = 'auto';
table.style.textAlign = 'center';
table.style.border = '1px solid black';

for (let i = 1; i <= 12; i++) {
	const row = table.insertRow();
	const cell = row.insertCell();
	cell.textContent = i;
	cell.style.border = '1px solid black';
	cell.style.color = 'black';
}

document.body.appendChild(table);
