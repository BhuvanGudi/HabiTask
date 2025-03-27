document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    const jobCards = document.querySelectorAll('.job-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Filter jobs
            const filter = this.dataset.filter;
            jobCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    if (card.classList.contains(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });

            // Show empty state if no jobs match
            const visibleJobs = document.querySelectorAll('.job-card:not(.hidden)');
            const emptyState = document.querySelector('.empty-state');

            if (visibleJobs.length === 0) {
                if (!emptyState) {
                    createEmptyState();
                }
            } else {
                if (emptyState) {
                    emptyState.remove();
                }
            }
        });
    });

    function createEmptyState() {
        const jobsList = document.querySelector('.jobs-list');
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <img src="../../../assets/icons/feature/wallet.svg" alt="No jobs">
            <h3>No Jobs Found</h3>
            <p>You don't have any ${document.querySelector('.filter-tab.active').textContent.toLowerCase()} jobs at the moment.</p>
            <a href="../../../listings/findJobs/index.html" class="btn btn-primary">Browse Available Jobs</a>
        `;
        jobsList.appendChild(emptyState);
    }

    // Sort dropdown functionality
    const sortBtn = document.querySelector('.sort-btn');
    const sortOptions = document.querySelector('.sort-options');

    sortBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        sortOptions.style.display = sortOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
        sortOptions.style.display = 'none';
    });

    sortOptions.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Sort option selection
    const sortOptionLinks = document.querySelectorAll('.sort-option');
    sortOptionLinks.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();

            // Update active sort option
            sortOptionLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Update sort button text
            sortBtn.querySelector('span').textContent = `Sort By: ${this.textContent}`;

            // In a real app, this would sort the jobs
            console.log(`Sorting by: ${this.textContent}`);

            // Close dropdown
            sortOptions.style.display = 'none';
        });
    });

    // Job action buttons
    const updateStatusBtns = document.querySelectorAll('.job-card.active .btn-primary');
    updateStatusBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, this would open a status update modal
            alert('In a real app, this would open a status update modal');
        });
    });

    const cancelApplicationBtns = document.querySelectorAll('.job-card.pending .btn-outline:last-child');
    cancelApplicationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to cancel this job application?')) {
                // In a real app, this would cancel the application
                this.closest('.job-card').classList.add('hidden');
                alert('Application cancelled successfully');
            }
        });
    });

    const requestReviewBtns = document.querySelectorAll('.job-card.completed .btn-outline:last-child');
    requestReviewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, this would request a review
            alert('Review request sent to the property owner');
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