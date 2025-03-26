document.addEventListener('DOMContentLoaded', function() {
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

    // Notification dropdown
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        const notificationDropdown = document.createElement('div');
        notificationDropdown.className = 'notification-dropdown';
        notificationDropdown.style.display = 'none';
        notificationDropdown.style.position = 'absolute';
        notificationDropdown.style.right = '0';
        notificationDropdown.style.top = '100%';
        notificationDropdown.style.backgroundColor = 'white';
        notificationDropdown.style.borderRadius = 'var(--radius)';
        notificationDropdown.style.boxShadow = 'var(--shadow-md)';
        notificationDropdown.style.width = '300px';
        notificationDropdown.style.padding = '1rem';
        notificationDropdown.style.zIndex = '100';

        notificationBtn.parentNode.appendChild(notificationDropdown);

        notificationBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            notificationDropdown.style.display = notificationDropdown.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', function() {
            notificationDropdown.style.display = 'none';
        });
    }

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