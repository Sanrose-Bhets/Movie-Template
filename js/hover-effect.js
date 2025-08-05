// Photo hover effect - set background images
document.addEventListener('DOMContentLoaded', function() {
    const figures = document.querySelectorAll('figure.effect-ming');
    
    figures.forEach(function(figure) {
        const img = figure.querySelector('img');
        const figcaption = figure.querySelector('figcaption');
        
        if (img && figcaption) {
            const imgSrc = img.getAttribute('src');
            figcaption.style.setProperty('--bg-image', `url(${imgSrc})`);
        }
        
        // Add play button only on index.html page
        if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
            // Check if play button doesn't already exist
            if (!figure.querySelector('.play-button')) {
                const playButton = document.createElement('div');
                playButton.className = 'play-button';
                playButton.setAttribute('aria-label', 'Play');
                figure.appendChild(playButton);
                
                // Add click event for play button
                playButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Find the link in the figcaption and navigate to it
                    const figcaption = figure.querySelector('figcaption');
                    const link = figcaption.querySelector('a');
                    
                    if (link && link.href) {
                        window.location.href = link.href;
                    }
                });
            }
        }
    });
}); 