let users = [];

class Person {

	constructor(firstname,lastname,mobNumber){
		this.firstname=firstname;
		this.lastname=lastname;
		this.mobNumber=mobNumber;
	}
	fullName = (firstname, lastname) => { console.log(`${firstname} ${lastname}`) }
}
	
const createPerson = (firstname,lastname,mobNumber) => {

	return new Promise((resolve, reject) => {
	setTimeout(()=> {
		if(users.some(user=>user.mobNumber === mobNumber)){
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
const main = async() => {

	try {
		await createPerson("siddhesh","more",9833797535)
		
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("anisha","chavan",5678432127)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("sayali","rewale",5463893217)
	}
	catch (error){
		console.log(error)
	}
		
	try {
		await createPerson("sid","more",123456789)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("atul","bawaskar",123456789)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("gaurav","mahadik",1237894563)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("keval","marchant",234567891)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("aniket","bawaskar",2341567596)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("pratik","patil",123456789)
	}
	catch (error){
		console.log(error)
	}

	try {
		await createPerson("sakshi","tisgavkar",2168953478)
	}
	catch (error){
		console.log(error)
	}
}
main();