const changer = setTimeout(function () {
    const myelement = document.getElementById("title")
    myelement.style.color = "red"
    myelement.style.fontSize = "5rem"
}, 5000)


function stopAction() {
    clearTimeout(changer)
}