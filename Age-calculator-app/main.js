let btn = document.querySelector('.btn');

function age() {

    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let currentDay = new Date().getUTCDate();
    let currentMonth = new Date().getUTCMonth() + 1;
    let ageYear = document.querySelector('.year');
    let ageMonth = document.querySelector('.month');
    let ageDays = document.querySelector('.day');
    let currentYear = new Date().getUTCFullYear();
    if (year >= 1 && year <= currentYear && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
        ageYear.innerHTML = (currentYear - year);
        ageMonth.innerHTML = (currentMonth - month);
        ageDays.innerHTML = (currentDay - day);

        if (ageDays.innerHTML < 1) {
            ageDays.innerHTML = (currentDay - day) + 30;
            ageMonth.innerHTML = (currentMonth - month) - 1;
        }

        if (ageMonth.innerHTML < 1) {
            ageYear.innerHTML = (currentYear - year) - 1;
            ageMonth.innerHTML = (currentMonth - month) + 11;
        }

        document.querySelector('label[for="year"]').style.color = 'gray';
        document.querySelector('#year').style.borderColor = 'gray';
        document.querySelector(".yy").style.display = "none";
        document.querySelector('label[for="month"]').style.color = 'gray';
        document.querySelector('#month').style.borderColor = 'gray';
        document.querySelector(".mm").style.display = "none";
        document.querySelector('label[for="day"]').style.color = 'gray';
        document.querySelector('#day').style.borderColor = 'gray';
        document.querySelector(".dd").style.display = "none";



    }
    else {
        if (year == "") {
            document.querySelector(".yy").innerText = "this field is required";
        } else {
            if (year < 1 || year > currentYear) {
                document.querySelector('label[for="year"]').style.color = "red";
                document.querySelector('#year').style.borderColor = 'red';
                document.querySelector(".yy").innerText = "Must be in the past";

            } else {
                document.querySelector('label[for="year"]').style.color = 'gray';
                document.querySelector('#year').style.borderColor = 'gray';
                document.querySelector(".yy").style.display = "none";
            }
        }


        if (month == "") {
            document.querySelector(".mm").innerText = "this field is required";
        } else {
            if (month < 1 || month > 12) {
                document.querySelector('label[for="month"]').style.color = "red";
                document.querySelector('#month').style.borderColor = 'red';
                document.querySelector(".mm").innerText = "Must be a valid month";
            }
            else {
                document.querySelector('label[for="month"]').style.color = 'gray';
                document.querySelector('#month').style.borderColor = 'gray';
                document.querySelector(".mm").style.display = "none";
            }
        }


        if (day == "") {
            document.querySelector(".dd").innerText = "this field is required";
        } else {
            if (day < 1 || day > 31) {
                document.querySelector('label[for="day"]').style.color = "red";
                document.querySelector('#day').style.borderColor = 'red';
                document.querySelector(".dd").innerText = "Must be a valid day";
            }
            else {
                document.querySelector('label[for="day"]').style.color = 'gray';
                document.querySelector('#day').style.borderColor = 'gray';
                document.querySelector(".dd").style.display = "none";
            }
        }
    }
}

btn.addEventListener('click', age);