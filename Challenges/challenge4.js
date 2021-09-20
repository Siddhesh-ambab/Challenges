let users = [];

class Person {

	constructor(firstname,lastname,mobNumber){
		this.firstname=firstname;
		this.lastname=lastname;
		this.mobNumber=mobNumber;
	}
	fullName = (firstname, lastname) => { 
		return (`${firstname} ${lastname}`)
	}
}
	
	
const createPerson = (firstname,lastname,mobNumber) => {

	return new Promise((resolve, reject) => {
	setTimeout(()=> {
		if(users.find(user=>user.mobNumber === mobNumber)){
			reject("Phone number is already exist");
		}
		else{
			obj = new Person(firstname,lastname,mobNumber);
			users.push(obj);
			resolve(obj.fullName(firstname, lastname));
	}
	}, 2000)
})
}
const main = () => {

	createPerson("siddhesh","more",9833797535)
	.then(values => console.log(values))
	.catch((error) => console.log(error))

	createPerson("anisha","chavan",5678432127)
	.then(values => console.log(values))
	.catch((error) => console.log(error))

	createPerson("sayali","rewale",5463893217)
	.then(values => console.log(values))
	.catch((error) => console.log(error))

	createPerson("sid","more",123456789)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("atul","bawaskar",123456789)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("gaurav","mahadik",1237894563)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("keval","marchant",234567891)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("aniket","bawaskar",2341567596)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("pratik","patil",123456789)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

	createPerson("sakshi","tisgavkar",2168953478)
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

}
main();
