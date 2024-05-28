window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

document.addEventListener("DOMContentLoaded", function() {
	const lazyImages = document.querySelectorAll('.lazy');

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
		if (entry.isIntersecting) {
			const img = entry.target;
			img.src = img.dataset.src;
			img.classList.remove('lazy');
			observer.unobserve(img);
		}
		});
	});

	lazyImages.forEach(img => {
		observer.observe(img);
	});
});
