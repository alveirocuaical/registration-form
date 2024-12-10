document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('firstName').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const repeatPassword = document.getElementById('RepeatPassword').value;

    const divSuccess = document.getElementById('success');
    const divError = document.getElementById('error');
    
    if (firstName && lastName && email && password && repeatPassword) {
        
        divSuccess.innerText = 'Welcome!, ' + firstName + '!';
        divSuccess.hidden = false;
        divError.hidden = true; 
        document.getElementById('registrationForm').reset(); 
    } else {        
        divError.hidden = false;
    }
});