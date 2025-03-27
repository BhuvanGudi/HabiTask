document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Avatar Upload Functionality
    const changeAvatarBtn = document.querySelector('.change-avatar');
    const avatarInput = document.createElement('input');
    avatarInput.type = 'file';
    avatarInput.accept = 'image/*';
    avatarInput.style.display = 'none';

    if (changeAvatarBtn) {
        changeAvatarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            avatarInput.click();
        });

        avatarInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                // File size check (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert('File is too large. Maximum size is 5MB.');
                    return;
                }

                // File type check
                const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
                if (!validTypes.includes(file.type)) {
                    alert('Invalid file type. Please upload a JPEG, PNG, or GIF.');
                    return;
                }

                // Create file reader to preview image
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Update profile pictures
                    const profileImages = document.querySelectorAll('.profile-avatar img, .user-profile img');
                    profileImages.forEach(img => {
                        img.src = e.target.result;
                    });

                    // Here you would typically send the file to your backend
                    uploadAvatar(file);
                };
                reader.readAsDataURL(file);
            }
        });

        document.body.appendChild(avatarInput);
    }

    // Simulated avatar upload function (replace with actual API call)
    function uploadAvatar(file) {
        // Create FormData to send file
        const formData = new FormData();
        formData.append('avatar', file);

        // Simulated fetch call (replace with your actual endpoint)
        fetch('/api/upload-avatar', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Avatar uploaded successfully', data);
            // Handle successful upload
        })
        .catch(error => {
            console.error('Avatar upload failed', error);
            alert('Failed to upload avatar. Please try again.');
        });
    }

    // Edit profile button
    const editProfileBtn = document.querySelector('.profile-actions .btn-outline');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Switch to settings tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            document.querySelector('.tab-btn[data-tab="settings"]').classList.add('active');
            document.getElementById('settings-tab').classList.add('active');
        });
    }

    // Form validation and submission
    const profileForm = document.querySelector('.settings-form form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate form inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const rateInput = document.getElementById('rate');

            // Basic validation
            const validationErrors = [];

            if (nameInput.value.trim() === '') {
                validationErrors.push('Name cannot be empty');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                validationErrors.push('Invalid email format');
            }

            const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                validationErrors.push('Phone number must be in (555) 123-4567 format');
            }

            if (parseFloat(rateInput.value) < 0) {
                validationErrors.push('Hourly rate cannot be negative');
            }

            if (validationErrors.length > 0) {
                alert('Please correct the following errors:\n' + validationErrors.join('\n'));
                return;
            }

            // Prepare form data
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value,
                location: document.getElementById('location').value,
                bio: document.getElementById('bio').value,
                rate: rateInput.value
            };

            // Simulated API call (replace with your actual endpoint)
            fetch('/api/update-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                // Update UI with new data
                document.querySelector('.profile-info h1').textContent = formData.name;
                alert('Profile updated successfully!');
            })
            .catch(error => {
                console.error('Profile update failed', error);
                alert('Failed to update profile. Please try again.');
            });
        });
    }

    // Change password modal
    const changePasswordBtn = document.querySelector('.security-item .btn-outline');
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', function(e) {
            e.preventDefault();

            // Create password change modal
            const modalHtml = `
                <div class="modal" id="password-change-modal">
                    <div class="modal-content">
                        <h3>Change Password</h3>
                        <form id="change-password-form">
                            <div class="form-group">
                                <label for="current-password">Current Password</label>
                                <input type="password" id="current-password" required>
                            </div>
                            <div class="form-group">
                                <label for="new-password">New Password</label>
                                <input type="password" id="new-password" required>
                            </div>
                            <div class="form-group">
                                <label for="confirm-password">Confirm New Password</label>
                                <input type="password" id="confirm-password" required>
                            </div>
                            <div class="form-actions">
                                <button type="button" class="btn btn-outline" id="cancel-password-change">Cancel</button>
                                <button type="submit" class="btn btn-primary">Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            `;

            // Append modal to body
            const modalContainer = document.createElement('div');
            modalContainer.innerHTML = modalHtml;
            document.body.appendChild(modalContainer);

            const modal = document.getElementById('password-change-modal');
            const passwordForm = document.getElementById('change-password-form');
            const cancelBtn = document.getElementById('cancel-password-change');

            // Close modal
            cancelBtn.addEventListener('click', () => {
                document.body.removeChild(modal.parentElement);
            });

            // Password change form submission
            passwordForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const currentPassword = document.getElementById('current-password').value;
                const newPassword = document.getElementById('new-password').value;
                const confirmPassword = document.getElementById('confirm-password').value;

                // Validation
                if (newPassword !== confirmPassword) {
                    alert('New passwords do not match');
                    return;
                }

                if (newPassword.length < 8) {
                    alert('Password must be at least 8 characters long');
                    return;
                }

                // Simulated password change API call
                fetch('/api/change-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        currentPassword,
                        newPassword
                    })
                })
                .then(response => response.json())
                .then(data => {
                    alert('Password changed successfully!');
                    document.body.removeChild(modal.parentElement);
                })
                .catch(error => {
                    console.error('Password change failed', error);
                    alert('Failed to change password. Please try again.');
                });
            });
        });
    }

    // Two-Factor Authentication setup
    const enable2FABtn = document.querySelectorAll('.security-item .btn-outline')[1];
    if (enable2FABtn) {
        enable2FABtn.addEventListener('click', function(e) {
            e.preventDefault();

            // Create 2FA setup modal
            const modalHtml = `
                <div class="modal" id="2fa-setup-modal">
                    <div class="modal-content">
                        <h3>Two-Factor Authentication</h3>
                        <p>Enhance your account security by enabling two-factor authentication.</p>
                        <div class="2fa-options">
                            <button class="btn btn-primary" id="setup-authenticator">Setup Authenticator App</button>
                            <button class="btn btn-outline" id="setup-sms">Setup SMS Authentication</button>
                        </div>
                        <div class="form-actions">
                            <button type="button" class="btn btn-outline" id="cancel-2fa">Cancel</button>
                        </div>
                    </div>
                </div>
            `;

            // Append modal to body
            const modalContainer = document.createElement('div');
            modalContainer.innerHTML = modalHtml;
            document.body.appendChild(modalContainer);

            const modal = document.getElementById('2fa-setup-modal');
            const cancelBtn = document.getElementById('cancel-2fa');
            const authenticatorBtn = document.getElementById('setup-authenticator');
            const smsBtn = document.getElementById('setup-sms');

            // Close modal
            cancelBtn.addEventListener('click', () => {
                document.body.removeChild(modal.parentElement);
            });

            // Authenticator app setup
            authenticatorBtn.addEventListener('click', () => {
                // Simulated authenticator setup process
                fetch('/api/setup-2fa', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ method: 'authenticator' })
                })
                .then(response => response.json())
                .then(data => {
                    alert('Authenticator setup initiated. Please check your email for instructions.');
                    document.body.removeChild(modal.parentElement);
                })
                .catch(error => {
                    console.error('2FA setup failed', error);
                    alert('Failed to setup 2FA. Please try again.');
                });
            });

            // SMS authentication setup
            smsBtn.addEventListener('click', () => {
                // Simulated SMS setup process
                fetch('/api/setup-2fa', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ method: 'sms' })
                })
                .then(response => response.json())
                .then(data => {
                    alert('SMS 2FA setup initiated. Please verify your phone number.');
                    document.body.removeChild(modal.parentElement);
                })
                .catch(error => {
                    console.error('2FA setup failed', error);
                    alert('Failed to setup 2FA. Please try again.');
                });
            });
        });
    }

    // Portfolio image hover effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.portfolio-overlay').style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseleave', function() {
            this.querySelector('.portfolio-overlay').style.transform = 'translateY(100%)';
        });
    });

    // Mobile sidebar toggle
    const sidebarToggle = document.createElement('button');
    sidebarToggle.className = 'sidebar-toggle';
    sidebarToggle.innerHTML = '☰';
    sidebarToggle.style.position = 'fixed';
    sidebarToggle.style.bottom = '20px';
    sidebarToggle.style.right = '20px';
    sidebarToggle.style.zIndex = '1000';
    sidebarToggle.style.backgroundColor = 'var(--primary-color)';
    sidebarToggle.style.color = 'white';
    sidebarToggle.style.border = 'none';
    sidebarToggle.style.borderRadius = '50%';
    sidebarToggle.style.width = '50px';
    sidebarToggle.style.height = '50px';
    sidebarToggle.style.fontSize = '1.5rem';
    sidebarToggle.style.cursor = 'pointer';
    sidebarToggle.style.boxShadow = 'var(--shadow-md)';
    sidebarToggle.style.display = 'none';

    const sidebar = document.querySelector('.sidebar');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('mobile-open');
    });

    document.body.appendChild(sidebarToggle);

    function checkSidebarVisibility() {
        if (window.innerWidth <= 768) {
            sidebarToggle.style.display = 'flex';
            sidebar.classList.remove('mobile-open');
        } else {
            sidebarToggle.style.display = 'none';
            sidebar.classList.add('mobile-open');
        }
    }

    window.addEventListener('resize', checkSidebarVisibility);
    checkSidebarVisibility();

    // Theme toggle
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '80px';
    themeToggle.style.right = '20px';
    themeToggle.style.zIndex = '1000';
    themeToggle.style.backgroundColor = 'var(--primary-color)';
    themeToggle.style.color = 'white';
    themeToggle.style.border = 'none';
    themeToggle.style.borderRadius = '50%';
    themeToggle.style.width = '50px';
    themeToggle.style.height = '50px';
    themeToggle.style.fontSize = '1.5rem';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.boxShadow = 'var(--shadow-md)';

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });

    document.body.appendChild(themeToggle);

    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
});