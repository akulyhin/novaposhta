const login_form = document.getElementById('login_form');
const success_message = document.getElementById('success_message');


login_form.addEventListener('submit', function(e) {
    e.preventDefault();

    const {email, password} = this.elements;

    axios.post('http://localhost:3031/auth/login', {
        email: email.value,
         password: password.value       
    })
    .then(res => {
        console.log(res.data);

        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            window.location.href = '/';
        }
        
    })
    .catch(err => console.log(err))
})