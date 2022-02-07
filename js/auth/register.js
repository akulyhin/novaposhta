const register_form = document.getElementById('register_form');
const success_message = document.getElementById('success_message');


register_form.addEventListener('submit', function(e) {
    e.preventDefault();

    const {email, password} = this.elements;

    axios.post('http://localhost:3031/auth/register', {
        email: email.value,
         password: password.value       
    })
    .then(res => {
        if (res.data.user) {
            register_form.remove();
            success_message.innerHTML = 'Пользователь успешно создан <br> <a href="/login.html">Войти</a>';
        }
    })
    .catch(err => console.log(err))
})