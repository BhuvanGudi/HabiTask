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

    // Mark individual notification as read
    const notificationActions = document.querySelectorAll('.notification-action');
    notificationActions.forEach(action => {
        action.addEventListener('click', function() {
            const notification = this.closest('.notification-card');
            if (notification.classList.contains('unread')) {
                notification.classList.remove('unread');
                notification.style.backgroundColor = 'white';
                notification.style.borderLeft = 'none';

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

    // Notification click handler
    const notificationCards = document.querySelectorAll('.notification-card');
    notificationCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking the action button
            if (!e.target.classList.contains('notification-action')) {
                // In a real app, this would navigate to the relevant page
                const notificationTitle = this.querySelector('h4').textContent;
                console.log(`Opening notification: ${notificationTitle}`);

                // Mark as read if unread
                if (this.classList.contains('unread')) {
                    this.classList.remove('unread');
                    this.style.backgroundColor = 'white';
                    this.style.borderLeft = 'none';

                    // Update notification counters
                    const badges = document.querySelectorAll('.notification-badge, .notification-counter');
                    badges.forEach(badge => {
                        const currentCount = parseInt(badge.textContent);
                        if (currentCount > 0) {
                            badge.textContent = (currentCount - 1).toString();
                        }
                    });
                }
            }
        });
    });
});