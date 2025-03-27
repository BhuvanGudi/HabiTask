document.addEventListener('DOMContentLoaded', function() {
    // Initialize dropdown toggles
    const filterBtn = document.querySelector('.filter-btn');
    const sortBtn = document.querySelector('.sort-btn');
    const filterOptions = document.querySelector('.filter-options');
    const sortOptions = document.querySelector('.sort-options');

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!filterBtn.contains(e.target) {
            filterOptions.style.display = 'none';
        }
        if (!sortBtn.contains(e.target)) {
            sortOptions.style.display = 'none';
        }
    });

    // Toggle filter dropdown
    if (filterBtn) {
        filterBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            filterOptions.style.display = filterOptions.style.display === 'block' ? 'none' : 'block';
            sortOptions.style.display = 'none';
        });
    }

    // Toggle sort dropdown
    if (sortBtn) {
        sortBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            sortOptions.style.display = sortOptions.style.display === 'block' ? 'none' : 'block';
            filterOptions.style.display = 'none';
        });
    }

    // Sort option selection
    const sortOptionsList = document.querySelectorAll('.sort-option');
    sortOptionsList.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const sortText = this.textContent;
            document.querySelector('.sort-btn').innerHTML = `
                <span class="sort-icon">🔽</span>
                Sort By: ${sortText}
            `;
            sortOptions.style.display = 'none';

            // Remove active class from all options
            sortOptionsList.forEach(opt => opt.classList.remove('active'));
            // Add active class to selected option
            this.classList.add('active');

            // Here you would typically sort the listings
            // For demo, we'll just log the sort type
            console.log(`Sorting by: ${sortText}`);
        });
    });

    // Apply filters button
    const applyFiltersBtn = document.querySelector('.apply-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            filterOptions.style.display = 'none';
            // Here you would typically filter the listings
            // For demo, we'll just log that filters were applied
            console.log('Filters applied');
        });
    }

    // Pagination buttons
    const paginationButtons = document.querySelectorAll('.pagination .btn');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'Previous' || this.textContent === 'Next') {
                // Handle previous/next pagination
                console.log(`Navigating to ${this.textContent} page`);
            } else {
                // Handle numbered pagination
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                console.log(`Navigating to page ${this.textContent}`);
            }
        });
    });

    // Apply button click handler
    const applyButtons = document.querySelectorAll('.listing-actions .btn-primary');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobTitle = this.closest('.listing-card').querySelector('h3').textContent;
            alert(`Applying for: ${jobTitle}`);
            // In a real app, this would submit an application
        });
    });
});