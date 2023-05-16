function submitMessage(event) {
    event.preventDefault();

    let email = document.getElementById('email').value
    let name = document.getElementById('name').value
    let message = document.getElementById('message').value

    localStorage.setItem('email', email)
    localStorage.setItem('name', name)
    localStorage.setItem('message', message)
    
}
