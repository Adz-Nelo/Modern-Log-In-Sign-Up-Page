const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Toggle between sign in and sign up
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Password toggle functionality
const toggleSignupPassword = document.getElementById('toggleSignupPassword');
const signupPassword = document.getElementById('signupPassword');
const toggleSigninPassword = document.getElementById('toggleSigninPassword');
const signinPassword = document.getElementById('signinPassword');

toggleSignupPassword.addEventListener('click', function() {
    const type = signupPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    signupPassword.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

toggleSigninPassword.addEventListener('click', function() {
    const type = signinPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    signinPassword.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Form validation
const signupForm = document.getElementById('signupForm');
const signinForm = document.getElementById('signinForm');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName');
    const email = document.getElementById('signupEmail');
    const password = document.getElementById('signupPassword');
    
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('show'));
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));

    // Validate name
    if (name.value.trim() === '') {
        document.getElementById('nameError').classList.add('show');
        name.classList.add('error');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').classList.add('show');
        email.classList.add('error');
        isValid = false;
    }

    // Validate password
    if (password.value.length < 6) {
        document.getElementById('passwordError').classList.add('show');
        password.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        // Show success message
        document.getElementById('signupSuccess').classList.add('show');
        setTimeout(() => {
            document.getElementById('signupSuccess').classList.remove('show');
            signupForm.reset();
        }, 3000);
    }
});

signinForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('signinEmail');
    const password = document.getElementById('signinPassword');
    
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('show'));
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));

    // Validate email
    if (email.value.trim() === '') {
        document.getElementById('signinEmailError').classList.add('show');
        email.classList.add('error');
        isValid = false;
    }

    // Validate password
    if (password.value.trim() === '') {
        document.getElementById('signinPasswordError').classList.add('show');
        password.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        // Show success message
        document.getElementById('signinSuccess').classList.add('show');
        setTimeout(() => {
            document.getElementById('signinSuccess').classList.remove('show');
            signinForm.reset();
        }, 3000);
    }
});

// Social media click handlers
document.querySelectorAll('.social-icons .icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.querySelector('i').classList[1].split('-')[2];
        console.log(`${platform} authentication would be handled here`);
    });
});
