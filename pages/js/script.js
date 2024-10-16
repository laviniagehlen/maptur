const scrollContainer = document.getElementById('scrollContainer');

    function scrollImages() {
        scrollContainer.scrollLeft += 1;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
        }
    }

    let scrollInterval = setInterval(scrollImages, 20);

    scrollContainer.addEventListener('mouseover', () => {
        clearInterval(scrollInterval);
    });

    scrollContainer.addEventListener('mouseout', () => {
        scrollInterval = setInterval(scrollImages, 20);
    });
