const SendMail = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    try{
        const response = await axios.post('http://localhost:4000/ressetPass',{email});
        console.log(response)
    }
    catch(err){
        alert(err);
    }
}