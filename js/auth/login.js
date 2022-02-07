const login_form = document.getElementById('login_form');
const success_message = document.getElementById('success_message');

const testHost = 'http://localhost:3031';
const workHost = 'https://ak-np.herokuapp.com';
const newServer = 'http://159.224.166.89';


if (localStorage.getItem('token')) {
    axios.get(`${workHost}/auth/auth`, {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(res => {
        if (res.data.status === 'success') {
            window.location.href = '/novaposhta';
        }
    })
    .catch(err => {
        console.log(err);
    });
}


let authRequest = '';

const email_input = document.getElementById('email_input');
const password_block = document.querySelector('.password-block');
email_input.addEventListener('input', debounce((e) => {

axios.post(`${workHost}/auth/getUser`, {
    "email": e.target.value
})
.then(res => {
    if (res.data.code === 200) {
        password_block.innerHTML = '';
        password_block.insertAdjacentHTML('afterbegin', `<div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2"><i class="fas fa-unlock"></i></span>
        <input type="password" class="form-control" placeholder="password" name="password" aria-describedby="basic-addon2" required>
      </div><button class="btn btn-primary" type="submit">Войти</button>`);
      authRequest = 'login';
    }

    else if (res.data.code === 404) {
        password_block.innerHTML = '';
        password_block.insertAdjacentHTML('afterbegin', `<div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2"><i class="fas fa-unlock"></i></span>
        <input type="password" class="form-control" placeholder="password" name="password" aria-describedby="basic-addon2" required>
      </div><button class="btn btn-primary" type="submit">Регистрация</button>`);

      authRequest = 'register';
    }
})
.catch(err => console.log(err))

}, 600))

login_form.addEventListener('submit', function(e) {
    e.preventDefault();

    const {email, password} = this.elements;

    axios.post(`${workHost}/auth/${authRequest}`, {
        email: email.value,
         password: password.value       
    })
    .then(res => {
        if (res.data.user.token) {
            localStorage.setItem('token', res.data.user.token);
            window.location.href = '/novaposhta';
        }
    })
    .catch(err => console.log(err))
})
