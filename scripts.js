var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
	 maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
	 allNames = femaleNames.concat(maleNames),
	newName = 'Marian',
	indexofallNames = allNames.indexOf('newName')
	newNameMarian = allNames.push('Marian')
console.log('The search value is on ' + indexofallNames + ' position')
console.log(allNames[indexofallNames]);
console.log(allNames)

if (allNames.indexOf(newName) === -1) {
	console.log('prawidłowy')
}
