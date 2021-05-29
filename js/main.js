$('.carousel').carousel({   
    interval: 2000,
    pause: false
})

$('.autoPlayBtn').on('click', function(){
 
    if( ! $(this).hasClass('paused') ) {
        $('.carousel').carousel('pause');
        $('.autoPlayBtn').toggleClass('paused');
        $('.autoPlayBtn').text("play");
        // $('.autoPlayBtn i').removeClass('fa-pause').addClass('fa-play');
        $(this).blur();
    }
    else {
        $('.carousel').carousel('cycle');
        $('.autoPlayBtn').toggleClass('paused');
        $('.autoPlayBtn').text("stop");
        // $('.autoPlayBtn i').removeClass('fa-play').addClass('fa-pause');
        $(this).blur();
    }
 
});

if (document.getElementById("autoPlayBtn").classList.contains("autoPlayBtn paused")){
    document.getElementById("autoPlayBtn").innerHTML = "play";
} else {
    document.getElementById("autoPlayBtn").innerHTML = "stop";
}


// CAROUSEL JS
$('.services__carousel').owlCarousel({
    loop:true,
    margin:26,
    nav:true,
    dots: false,
    slideBy: 5,
    smartSpeed: 100,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.customers__carousel').owlCarousel({
    loop:true,
    margin:26,
    nav:true,
    dots: false,
    slideBy: 5,
    smartSpeed: 500,
    responsive:{
        0:{
            items:1
        }
    }
})

$('.projects__carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    slideBy: 5,
    smartSpeed: 100,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

//STICKY HEADER
window.onscroll = function(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        document.getElementById("stickyHeader").style.transform = "translateY(0)";
        document.getElementById("categories").style.opacity = "1";
        document.getElementById("categories").style.transform = "rotateX(0)";
    } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("stickyHeader").style.transform = "translateY(0)";
        document.getElementById("categories").style.opacity = "0";
        document.getElementById("categories").style.transform = "rotateX(90deg)";
    } else {        
        document.getElementById("stickyHeader").style.transform = "translateY(-100%)"; 
    }
} 