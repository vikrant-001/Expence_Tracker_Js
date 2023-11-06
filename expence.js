const lgout = document.querySelector('.lg');
lgout.addEventListener('click' ,(e) => {
    localStorage.removeItem('res');
    localStorage.removeItem('pri')
    window.location.href = "login.html"
});

const preim = document.querySelector("#Premi");
const leader = document.querySelector('#leader');
const userID = localStorage.getItem('res');
const pri = localStorage.getItem('pri');


if(userID === undefined || userID === null){
    window.location.href = "login.html"
};

function check(){
    console.log("hello jii")
    if(pri != null){
        preim.innerText = '';
        leader.innerText = 'LeaderBoad';
    }
}

check();

console.log(userID,pri);

//  payment integration codee ---------------------------------->
let order_id = ''
let key = ''
const paymentId = async () => {
    const response = await axios.get(`http://localhost:4000/orderId/${userID}`);
    console.log('RES ',response);
    order_id = response.data.id;
}  
console.log(order_id)


let options = {
    'key': 'rzp_test_gOex1E2WIDOLRm', // Enter the Key ID generated from the Dashboard// Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    'order_id': order_id,
    'handler' : async function (response) {
        await axios.put('http://localhost:4000/updateTransation',{
            order_id : order_id,
            paymentId:response.razorpay_payment_id,
            userID:userID,
            status:"Sucessful",
        });
        localStorage.setItem('pri',true);
        alert("you are now premium user");
    }
        
    };


leader.addEventListener('click',(e) => {
    window.location.href = 'leader.html';
})


const rzrp = new Razorpay(options);

preim.addEventListener('click',async (e) => {
    e.preventDefault();
    await paymentId() ;
    rzrp.open();
})

// show expence code -----> ------> -----> 

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
    check();
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