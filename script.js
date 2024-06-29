$(document).ready(function(){
    $('.menu').click(function(){
        $(this).toggleClass('fa-xmark');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('menu').removeClass('fa-xmark');
        $('.navbar').removeClass('nav-toggle');
        
        if($(window).scrollTop() > 30)
        {
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

    $('window').each(function(){
        var top = $(window).scrollTop();
        var id = $(this).attr('id');
        var height = $(this).height();
        var top = $(this).offset.top - 200;
        if(top >= offset && top < height + offset){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find('[href="# ' + id + '"]').addClass('active');
        }
    });

    });


})