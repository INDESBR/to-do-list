firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        showTodoScreen()
        clearTasks()
        showUsertasks()
    } else {
        showLoginScreen()
    }
})

toggle.addEventListener('click', () => {
   toggleButton()
})

login_button.addEventListener('click', () => {
    loginOrsignUp()
})

sair.addEventListener('click', () => {
    firebase.auth().signOut()
})

