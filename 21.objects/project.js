const capital = {
    India: "New Delhi",
    telangana: "hyderabad",
    maharastra: "mumbai",
    location: function () {
        return "i live in" + this.telangana
    }
}

capital.maharastra = "bombay"

document.write(capital.maharastra)