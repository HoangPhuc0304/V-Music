// Modal (SignIn+SignUp)
const signBtn_In = document.querySelector('.js-sign-in');
const modal_In = document.querySelector('.js-modal-in');
const modalContainer_In = document.querySelector('.js-modal-container-in');
const modalClose_In = document.querySelector('.js-modal-close-in');

function ShowModalIn() {
    modal_In.classList.add('open');
}
function HideModalIn() {
    modal_In.classList.remove('open');
}

signBtn_In.addEventListener('click',ShowModalIn);
modalClose_In.addEventListener('click',HideModalIn);
modal_In.addEventListener('click',HideModalIn);
modalContainer_In.addEventListener('click',function(event){
    event.stopPropagation();
})
//---------------------------------------------------------------
const signBtn_Up = document.querySelector('.js-sign-up');
const modal_Up = document.querySelector('.js-modal-up');
const modalContainer_Up = document.querySelector('.js-modal-container-up');
const modalClose_Up = document.querySelector('.js-modal-close-up');

function ShowModalUp() {
    modal_Up.classList.add('open');
}
function HideModalUp() {
    modal_Up.classList.remove('open');
}

signBtn_Up.addEventListener('click',ShowModalUp);
modalClose_Up.addEventListener('click',HideModalUp);
modal_Up.addEventListener('click',HideModalUp);
modalContainer_Up.addEventListener('click',function(event){
    event.stopPropagation();
})
//---------------------------------------------------------------
// Slider
var myIndex=1;
var imageSlide=document.querySelectorAll('.slider-photo');
var btnSlide=document.querySelectorAll('.slider-btn');
var numberPage=document.querySelectorAll('.slider-page');
// CurrentSlide(myIndex);
ChangeSlides();
function ShowSlide(n){
    if (n>btnSlide.length) {
        n=n-btnSlide.length;
    } else if (n<1){
        n=btnSlide.length-n;
    }
    imageSlide[n-1].classList.add('active');
    btnSlide[n-1].classList.add('active-background');
    numberPage[n-1].style.display="block";
    for (var i=0;i<btnSlide.length;i++) {
        if (i!=(n-1)){
            imageSlide[i].classList.remove('active');
            btnSlide[i].classList.remove('active-background');
            numberPage[i].style.display="none";
        }
    }
}

function ChangeSlides() {
    for (var i=0;i<btnSlide.length;i++) {
        imageSlide[i].classList.remove('active');
        btnSlide[i].classList.remove('active-background');
        numberPage[i].style.display="none";
    }
    var x=myIndex;
    if (x > btnSlide.length) {x=x-btnSlide.length}
    else if (x<1) {x=btnSlide.length-x}
    imageSlide[x-1].classList.add('active');
    btnSlide[x-1].classList.add('active-background');
    numberPage[x-1].style.display="block";
    x++;
    myIndex=x;
    setTimeout(ChangeSlides, 5000);
}
function CurrentSlide(n) {
    myIndex=n;
    ShowSlide(myIndex);
}
function PlusSlide(n) {
    myIndex=myIndex+n;
    if (myIndex<1){
        myIndex=btnSlide.length-myIndex;
    }
    ShowSlide(myIndex);
}
//---------------------------------------------------------------
// Chart
var chartIndex=0;
const chartPhotos=document.querySelectorAll('.chart-top-photo');
const chartDisplay=document.getElementById("js-chart-top")
const chartPage=document.querySelectorAll('.chart-page');
chartDisplay.src=chartPhotos[0].src;
chartPage[0].style.display="block";
function CurrentChart(n){
    chartIndex=n;
    chartDisplay.src=chartPhotos[n-1].src;
    chartPage[n-1].style.display="block";
    for (var i in chartPage){
        if (i!=(n-1)){
            chartPage[i].style.display="none";
        }
    }
}
function PlusChart(n) {
    chartIndex=chartIndex+n;
    if (chartIndex<1){
        chartIndex=chartPage.length-chartIndex;
    } else if (chartIndex>chartPage.length) {
        chartIndex=chartIndex-chartPage.length;
    }
    CurrentChart(chartIndex);
}

//---------------------------------------------------------------
//Book
var myCount=0;
TransformFrame();
function TransformFrame(){
    var x=document.getElementsByClassName("book-frame");
    for (var i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    myCount++;
    if (myCount>x.length){
        myCount=1;
    }
    x[myCount-1].style.display="block";
    setTimeout(TransformFrame,4000);
}

//Event click book btn
const bookButtons=document.querySelectorAll('.book-btn');
const photoFrames=document.querySelectorAll('.book-background');
const photoBackgrounds=document.querySelectorAll('.book-background-box');
const exitButtons=document.querySelectorAll('.book-exit');
for (let i=0;i<bookButtons.length;i++){
    bookButtons[i].onclick=function(){
        photoFrames[i].classList.add('active');
        photoBackgrounds[i].classList.add('active');
    }
    exitButtons[i].onclick=function() {
        photoFrames[i].classList.remove('active');
        photoBackgrounds[i].classList.remove('active');
    }
    document.querySelectorAll('.book-click')[i].onclick=function(){
        SlideEvent(0)
        .then(function(){
            document.querySelectorAll('.book-click')[i].classList.toggle('hiding');
            return SlideEvent(500);
        })
        .then(function(){
            document.querySelectorAll('.book-click')[i].style.display="none";
            return SlideEvent(500);
        })
        .then(function(){
            document.querySelectorAll('.book-night-star')[i].style.display="block";
            return SlideEvent(1000);
        })
        .then(function(){
            document.querySelectorAll('.book-mountain')[i].style.display="block";
            return SlideEvent(1000);
        })
        .then(function(){
            document.querySelectorAll('.book-moon')[i].style.display="block";
            return SlideEvent(1000);
        })
        .then(function(){
            document.querySelectorAll('.book-valley')[i].style.display="block";
            return SlideEvent(1000);
        })
        .then(function(){
            document.querySelectorAll('.book-singer-hn')[i].style.display="block";
            return SlideEvent(1000);
        })
        .then(function(){
            document.querySelectorAll('.book-shadow')[i].style.display="block";
            return SlideEvent(500);
        })
    }
}

function SlideEvent (ms){
    return new Promise (function(resolve){
        setTimeout(resolve,ms);
    });
}

// Contact 
const btnContact=document.querySelector('.js-contact-btn');
const notice = document.querySelector('.js-notice');
const noticeContainer=document.querySelector('.js-notice-container');
const noticeClose=document.querySelector('.js-notice-close');

function ShowNoticeThanks() {
    notice.classList.add('open')
}
function HideNoticeThanks() {
    notice.classList.remove('open')
}
btnContact.addEventListener('click',ShowNoticeThanks);
noticeClose.addEventListener('click',HideNoticeThanks);
notice.addEventListener('click',HideNoticeThanks);
noticeContainer.addEventListener('click',function(event){
    event.stopPropagation();
})