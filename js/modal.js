$(document).ready(function() {
    // Function to open the modal
    function openModal(title, desc, imgSrc) {
        $('#modal-title').text(title);
        $('#modal-desc').text(desc);
        $('#modal-img').attr('src', imgSrc);
        $('#project-modal').fadeIn(); // Show the modal
    }

    // Close modal when the close button is clicked
    $('.close-btn').click(function() {
        $('#project-modal').fadeOut(); // Hide the modal
    });

    // Close modal when clicking outside the modal content (on the backdrop)
    $('#project-modal').click(function(event) {
        // Check if the click was outside the modal content
        if ($(event.target).is('#project-modal')) {
            $('#project-modal').fadeOut(); // Hide the modal if clicked outside
        }
    });

    // When a masonry item is clicked, open the modal with corresponding data
    $('.masonry-item').click(function() {
        var title = $(this).data('title');
        var desc = $(this).data('desc');
        var imgSrc = $(this).find('img').attr('src');

        openModal(title, desc, imgSrc);
    });

    // Filter masonry items based on category tab click
    $('.tab-btn').click(function() {
        // Remove active class from all tabs
        $('.tab-btn').removeClass('active');

        // Add active class to clicked tab
        $(this).addClass('active');

        // Get selected category
        var category = $(this).data('category');

        // Show or hide masonry items based on selected category
        if (category === "All") {
            $('.masonry-item').fadeIn(); // Show all items
        } else {
            $('.masonry-item').each(function() {
                var itemCategory = $(this).data('category');

                // Check if the item matches the selected category
                if (itemCategory === category) {
                    $(this).fadeIn(); // Show matching item
                } else {
                    $(this).fadeOut(); // Hide non-matching item
                }
            });
        }
    });

    // Set the first tab as active by default
    $('.tab-btn').first().addClass('active');

    // Initially show only the items that belong to the first active tab (UI Design by default)
    var firstCategory = $('.tab-btn.active').data('category');
    if (firstCategory !== "All") {
        $('.masonry-item').each(function() {
            var itemCategory = $(this).data('category');
            if (itemCategory === firstCategory) {
                $(this).fadeIn(); // Show items that belong to the first active tab
            } else {
                $(this).fadeOut(); // Hide items that don't belong to the first active tab
            }
        });
    } else {
        // If the first category is "All", show all items
        $('.masonry-item').fadeIn();
    }
});


  
  
