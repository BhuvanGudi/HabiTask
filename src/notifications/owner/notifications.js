document.addEventListener('DOMContentLoaded', function() {
    // Mark all as read button
    const markAllReadBtn = document.querySelector('.mark-all-read');
    if (markAllReadBtn) {
        markAllReadBtn.addEventListener('click', function() {
            const unreadNotifications = document.querySelectorAll('.notification-card.unread');
            unreadNotifications.forEach(notification => {
                notification.classList.remove('unread');
                notification.style.backgroundColor = 'white';
                notification.style.borderLeft = 'none';
            });

            // Update notification counters
            document.querySelectorAll('.notification-badge, .notification-counter').forEach(badge => {
                badge.textContent = '0';
            });

            // Show confirmation
            alert('All notifications marked as read');
        });
    }

    // Filter dropdown functionality
    const filterBtn = document.querySelector('.filter-btn');
    const filterOptions = document.querySelector('.filter-options');

    filterBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        filterOptions.style.display = filterOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
        filterOptions.style.display = 'none';
    });

    filterOptions.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Filter option selection
    const filterOptionLinks = document.querySelectorAll('.filter-option');
    filterOptionLinks.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();

            // Update active filter option
            filterOptionLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Update filter button text
            filterBtn.querySelector('span').textContent = this.textContent;

            // Filter notifications
            const filter = this.textContent.toLowerCase();
            const notificationGroups = document.querySelectorAll('.notification-group');

            if (filter.includes('all')) {
                notificationGroups.forEach(group => group.style.display = 'flex');
                document.querySelectorAll('.notification-card').forEach(card => card.style.display = 'flex');
            } else {
                notificationGroups.forEach(group => {
                    const hasVisibleCards = Array.from(group.querySelectorAll('.notification-card')).some(card => {
                        const shouldShow = card.classList.contains(filter.replace(' ', '-'));
                        card.style.display = shouldShow ? 'flex' : 'none';
                        return shouldShow;
                    });
                    group.style.display = hasVisibleCards ? 'flex' : 'none';
                });
            }

            // Show empty state if no notifications match
            const visibleGroups = document.querySelectorAll('.notification-group[style="display: flex"]');
            const emptyState = document.querySelector('.empty-state');

            if (visibleGroups.length === 0) {
                if (!emptyState) {
                    createEmptyState(filter);
                }
            } else {
                if (emptyState) {
                    emptyState.remove();
                }
            }

            // Close dropdown
            filterOptions.style.display = 'none';
        });
    });

    function createEmptyState(filter) {
        const notificationsList = document.querySelector('.notifications-list');
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <img src="../../../assets/icons/feature/chat.svg" alt="No notifications">
            <h3>No ${filter} Notifications</h3>
            <p>You don't have any ${filter.toLowerCase()} notifications at this time.</p>
        `;
        notificationsList.appendChild(emptyState);
    }

    // Notification action buttons
    const viewButtons = document.querySelectorAll('.notification-actions .btn-outline');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real app, this would navigate to the relevant page
            const notificationTitle = this.closest('.notification-card').querySelector('h4').textContent;
            alert(`Viewing: ${notificationTitle}`);
        });
    });

    const actionButtons = document.querySelectorAll('.notification-actions .btn-primary');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real app, this would perform the specific action
            const action = this.textContent;
            const notificationTitle = this.closest('.notification-card').querySelector('h4').textContent;
            alert(`${action} for: ${notificationTitle}`);

            // Mark as read if unread
            const notificationCard = this.closest('.notification-card');
            if (notificationCard.classList.contains('unread')) {
                notificationCard.classList.remove('unread');
                notificationCard.style.backgroundColor = 'white';
                notificationCard.style.borderLeft = 'none';

                // Update notification counters
                const badges = document.querySelectorAll('.notification-badge, .notification-counter');
                badges.forEach(badge => {
                    const currentCount = parseInt(badge.textContent);
                    if (currentCount > 0) {
                        badge.textContent = (currentCount - 1).toString();
                    }
                });
            }
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