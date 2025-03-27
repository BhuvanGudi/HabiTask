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

    // Change avatar button
    const changeAvatarBtn = document.querySelector('.change-avatar');
    if (changeAvatarBtn) {
        changeAvatarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would open a file upload dialog
            alert('In a real app, this would open a file upload dialog to change your profile picture');
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
    });

    // Change password button
    const changePasswordBtn = document.querySelector('.security-item .btn-outline');
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would open a password change modal
            alert('In a real app, this would open a password change modal');
        });
    });

    // Enable 2FA button
    const enable2FABtn = document.querySelectorAll('.security-item .btn-outline')[1];
    if (enable2FABtn) {
        enable2FABtn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would open a 2FA setup flow
            alert('In a real app, this would open a two-factor authentication setup flow');
        });
    });

    // Form submission
    const profileForm = document.querySelector('.settings-form form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would save the profile changes
            alert('Profile changes saved successfully!');
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

    // Mobile sidebar toggle (reuse from dashboard.js if needed)
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

    // Theme toggle (reuse from dashboard.js if needed)
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