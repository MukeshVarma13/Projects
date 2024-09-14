const date = new Date();

const monthName = document.querySelector("#months");
monthName.innerText = date.toLocaleString("en",{
    month:"long"
})

const yearName = document.querySelector("#years");
yearName.innerText = date.getFullYear();

const dateName = document.querySelector("#dates");
dateName.innerText = date.getDate();

const dayName = document.querySelector("#days");
dayName.innerText = date.toLocaleString("en",{
    weekday:"long"
});