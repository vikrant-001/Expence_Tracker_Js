async function addingUser(event){
    event.preventDefault();
    let email = event.target.email.value;
    let name = event.target.name.value;
    let password = event.target.password.value;

    if(!email || !password || !name){
        alert("enter All the data");
        return;
    }

    const userData = {
        email:email,
        name:name,
        password:password,
    }

    try{
        const response = await axios.post("http://localhost:4000/signup",userData);
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}