
// add event listeners on the "create" and "delete" buttons to trigger the affiliated function on a mouse click
document.getElementById("create").addEventListener("click", addCard);
document.getElementById("delete").addEventListener("click", deleteCard);

// add a card when the user clicks the create button (add the <article> element to the DOM)
function addCard(event) {
	document.getElementById("inputArea").innerHTML += 
		"<article class='dynamicCard'>" + document.getElementById("verbiage").value + "</article>";
}

// delete the last card added when the user clicks the delete button (remove the last <article> element from the DOM)
function deleteCard(event) {
	console.log("Click!");
	document.getElementById("inputArea").removeChild(document.getElementById("inputArea").lastChild)
}