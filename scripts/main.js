const getUserName = document.querySelector("strong");

getUserName.textContent = prompt("Please enter your first name: ");

let storedUserName = getUserName.textContent;

alert(`Welcome, ${storedUserName}!`);
alert("Thank you for the input!");
alert("Happy Reading!");
