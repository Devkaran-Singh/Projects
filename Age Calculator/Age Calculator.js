let months = [31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31];
const button = document.querySelector(".input-date button");
const year = document.querySelector("#hyphen1");
const month = document.querySelector("#hyphen2");
const days = document.querySelector("#hyphen3");

button.addEventListener("click" , () => {
    let date = new Date(document.querySelector(".input-date input").value);
    let curDate = new Date();

    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth() + 1;
    let dateDays = date.getDate();

    let curDateYear = curDate.getFullYear();
    let curDateMonth = curDate.getMonth() + 1;
    let curDateDays = curDate.getDate();

    if((curDateYear < dateYear) || (curDateMonth < dateMonth && curDateYear == dateYear) || (curDateDays < dateDays && curDateMonth == dateMonth && curDateYear == dateYear)){
        alert("YOU ARE NOT EVEN BORN");
        year.innerText = "-";
        month.innerText = "-";
        days.innerText = "-";
    }

    year.innerText = curDateYear - dateYear;
    if(curDateMonth >= dateMonth){
        month.innerText = curDateMonth - dateMonth;
    }
    else{
        year.innerText = curDateYear - dateYear - 1;
        month.innerText = 12 + curDateMonth - dateMonth;
    }

    if(curDateDays >= dateDays){
        days.innerText = curDateDays - dateDays;
    }
    else{
        month.innerText -= 1;
        let mon = month.innerText - 1;
        let day = months[mon];
        days.innerText = day + curDateDays - dateDays;
    }

    if(dateYear % 4 == 0 || dateYear % 100 == 0 && dateYear % 400 == 0){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
})