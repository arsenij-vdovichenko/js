const user = {
    name: "arsenii",
    age: 20, 
    location: "ucrain",
    surname: "vdovychenko",

}

// for (const key in user){
    
//     console.log(user[key]);
    
// }


const key = Object.keys(user)
console.log(key);
for(const x of key) {
    // console.log(x);
    console.log(user[x]);
    
}