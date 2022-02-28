// Modal (SignIn+SignUp)
const signBtn_In = document.querySelectorAll('.js-sign-in');
const modal_In = document.querySelector('.js-modal-in');
const modalContainer_In = document.querySelector('#form-signIn');
const modalClose_In = document.querySelector('#form-signIn .form-close');
const modalChange_In = document.querySelector('#form-signIn .change-signIn');
function ShowModalIn() {
    modal_In.classList.add('open');
}
function HideModalIn() {
    modal_In.classList.remove('open');
}
modalChange_In.onclick = function() {
    HideModalIn();
    ShowModalUp();
}
for(let i=0;i<signBtn_In.length;i++) {
    signBtn_In[i].addEventListener('click',ShowModalIn);
}
modalClose_In.addEventListener('click',HideModalIn);
modal_In.addEventListener('click',HideModalIn);
modalContainer_In.addEventListener('click',function(event){
    event.stopPropagation();
})
//---------------------------------------------------------------
const signBtn_Up = document.querySelectorAll('.js-sign-up');
const modal_Up = document.querySelector('.js-modal-up');
const modalContainer_Up = document.querySelector('#form-signUp');
const modalClose_Up = document.querySelector('#form-signUp .form-close');
const modalChange_Up = document.querySelector('#form-signUp .change-signUp');


function ShowModalUp() {
    modal_Up.classList.add('open');
}
function HideModalUp() {
    modal_Up.classList.remove('open');
}
modalChange_Up.onclick = function() {
    HideModalUp();
    ShowModalIn();
}
for(let i=0;i<signBtn_Up.length;i++) {
    signBtn_Up[i].addEventListener('click',ShowModalUp);
}
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

//---------------------------------------------------------------
//Footer
const spring = document.querySelector('.footer-spring')
const summer = document.querySelector('.footer-summer')
const autumn = document.querySelector('.footer-autumn')
const winter = document.querySelector('.footer-winter')
const d = new Date()
const month = d.getMonth()
if (month < 3) {
    spring.classList.add('active')
} else if (month >= 3 && month < 6) {
    summer.classList.add('active')
} else if (month >= 6 && month < 9) {
    autumn.classList.add('active')
} else {
    winter.classList.add('active')
}




//---------------------------------------------------------------
/* Mobile */
const navOpen = document.querySelector('.nav-open-icon');
const navClose = document.querySelector('.nav-close-icon');
const control = document.querySelector('#control');
const controlNav = document.querySelector('.control-nav');
const closeBtn=document.querySelector('.control-finish');

navOpen.onclick = function() {
    document.querySelector('#nav').classList.add('open')
    // document.querySelector('#user').classList.add('open')
    // document.querySelector('.nav-close-icon').classList.add('open')
    // document.querySelector('.nav-follow').classList.add('open')
    // document.querySelector('.nav-copyright').classList.add('open')
    document.querySelector('.lock-screen').classList.add('active')
    document.querySelector('#control').classList.add('remove')
}
navClose.onclick = function() {
    document.querySelector('#nav').classList.add('hiding')
    // document.querySelector('#user').classList.add('hiding')
    // document.querySelector('.nav-close-icon').classList.add('hiding')
    // document.querySelector('.nav-follow').classList.add('hiding')
    // document.querySelector('.nav-copyright').classList.add('hiding')
    setTimeout(function(){
        document.querySelector('#nav').classList.remove('hiding')
        // document.querySelector('#user').classList.remove('hiding')
        // document.querySelector('.nav-close-icon').classList.remove('hiding')
        // document.querySelector('.nav-follow').classList.remove('hiding')
        // document.querySelector('.nav-copyright').classList.remove('hiding')
        setTimeout(function() {
            document.querySelector('#nav').classList.remove('open')
            // document.querySelector('#user').classList.remove('open')
            // document.querySelector('.nav-close-icon').classList.remove('open')
            // document.querySelector('.nav-follow').classList.remove('open')
            // document.querySelector('.nav-copyright').classList.remove('open')
            document.querySelector('.lock-screen').classList.remove('active')
            document.querySelector('#control').classList.remove('remove')
        },10)
    },300);
}

controlNav.ontouchmove=function(e) {
    this.classList.remove('initialize')
    var touchLocation = e.touches['0']
    this.style.left = touchLocation.clientX + 'px'
    this.style.top = touchLocation.clientY + 'px'
}
controlNav.ontouchend=function(e) {
    var x = parseInt(this.style.left)
    var y = parseInt(this.style.top)
}
// When close Control
closeBtn.onclick=function() {
    control.style.display="none"
}
controlNav.onclick=function() {
    control.style.display="flex"
}
