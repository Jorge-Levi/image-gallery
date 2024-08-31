document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('#categories button');
    const images = document.querySelectorAll('.image-item');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.tabIndex = 0;
    document.body.appendChild(lightbox);

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            images.forEach(image => {
                if (category === 'all' || image.dataset.category === category) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });

    images.forEach(image => {
        image.querySelector('img').addEventListener('click', function() {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = this.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
            lightbox.focus();
        });
    });

    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });
});
