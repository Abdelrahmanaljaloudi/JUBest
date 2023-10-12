(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


function sound1(){
    var snd = new Audio('audio/alif.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound2(){
    var snd = new Audio('audio/ba.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound3(){
    var snd = new Audio('audio/ta.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound4(){
    var snd = new Audio('audio/tha.mp3')//wav is also supported
    snd.play()//plays the sound
}

function sound5(){
    var snd = new Audio('audio/jiim.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound6(){
    var snd = new Audio('audio/hha.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound7(){
    var snd = new Audio('audio/kha.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound8(){
    var snd = new Audio('audio/daal.mp3')//wav is also supported
    snd.play()//plays the sound
}

function sound9(){
    var snd = new Audio('audio/thaal.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound10(){
    var snd = new Audio('audio/ra.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound11(){
    var snd = new Audio('audio/zay.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound12(){
    var snd = new Audio('audio/siin.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound13(){
    var snd = new Audio('audio/shiin.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound14(){
    var snd = new Audio('audio/saad.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound15(){
    var snd = new Audio('audio/daad.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound16(){
    var snd = new Audio('audio/taa.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound17(){
    var snd = new Audio('audio/thaa.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound18(){
    var snd = new Audio('audio/ayn.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound19(){
    var snd = new Audio('audio/ghayn.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound20(){
    var snd = new Audio('audio/fa.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound21(){
    var snd = new Audio('audio/qaf.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound22(){
    var snd = new Audio('audio/kaf.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound23(){
    var snd = new Audio('audio/lam.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound24(){
    var snd = new Audio('audio/miim.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound25(){
    var snd = new Audio('audio/nuun.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound26(){
    var snd = new Audio('audio/ha.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound27(){
    var snd = new Audio('audio/waw.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound28(){
    var snd = new Audio('audio/ya.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundana(){
    var snd = new Audio('audio/ana.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundant(){
    var snd = new Audio('audio/ant.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundanthuwa(){
    var snd = new Audio('audio/huwa.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundanthey(){
    var snd = new Audio('audio/hey.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundantnahn(){
    var snd = new Audio('audio/nahn.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundhowm(){
    var snd = new Audio('audio/howm.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundha1(){
    var snd = new Audio('audio/ha1.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundhaaa(){
    var snd = new Audio('audio/haaa.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundna(){
    var snd = new Audio('audio/na.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundhom(){
    var snd = new Audio('audio/hom.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundmn(){
    var snd = new Audio('audio/mn.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundthis(){
    var snd = new Audio('audio/this.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundthat(){
    var snd = new Audio('audio/that.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundthese(){
    var snd = new Audio('audio/these.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundthose(){
    var snd = new Audio('audio/those.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundwhose(){
    var snd = new Audio('audio/whose.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundwhat(){
    var snd = new Audio('audio/what.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundwhich(){
    var snd = new Audio('audio/which.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundwhen(){
    var snd = new Audio('audio/when.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundwhere(){
    var snd = new Audio('audio/where.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundwhy(){
    var snd = new Audio('audio/why.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundhow(){
    var snd = new Audio('audio/how.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound00(){
    var snd = new Audio('audio/0.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound01(){
    var snd = new Audio('audio/1.mp3')//wav is also supported
    snd.play()//plays the sound
}

function sound02(){
    var snd = new Audio('audio/2.mp3')//wav is also supported
    snd.play()//plays the sound
}

function sound03(){
    var snd = new Audio('audio/3.mp3')//wav is also supported
    snd.play()//plays the sound
}


function sound04(){
    var snd = new Audio('audio/4.mp3')//wav is also supported
    snd.play()//plays the sound
}

function sound05(){
    var snd = new Audio('audio/5.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound06(){
    var snd = new Audio('audio/6.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound07(){
    var snd = new Audio('audio/7.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound08(){
    var snd = new Audio('audio/8.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound09(){
    var snd = new Audio('audio/9.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound010(){
    var snd = new Audio('audio/10.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound05(){
    var snd = new Audio('audio/5.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound05(){
    var snd = new Audio('audio/5.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundhour(){
    var snd = new Audio('audio/hour.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundminute(){
    var snd = new Audio('audio/minute.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundmorning(){
    var snd = new Audio('audio/morning.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundafternoon(){
    var snd = new Audio('audio/afternoon.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundevening(){
    var snd = new Audio('audio/evening.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundday(){
    var snd = new Audio('audio/day.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundmonth(){
    var snd = new Audio('audio/month.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundyear(){
    var snd = new Audio('audio/year.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundMonday(){
    var snd = new Audio('audio/Monday.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundTuesday(){
    var snd = new Audio('audio/Tuesday.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundWednesday(){
    var snd = new Audio('audio/Wednesday.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundThursday(){
    var snd = new Audio('audio/Thursday.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundFriday(){
    var snd = new Audio('audio/Friday.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundSaturday(){
    var snd = new Audio('audio/Saturday.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundSunday(){
    var snd = new Audio('audio/Sunday.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundhospital(){
    var snd = new Audio('audio/hospital.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundhospital(){
    var snd = new Audio('audio/hospital.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundsupermarket(){
    var snd = new Audio('audio/supermarket.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundschool(){
    var snd = new Audio('audio/school.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sounddowntown(){
    var snd = new Audio('audio/downtown.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sounduniversity(){
    var snd = new Audio('audio/university.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundbank(){
    var snd = new Audio('audio/bank.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundhospital(){
    var snd = new Audio('audio/hospital.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundmuseum(){
    var snd = new Audio('audio/museum.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundrestaurant(){
    var snd = new Audio('audio/restaurant.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundcafe(){
    var snd = new Audio('audio/cafe.mp3')//wav is also supported
    snd.play()//plays the sound
}

function soundpolice(){
    var snd = new Audio('audio/police.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundbus(){
    var snd = new Audio('audio/bus.mp3')//wav is also supported
    snd.play()//plays the sound
}

function soundpen(){
    var snd = new Audio('audio/pen.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundnotebook(){
    var snd = new Audio('audio/notebook.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundpencil(){
    var snd = new Audio('audio/pencil.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundheadphones(){
    var snd = new Audio('audio/headphones.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundbackpack(){
    var snd = new Audio('audio/backpack.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundbackpack(){
    var snd = new Audio('audio/backpack.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundeat(){
    var snd = new Audio('audio/eat.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundstudy(){
    var snd = new Audio('audio/study.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundsleep(){
    var snd = new Audio('audio/sleep.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundwake(){
    var snd = new Audio('audio/wake.mp3')//wav is also supported
    snd.play()//plays the sound
}

function soundgo(){
    var snd = new Audio('audio/go.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundgive(){
    var snd = new Audio('audio/give.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundwalk(){
    var snd = new Audio('audio/walk.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundmeet(){
    var snd = new Audio('audio/meet.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundfinish(){
    var snd = new Audio('audio/finish.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundcreate(){
    var snd = new Audio('audio/create.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundbig(){
    var snd = new Audio('audio/big.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundsmall(){
    var snd = new Audio('audio/small.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundlong(){
    var snd = new Audio('audio/long.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundshort(){
    var snd = new Audio('audio/short.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundsmooth(){
    var snd = new Audio('audio/smooth.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundrough(){
    var snd = new Audio('audio/rough.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundpretty(){
    var snd = new Audio('audio/pretty.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundfunny(){
    var snd = new Audio('audio/funny.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundlovely(){
    var snd = new Audio('audio/lovely.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundhumble(){
    var snd = new Audio('audio/humble.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundcourageous(){
    var snd = new Audio('audio/courageous.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundhappy(){
    var snd = new Audio('audio/happy.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundsad(){
    var snd = new Audio('audio/sad.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundanxious(){
    var snd = new Audio('audio/anxious.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundstressed (){
    var snd = new Audio('audio/stressed.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundjolly(){
    var snd = new Audio('audio/jolly.mp3')//wav is also supported
    snd.play()//plays the sound
}
function soundweird(){
    var snd = new Audio('audio/weird.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound(){
    var snd = new Audio('audio/.mp3')//wav is also supported
    snd.play()//plays the sound
}

function sound(){
    var snd = new Audio('audio/.mp3')//wav is also supported
    snd.play()//plays the sound
}function sound(){
    var snd = new Audio('audio/.mp3')//wav is also supported
    snd.play()//plays the sound
}
function sound(){
    var snd = new Audio('audio/.mp3')//wav is also supported
    snd.play()//plays the sound
}

