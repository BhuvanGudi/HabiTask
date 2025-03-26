document.addEventListener('DOMContentLoaded', function() {
    // User type toggle functionality
    const toggleButtons = document.querySelectorAll('.btn-toggle');
    const ownerFields = document.getElementById('ownerFields');
    const workerFields = document.getElementById('workerFields');

    if (toggleButtons.length) {
        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const userType = this.dataset.userType;
                if (userType === 'owner') {
                    ownerFields.classList.remove('hidden');
                    workerFields.classList.add('hidden');
                } else {
                    ownerFields.classList.add('hidden');
                    workerFields.classList.remove('hidden');
                }
            });
        });
    }

    // Password strength indicator
    const passwordInput = document.getElementById('signupPassword');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const strengthBars = document.querySelectorAll('.strength-bar');
            const strengthText = document.querySelector('.strength-text');
            const password = this.value;
            let strength = 0;

            // Reset
            strengthBars.forEach(bar => bar.style.backgroundColor = 'var(--gray-color)');

            // Check password strength
            if (password.length >= 8) strength++;
            if (password.match(/[A-Z]/)) strength++;
            if (password.match(/[0-9]/)) strength++;
            if (password.match(/[^A-Za-z0-9]/)) strength++;

            // Update UI
            for (let i = 0; i < strength; i++) {
                if (i === 0) {
                    strengthBars[i].style.backgroundColor = 'var(--danger-color)';
                } else if (i === 1 || i === 2) {
                    strengthBars[i].style.backgroundColor = 'var(--warning-color)';
                } else {
                    strengthBars[i].style.backgroundColor = 'var(--success-color)';
                }
            }

            // Update text
            const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
            strengthText.textContent = strengthLabels[strength - 1] || 'Password strength';
        });
    }

    // Form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Email validation
            const email = document.getElementById('loginEmail');
            const emailError = document.getElementById('emailError');
            if (!email.value || !email.value.includes('@')) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Password validation
            const password = document.getElementById('loginPassword');
            const passwordError = document.getElementById('passwordError');
            if (!password.value || password.value.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            if (isValid) {
                // Simulate successful login
                alert('Login successful! Redirecting to dashboard...');
                // In a real app, you would redirect to the appropriate dashboard
                const userType = new URLSearchParams(window.location.search).get('user') || 'owner';
                window.location.href = `../dashboard/${userType}/index.html`;
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Name validation
            const name = document.getElementById('signupName');
            const nameError = document.getElementById('nameError');
            if (!name.value || name.value.length < 3) {
                nameError.textContent = 'Please enter your full name';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            // Email validation
            const email = document.getElementById('signupEmail');
            const emailError = document.getElementById('emailError');
            if (!email.value || !email.value.includes('@')) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Password validation
            const password = document.getElementById('signupPassword');
            const passwordError = document.getElementById('passwordError');
            if (!password.value || password.value.length < 8) {
                passwordError.textContent = 'Password must be at least 8 characters';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            // Confirm password
            const confirmPassword = document.getElementById('signupConfirmPassword');
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            if (password.value !== confirmPassword.value) {
                confirmPasswordError.textContent = 'Passwords do not match';
                isValid = false;
            } else {
                confirmPasswordError.textContent = '';
            }

            // Terms agreement
            const termsAgreement = document.getElementById('termsAgreement');
            if (!termsAgreement.checked) {
                alert('You must agree to the terms and conditions');
                isValid = false;
            }

            if (isValid) {
                // Simulate successful signup
                alert('Account created successfully! Redirecting to dashboard...');
                const userType = document.querySelector('.btn-toggle.active').dataset.userType;
                window.location.href = `../dashboard/${userType}/index.html`;
            }
        });
    }

    // Check URL parameters for user type
    const urlParams = new URLSearchParams(window.location.search);
    const userType = urlParams.get('user');

    if (userType && toggleButtons.length) {
        const activeButton = document.querySelector(`.btn-toggle[data-user-type="${userType}"]`);
        if (activeButton) {
            activeButton.click();
        }
    }
});