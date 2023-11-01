const displayLeader = (userData) => {

    console.log(userData);
    const led = document.querySelector('#leader');
    const {name,total} = userData;
    console.log(name);
    const div = document.createElement('div');
    div.className = "test";
    const p1 = document.createElement('p');
    p1.innerText = `Name : ${name}`;
    const p2 = document.createElement('p');
    p2.innerText = `Amount : ${total}`;

    div.appendChild(p1);
    div.appendChild(p2);

    led.appendChild(div);

}
window.addEventListener('DOMContentLoaded',async () => {
    try{
        const response = await axios.get('http://localhost:4000/leaderBoard');
        console.log(response.data);

        response.data.map(value => (
            displayLeader(value)
        ));
        
    }
    catch(err){
        console.log(err);
    }
});