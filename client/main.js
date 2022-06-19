const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const anxietyBtn = document.getElementById("anxietyButton")
// const addComp = document.querySelector("form")
const inspoBtn = document.getElementById("inspirationButton")
const insultBtn = document.getElementById('insultButton')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}
const getAnxiety = () => {
    axios.get("http://localhost:4000/api/anxiety/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}
const getInspo = () => {
    axios.get("http://localhost:4000/api/inspiration/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}
const getInsult = () => {
    axios.get("http://localhost:4000/api/insult/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
anxietyBtn.addEventListener('click', getAnxiety)
inspoBtn.addEventListener('click', getInspo)
insultBtn.addEventListener('click', getInsult)
// addComp.addEventListener('submit', submitComp)