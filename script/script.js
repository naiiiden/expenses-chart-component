fetch("script/data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector(".price--mon").textContent = "$" + data[0].amount;
        document.querySelector(".price--tue").textContent = "$" + data[1].amount;
        document.querySelector(".price--wed").textContent = "$" + data[2].amount;
        document.querySelector(".price--thu").textContent = "$" + data[3].amount;
        document.querySelector(".price--fri").textContent = "$" + data[4].amount;
        document.querySelector(".price--sat").textContent = "$" + data[5].amount;
        document.querySelector(".price--sun").textContent = "$" + data[6].amount;
    });