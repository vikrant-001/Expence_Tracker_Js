const lgout = document.querySelector('.lg');
lgout.addEventListener('click' ,(e) => {
    localStorage.removeItem('res');
    window.location.href = "login.html"
});

const userID = localStorage.getItem('res');
if(userID === undefined || userID === null){
    window.location.href = "login.html"
};
console.log(userID);

async function addExpence(event){
    event.preventDefault();
    const expence = event.target.expence.value;
    const description = event.target.description.value;
    const price = event.target.amount.value;

    if(!expence || !description || !price || !userID){
        alert("Enter all the Data");
        return;
    }

    const expenceData = {
        expence:expence,
        description:description,
        price:price,
        userID:userID
    };

    try{
        const response = await axios.post('http://localhost:4000/addExpence',expenceData);
        console.log(response);
    }

    catch(err){
        console.log(err);
    }
}

async function showExpence(userData){
    const expns = document.querySelector('#exp');
    let {expence,description,price} = userData;
    const div = document.createElement('div');
    div.classList.add("expnc")
    const p1 = document.createElement('p');
    p1.innerText = expence;
    div.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = description;
    div.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerText = price;
    div.appendChild(p3);

    // p.innerText = `Expence:${expence}  '''  Dis :${description}    Amount : ${price}`;

    const del = document.createElement('input');
    del.type = 'button'
    del.value = 'Delete';
    del.classList.add("btn")

    const id = userData.id;
    const ids = {
        id,
        userID
    }
    del.onclick = async () => {
        expns.removeChild(div);
        try{
            const response = await axios.delete(`http://localhost:4000/delExpence/${ids}`);
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

    div.appendChild(del);
    expns.appendChild(div);
}

window.addEventListener('DOMContentLoaded',async () => {
    try{
        const response = await axios.get(`http://localhost:4000/findUser/${userID}`);
        console.log(response.data.data);
        
        for(let i = 0; i < response.data.data.length;i++){
            showExpence(response.data.data[i]);
        }
        
    }
    catch(err){
        console.log(err);
    }
});