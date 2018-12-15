let contacts = [
    {
        firstName: 'John',
        lastName: 'Smith'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe'
    }
]

function welcomeMessage(){
	console.log("Welcome to your contacts manager!");
}


function userOptions(){
	console.log("Choose one of the options below: \n1: List All contacts \n2: Add a contact \n0: Quit");
	 let options
	do {
	 options= prompt("Select an option:")
	} while (!options)

	switch (options){
	case '1': 
	listContacts(contacts);
	userOptions();
	break;
	case '2':
	addContact();
	userOptions();
	break;
	case '0':
	quit();
	break;
	default:
	console.log("Wrong option, try again!");
	userOptions();
	break;
	}
}

init ();

function init (){
welcomeMessage();
userOptions();
}


function listContacts (contacts){
	for (let i=0; i <contacts.length; i++){
		console.log(`First Name: ${contacts[i].firstName}, Last Name: ${contacts[i].lastName}`);
	}

}


function addContact (){
//get user input
const firstName= prompt("Insert the first  name:");
const lastName= prompt("Insert the last name:");
//creating new object to insert in the array
const newContact ={
	firstName: firstName,
	lastName: lastName
};

contacts.push(newContact);
//user feedback
console.log("Os dados foram inseridos com sucesso!");

}

function quit(){
	
	if (confirm("Are you sure to quit the program?")){
		console.log("Quitting the program....");
	} else {
	userOptions();
	}
}



   
