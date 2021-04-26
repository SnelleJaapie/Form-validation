const username_Input = document.getElementById("usernameInput")
const password_Input = document.getElementById("passwordInput")

const username_Warning = document.getElementById("usernameWarning")
const password_Warning = document.getElementById("passwordWarning")

username_Input.addEventListener("keyup", checkUsername)
password_Input.addEventListener("keyup", checkPassWord)

function checkUsername(e) {
    if (e.target.value.includes("@")) {
        username_Warning.textContent = "Gebruikersnaam mag geen @ bevatten GVD!!!"
    } else {
        username_Warning = ""
    }
}

