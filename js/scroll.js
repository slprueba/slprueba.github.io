    window.addEventListener('scroll', () =>{
        const scrollPx = window.scrollY;
        console.log(scrollPx);
        const scroll = document.querySelector('.overlay');
        
        if(scrollPx > 1700){
            scroll.style.backgroundColor = 'black';
        }else if (scrollPx > 1000 ) {
            scroll.style.backgroundColor = 'grey';
        }else if (scrollPx > 0 ) {
            scroll.style.backgroundColor = 'white';
        }

    })



// const scroll = document.querySelector('.overlay');

// scroll.addEventListener('scroll', cambioDeColor);

// function cambioDeColor (){
//     scroll.scroll
//     console.log(scroll);
// }