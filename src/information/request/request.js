document.addEventListener('DOMContentLoaded', function() {
    // File upload functionality
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const uploadPreview = document.getElementById('uploadPreview');
    const browseFilesBtn = document.getElementById('browseFiles');

    // Handle drag and drop
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function() {
        this.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });

    // Handle file selection via button
    browseFilesBtn.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    createPreviewItem(e.target.result, file.name);
                };
                reader.readAsDataURL(file);
            }
        }
    }

    function createPreviewItem(src, filename) {
        const previewItem = document.createElement('div');
        previewItem.className = 'upload-item';
        previewItem.innerHTML = `
            <img src="${src}" alt="${filename}">
            <button class="remove-btn">
                <img src="../../../assets/icons/status/delete.svg" alt="Remove">
            </button>
        `;
        uploadPreview.appendChild(previewItem);

        // Add remove functionality
        previewItem.querySelector('.remove-btn').addEventListener('click', function() {
            previewItem.remove();
        });
    }

    // Form submission
    const jobRequestForm = document.getElementById('jobRequestForm');
    jobRequestForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        if (!this.checkValidity()) {
            alert('Please fill in all required fields');
            return;
        }

        // In a real app, this would submit the form data
        alert('Job request submitted successfully!');
        this.reset();
        uploadPreview.innerHTML = '';
    });

    // Budget type toggle
    const budgetType = document.getElementById('budgetType');
    const budgetAmount = document.getElementById('budgetAmount');

    budgetType.addEventListener('change', function() {
        if (this.value === 'hourly') {
            budgetAmount.placeholder = 'Hourly rate';
        } else if (this.value === 'fixed') {
            budgetAmount.placeholder = 'Total amount';
        } else {
            budgetAmount.placeholder = 'Estimated amount';
        }
    });
});