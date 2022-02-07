const login_form = document.getElementById('login_form');
const success_message = document.getElementById('success_message');

const testHost = 'http://localhost:3031';
const workHost = 'https://ak-np.herokuapp.com';
const newServer = 'http://159.224.166.89';

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

login_form.addEventListener('submit', function(e) {
    e.preventDefault();

    const {email, password} = this.elements;

    axios.post(`${workHost}/auth/login`, {
        email: email.value,
         password: password.value       
    })
    .then(res => {
        console.log(res.data);

        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            window.location.href = '/novaposhta';
        }

        
        
    })
    .catch(err => console.log(err))
})

console.log(window.location);