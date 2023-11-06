const from = document.querySelector('.lgnform');

async function userLogin(event){
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;

    let userData = {
        email:email,
        password:password
    }

    try{
        const response = await axios.post('http://localhost:4000/login',userData);
        console.log(response.data.id);
        if(response.data != null){
            localStorage.setItem('res',response.data.id);
            if(response.data.Premium == true){
                localStorage.setItem('pri',response.data.Premium);
            } 
            window.location.href = 'expence.html'
        }
    }
    catch(err){
        console.log(err)
    }

}



