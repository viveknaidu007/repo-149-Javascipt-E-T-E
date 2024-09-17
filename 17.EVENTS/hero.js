const mainForm = document.getElementById("myForm")
const userName = document.getElementById("nameInput")
const inputName = document.getElementById("name")


mainForm.addEventListener("input", function(e) {
    e.preventDefault()

    const myUserName = userName.value
    inputName.textContent = myUserName
})



const mynewcolors = document.getElementById("myColors")
const mynewbox = document.getElementById("box")

mynewcolors.addEventListener("change", function() {
    mynewbox.style.background = mynewcolors.value
})