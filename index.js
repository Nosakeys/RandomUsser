    let url = "https://randomuser.me/api/";

    let picture = document.getElementById("img")
    let title = document.getElementById("title");
    let fullName = document.getElementById("fullname")
    let phoneNumber = document.getElementById("PN")
    let email = document.getElementById('email')
    let gender = document.getElementById("gender")
    let city = document.getElementById("city")
    let button = document.getElementById("button")



let getRandomUser = () => {
    fetch(url).then(response => {
        return response.json()
    }).then(data =>{
        console.log(data);
        picture.src = `${data.results[0].picture.large}`
        title.textContent +=  `${': ' + data.results[0].name.title}`
        fullName.textContent += `${ ": " + data.results[0].name.first}`
        fullName.textContent += `${ " " + data.results[0].name.last}`
        phoneNumber.textContent += `${ ": " + data.results[0].cell}`
        email.textContent +=  `${ ": " + data.results[0].email}`
      
    })
}

getRandomUser()

button.addEventListener('click', ()=> {
    window.location.reload();

})



