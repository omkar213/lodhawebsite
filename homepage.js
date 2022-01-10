const divisions = document.querySelector('div');
const navLi = document.querySelector('nav .navigation-bar ul li');

window.addEventListener('scroll', () => {
    let currentdiv = '';
    // console.log(scrollY); //This is used to console log the scrolling height of divisions
    //offsetTop is used to read the scrolling
    //clientHeight is used to get the height of each div
    divisions.forEach(divsion => {
        const divsionTop = divsion.offsetTop;   
        const divsionHeight = divsion.clientHeight;

        if(scrollY >= divsionTop){
            currentdiv = divsion.getAttribute('id');
        }
    })
    navLi.forEach( li => {
        li.class
    })
})
