window.addEventListener('resize', () => {
    const width = document.querySelector('.square').offsetWidth;
    console.log(width);
    document.querySelector('.container').style.setProperty('grid-auto-rows', `${width}px`);  
});

window.addEventListener('load', () => {
    const width = document.querySelector('.square').offsetWidth;
    //const widthS = width - 2;
    console.log(width);
    document.querySelector('.container').style.setProperty('grid-auto-rows', `${width}px`);  
});