
$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    $("span").css({top:100+(scroll * 0.25)+ "px"});
});
function scrollAppear() {
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var  screenPosition = window.innerHeight / 2;

    if(introPosition < screenPosition) {
        introText.classList.add('intro-appear');
    }
}
window.addEventListener('scroll', scrollAppear);

//モーダル１//
var modalBtn = document.querySelector('.modal-btn1');
var modalBg = document.querySelector('.modal-bg1');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});

var modalClose = document.querySelector('.modal-close1');
modalClose.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
});


//モーダル２//
var Btn = document.querySelector('.modal-btn2');
var Bg = document.querySelector('.modal-bg2');

Btn.addEventListener('click', function(){
    Bg.classList.add('bg-active');
});

var Close = document.querySelector('.modal-close2');
Close.addEventListener('click',function(){
    Bg.classList.remove('bg-active');
});


//contactモーダル//
var modal_Btn = document.querySelector('#contact');
var modal_Bg = document.querySelector('.modal-bg3');

modal_Btn.addEventListener('click', function(){
   modal_Bg.classList.add('bg-active');
})

var Close = document.querySelector('.modal-close3');
Close.addEventListener('click',function(){
    modal_Bg.classList.remove('bg-active');
});

//ハンバーガー//
var menuIcon = document.querySelector('.hamburger');
var navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click" , () => {
    navbar.classList.toggle('change');
});

$(function(){

$('.text-wrapper').hide().fadeIn(3000);
$('#home').click(function() {

    var home = $('.main').offset().top;

    $('html, body').animate({scrollTop:home});

});

$('#about').click(function() {

    var position = $('.about').offset().top;

    $('html, body').animate({scrollTop:position});

});

$('#works').click(function() {

    var place = $('.works').offset().top;

    $('html, body').animate({scrollTop:place});

});

$('#contact').click(function() {

    var place = $('.contact').offset().top;

    $('html, body').animate({scrollTop:place});

});

});
