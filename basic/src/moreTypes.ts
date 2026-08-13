let response: any = "42";

let numericLength: number = (response as string).length
type Book ={
    name: string
}

let bookString = '{"name":" who moved my cheese}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

// type assertion
const inputElement = document.getElementById("username") as HTMLInputElement

// unknown and any
let value: any
value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase()

let newvalue: unknown

newvalue = "chai"
newvalue = [1,2,3]
newvalue = 2.5
if(typeof newvalue == "string"){
    newvalue.toUpperCase();
}


try {

} catch(error) {
   if(error instanceof Error){
    console.log(error.message); 
   }
   console.log("error",error);
}


const data:unknown = "chai aur code"
const strData: string = data as string


type Role = "admin" | "user" | "superadmin"
function redirectBasedOnRole(role: Role) : void {
    if(role === "admin") {
        console.log("redirecting to admin dashboard");
        return 
    }
    if(role === "user"){
        console.log("redirecting to user dashboard");
        return
    }
    role;
}



function neverReturn() : never{
    while(true){}
}