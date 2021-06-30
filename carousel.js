// FIRST CAROUSEL

$('.owl__carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// SECOND (REVIEWS) CAROUSEL

$('.owl__carousel-2').owlCarousel({
    infinite: true,
    margin:40,
    nav: false,
    dots: false,
    loop: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})