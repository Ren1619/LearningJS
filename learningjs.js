function imageClicked() {
    const container = document.getElementById('container');
    const imgContainer = document.getElementById('image-container');
    const message = document.getElementById('message-container');
    const body = document.body;
    
    // FIRST: Get initial positions and sizes
    const containerFirst = container.getBoundingClientRect();
    const imgFirst = imgContainer.getBoundingClientRect();
    const babuFirst = document.getElementById('babu').getBoundingClientRect();
    
    // Change layout immediately
    body.style.display = 'grid';
    body.style.gridTemplateColumns = '1fr 1fr';  
    body.style.gap = '40px';
    body.style.padding = '40px';
    body.style.alignItems = 'center';
    
    imgContainer.style.position = 'static';
    imgContainer.style.margin = '0';
    imgContainer.style.gridColumn = '1';
    imgContainer.style.display = 'flex';
    imgContainer.style.alignItems = 'center';
    imgContainer.style.justifyContent = 'center';
    imgContainer.style.zIndex = '2';
    
    container.style.position = 'static';
    container.style.gridColumn = '2';
    container.style.width = '100%';
    container.style.height = '80vh';
    container.style.zIndex = '1';

    
    // LAST: Get final positions and sizes
    const containerLast = container.getBoundingClientRect();
    const imgLast = imgContainer.getBoundingClientRect();
    const babuLast = document.getElementById('babu').getBoundingClientRect();
    
    // INVERT: Calculate differences in position and size
    const containerDeltaX = containerFirst.left - containerLast.left;
    const containerDeltaY = containerFirst.top - containerLast.top;
    const containerScaleX = containerFirst.width / containerLast.width;
    const containerScaleY = containerFirst.height / containerLast.height;
    
    const imgDeltaX = imgFirst.left - imgLast.left;
    const imgDeltaY = imgFirst.top - imgLast.top;
    
    const babuScaleX = babuFirst.width / babuLast.width;
    const babuScaleY = babuFirst.height / babuLast.height;
    
    // PLAY: Animate container with position AND size
    container.animate([
        { 
            transform: `translate(${containerDeltaX}px, ${containerDeltaY}px) scale(${containerScaleX}, ${containerScaleY})`,
            transformOrigin: 'top left'
        },
        { 
            transform: 'translate(0, 0) scale(1, 1)',
            transformOrigin: 'top left'
        }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
    });
    
    // PLAY: Animate image container position
    imgContainer.animate([
        { transform: `translate(${imgDeltaX}px, ${imgDeltaY}px)` },
        { transform: 'translate(0, 0)' }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
    });
    
    // PLAY: Animate image size
    const babu = document.getElementById('babu');
    babu.animate([
        { transform: `scale(${babuScaleX}, ${babuScaleY})` },
        { transform: 'scale(1, 1)' }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
    });
    
    // Animate message: fade in and move from bottom to top
    message.style.visibility = 'visible';
    message.animate([
        { opacity: 0, marginTop: '150px' },
        { opacity: 1, marginTop: '20px' }
    ], {
        duration: 800,
        delay: 400,
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        fill: 'forwards'
    });
    
    // Set final state for message
    setTimeout(() => {
        message.style.opacity = '1';
        message.style.marginTop = '20px';
    }, 1200);
}