const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PlAYER_STORAGE_KEY="HPS_PLAYER";

import {listChart,cpopList,lunarnewyearList} from './chart.js';


const navBtns=$$('.song-nav-item');
const songList=$('.song-songs-list');
const heartIcon = $('.control-heart');
const cdThumb=$('.control-photo');
const playBtn=$('.control-play');
const audio=$('#audio');
const nameSong=$('.control-song');
const nameSinger=$('.control-name');
const player=$('.control-play');
const control=$('#control')
const closeBtn=$('.control-finish');
const preBtn = $('.control-pre');
const nextBtn=$('.control-next');
const randomBtn=$('.control-random');
const repeatBtn=$('.control-repeat');
const progress=$('.progress-track-update');
const propressTrack=$('.control-progress');
const volumeBtn=$('.control-volume');
const volumeProgress=$('.control-range-update');
const volumeTrack=$('.control-range');
const songBoxs=$$('.song-box');
const songLength=$('.control-end');
const songStart=$('.control-start');
const photoTheme=$('.song-songs-photo-picture');
const weatherStatus=$('.song-header-weather');
const kindItems=$$('.song-kind-item');
const kindHighLights=$$('.song-kind-item.song-kind-highlights');
const kindPhotos=$$('.song-kind-photo-theme');
const kindThumbs=$$('.song-kind-photo-top');
const kindFrames=$$('.song-kind-background');
const kindLists=$$('.song-top-list');
const kindHeaders=$$('.song-top-header');
const kindExits=$$('.song-top-nav-left');






//Nav
const nav = {
    currentIndex: 0,
    handleEvent: function(){ 
        const _this = this;

        // Create effect when click nav
        for (let i=0;i<navBtns.length;i++) {
            navBtns[i].onclick=function(){
                if (i==0){
                    if (indexCurrent!=0){
                        kindFrames[indexCurrent].classList.remove('active');
                        kindFrames[0].classList.add('active');
                        indexCurrent=0;
                    }
                }
                _this.currentIndex=i;
                navBtns[i].classList.add('song-nav-active');
                for (var j=0;j<navBtns.length;j++) {
                    if (j!=i) {
                        navBtns[j].classList.remove('song-nav-active');
                    }
                }
                _this.openEvent();
            }
        }

        // Get hours to set weather
        const timeDate=new Date().getHours();
        if (timeDate>=6 && timeDate < 10) {
            weatherStatus.innerHTML =`
            <i class="bi bi-sun-fill song-icon-sun"></i>
            <i class="bi bi-cloud-fill song-icon-cloud"></i>
            `
        } else if (timeDate>=10 && timeDate<15) {
            weatherStatus.innerHTML =`
            <div class="song-header-weather">
            <i class="bi bi-sun-fill song-icon-sun"></i>
            `
        } else if (timeDate>=15 && timeDate<18) {
            weatherStatus.innerHTML =`
            <div class="song-header-weather">
            <i class="bi bi-cloud-drizzle-fill song-icon-rain"></i>
            `
        } else {
            weatherStatus.innerHTML =`
            <i class="bi bi-moon-stars-fill song-icon-moon"></i>
            <i class="bi bi-cloud-fill song-icon-cloud"></i>
            `
        }
    },
    openEvent: function(){
        if (this.currentIndex<songBoxs.length){
            songBoxs[this.currentIndex].classList.add('active');
            for (var j=0;j<songBoxs.length;j++) {
                if (j!=this.currentIndex) {
                    songBoxs[j].classList.remove('active');
                }
            }
        }
    },
    start: function(){
        this.handleEvent();
        this.openEvent();
    }
}

//Music
const YourLibrary = {
    currentIndex: 0,
    currentPage: 0,
    isChange: false,
    isPlaying: false,
    isMuting: false,
    isRandom: false,
    isRepeat: false,
    songs: [listChart,listChart,listChart,listChart,listChart,listChart,listChart,listChart,cpopList,listChart,listChart,lunarnewyearList,listChart,listChart,listChart,listChart,listChart,listChart,listChart],
    heartArray: new Array(listChart.length).fill(0),
    heartList: [
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
        new Array(200).fill(0),
    ],
    config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY))||{},
    setConfig: function(key,value){
        this.config[key]=value;
        localStorage.setItem(PlAYER_STORAGE_KEY,JSON.stringify(this.config));
    },
    render: function(){
        //Create song list
        if (this.currentPage==0){
            var html=[];
            for (var i in this.songs[this.currentPage]) {
                html[i]=`
                <div class="song-songs-item ${i==this.currentIndex?'song-active':''}" data-index=${i}>
                    <div class="song-songs-head">
                        <img src=${this.songs[this.currentPage][i].img} alt="" class="song-songs-thumb">
                        <img src="./assets/image/icon-playing.gif" alt="" class="song-songs-wave ${i==this.currentIndex?'active':''}">
                        <div class="song-songs-decoration">
                            <span class="song-songs-title">${this.songs[this.currentPage][i].song}</span>
                            <span class="song-songs-name">${this.songs[this.currentPage][i].name}</span>
                        </div>
                    </div>
                    <div class="song-songs-time column-5">${this.changeTime(this.songs[this.currentPage][i].length)}</div>
                    <div class="song-songs-tail column-5">
                        <i class="bi bi-heart-fill song-songs-heart ${this.heartArray[i]==1?'like':''}"></i>
                        <span class="bi bi-three-dots song-songs-select">
                            <div class="song-songs-support">
                                <div class="song-songs-broadcast">
                                    <i class="bi bi-broadcast-pin song-songs-broadcast-icon"></i>
                                    Next broadcast
                                </div>
                                <div class="song-songs-remove">
                                    <i class="bi bi-trash-fill song-songs-remove-icon"></i>
                                    Remove from your library
                                </div>
                                <div class="song-songs-share">
                                    <i class="bi bi-share-fill song-songs-share-icon"></i>
                                    Share
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
                `;
            }
            songList.innerHTML=html.join('\n');
            this.selectEvent();
            this.operateEvent();
        }
        //Create top list
        else {
            var html=[];
            for (var i=0;i<this.songs[this.currentPage].length;i++) {
                html[i]=`
                <div class="song-top-item ${i==this.currentIndex?'song-active':''}" data-index=${i}>
                    <div class="song-top-head">
                        <div class="song-top-number-frame">
                            <h3 class="song-top-number">${i+1}</h3>
                        </div>
                        <img src=${this.songs[this.currentPage][i].img} alt="" class="song-top-thumb">
                        <img src="./assets/image/icon-playing.gif" alt="" class="song-top-wave ${i==this.currentIndex?'active':''}">
                        <div class="song-top-decoration">
                            <span class="song-top-song">${this.songs[this.currentPage][i].song}</span>
                            <span class="song-top-name">${this.songs[this.currentPage][i].name}</span>
                        </div>
                    </div>
                    <div class="song-top-time column-5">${this.changeTime(this.songs[this.currentPage][i].length)}</div>
                    <div class="song-top-tail column-5">
                        <i class="bi bi-heart-fill song-top-heart ${(this.heartList[this.currentPage-1][i]==1 && this.isChange==false)?'like':''}"></i>
                        <i class="bi bi-send-fill song-top-send"></i>
                        <span class="bi bi-three-dots song-top-select">
                            <div class="song-top-support">
                                <div class="song-top-broadcast">
                                    <i class="bi bi-broadcast-pin song-top-broadcast-icon"></i>
                                    Next broadcast
                                </div>
                                <div class="song-top-add">
                                    <i class="bi bi-plus-circle-fill song-top-add-icon"></i>
                                    Add from your library
                                </div>
                                <div class="song-top-share">
                                    <i class="bi bi-share-fill song-top-share-icon"></i>
                                    Share
                                </div>
                            </div>
                        </span>
                    </div>
                    <div class="song-add-successful">
                        <div class="bi bi-check-circle song-add-icon"></div>
                        <div class="song-add-heading">Successfully added to your library</div>
                    </div>
                </div>
                `;
            }
            kindLists[this.currentPage-1].innerHTML=html.join('\n');
            this.selectKind();
            this.operateEvent();
        }
    },
    handleEvent: function(){
        const _this = this;

        // Click heart Event
        this.heartControl();
        // When click Play Btn
        playBtn.onclick=function(){
            if (_this.isPlaying){
                audio.pause();
            } else {
                audio.play();
            }
        }

        // When click Next/Pre Song
        nextBtn.onclick=function(){
            if (_this.isRandom){
                _this.playRandomSong();
                if (_this.currentPage==0){
                    _this.scrollToActiveSong();
                }
            } else {
                _this.currentIndex++;
                if (_this.currentIndex>=_this.songs[_this.currentPage].length){
                    _this.currentIndex=_this.currentIndex - this.songs[_this.currentPage].length;
                }
            }
            _this.loadcurrentSong();
            _this.render();
            audio.play();
        }
        preBtn.onclick=function(){
            if (_this.isRandom){
                _this.playRandomSong();
                if (_this.currentPage==0){
                    _this.scrollToActiveSong();
                }
            } else {
                _this.currentIndex--;
                if (_this.currentIndex<0){
                    _this.currentIndex=_this.songs[_this.currentPage].length + _this.currentIndex;
                }
            }
            _this.loadcurrentSong();
            _this.render();
            audio.play();
        }
        // When click random
        randomBtn.onclick=function() {
            _this.isRandom=!_this.isRandom;
            if (_this.isRandom==true && _this.isRepeat==true) {
                repeatBtn.click();
            }
            _this.setConfig('isRandom',_this.isRandom);
            this.classList.toggle('active',_this.isRandom);
        }
        //When click repeat 
        repeatBtn.onclick=function() {
            _this.isRepeat=!_this.isRepeat;
            if (_this.isRandom==true && _this.isRepeat==true) {
                randomBtn.click();
            }
            _this.setConfig('isRepeat',_this.isRepeat);
            this.classList.toggle('active',_this.isRepeat);
        }

        // When select song at your library
        songList.onclick=function(e) {
            const songNode=e.target.closest('.song-songs-item:not(.song-active)');
            if (songNode){
                if (!e.target.closest('.song-songs-tail')){
                    if (control.style.display=="none") {
                        control.style.display="flex";
                    }
                    _this.currentPage=0;
                    _this.currentIndex=Number(songNode.getAttribute('data-index'));
                    _this.render();
                    _this.loadcurrentSong();
                    audio.play();
                    var checkWave=$('.song-top-wave.active');
                    if(checkWave) {
                        checkWave.classList.remove('active');
                    }
                } else {
                    if(e.target.closest('.song-songs-heart')){
                        e.target.closest('.song-songs-heart').classList.toggle('like')
                        var tempAttribute_1=e.target.closest('.song-songs-heart').getAttribute('class');
                        if(tempAttribute_1.includes('like')==true){
                            _this.heartArray[Number(songNode.getAttribute('data-index'))]=1;
                        } else {
                            _this.heartArray[Number(songNode.getAttribute('data-index'))]=0;
                        }
                    } else if (e.target.closest('.song-songs-select')){
                        e.target.closest('.song-songs-select').childNodes[1].classList.add('active');
                    }
                }
            } else {
                const tempNode = e.target.closest('.song-songs-item.song-active')
                // When click on heart
                if(e.target.closest('.song-songs-heart')){
                    e.target.closest('.song-songs-heart').classList.toggle('like')
                    var tempAttribute_2=e.target.closest('.song-songs-heart').getAttribute('class');
                        if(tempAttribute_2.includes('like')==true){
                            _this.heartArray[Number(tempNode.getAttribute('data-index'))]=1;
                        } else {
                            _this.heartArray[Number(tempNode.getAttribute('data-index'))]=0;
                        }
                } else if (e.target.closest('.song-songs-select')){
                    e.target.closest('.song-songs-select').childNodes[1].classList.add('active');
                }
            }
        }

        // When select song at search
        for (let index=0;index<kindLists.length;index++) {
            kindLists[index].onclick=function(e) {
                const kindNode=e.target.closest('.song-top-item:not(.song-active)');
                if (kindNode){
                    if (!e.target.closest('.song-top-tail')){
                        if (control.style.display=="none") {
                            control.style.display="flex";
                        }
                        _this.currentPage=index+1;
                        tempArray[index]=tempArray[index]+1; //Update tempArray data
                        _this.currentIndex=Number(kindNode.getAttribute('data-index'));
                        _this.render();
                        _this.loadcurrentSong();
                        _this.heartControl();
                        audio.play();
                        // Delete Wave at your library
                        var checkWave=$('.song-songs-wave.active');
                        if(checkWave) {
                            checkWave.classList.remove('active');
                        }
                        var topWaves=$$('.song-top-wave.active');
                        for(var i=0;i<topWaves.length;i++) {
                            if(topWaves[i].parentNode.parentNode.parentNode===kindLists[index]){

                            } else {
                                topWaves[i].classList.remove('active');
                            }
                        }
                    } else {
                        if (e.target.closest('.song-top-heart')) {
                            e.target.closest('.song-top-heart').classList.toggle('like')
                            var tempAttribute_3=e.target.closest('.song-top-heart').getAttribute('class');
                            if(tempAttribute_3.includes('like')==true){
                                _this.heartList[_this.currentPage-1][Number(kindNode.getAttribute('data-index'))]=1;
                            } else {
                                _this.heartList[_this.currentPage-1][Number(kindNode.getAttribute('data-index'))]=0;
                            }
                        } else if (e.target.closest('.song-top-select')){
                            e.target.closest('.song-top-select').childNodes[1].classList.add('active');
                        }
                    }
                } else {
                    const tempKind = e.target.closest('.song-top-item.song-active')
                    // When click on heart
                    if(e.target.closest('.song-top-heart')){
                        e.target.closest('.song-top-heart').classList.toggle('like')
                        var tempAttribute_4=e.target.closest('.song-top-heart').getAttribute('class');
                            if(tempAttribute_4.includes('like')==true){
                                _this.heartList[_this.currentPage-1][Number(tempKind.getAttribute('data-index'))]=1;
                            } else {
                                _this.heartList[_this.currentPage-1][Number(tempKind.getAttribute('data-index'))]=0;
                            }
                    } else if (e.target.closest('.song-top-select')){
                        e.target.closest('.song-top-select').childNodes[1].classList.add('active');
                    }
                }
            }
        }

        //When audio Play/Paused
        audio.onplay=function() {
            _this.isPlaying=true;
            player.classList.add('playing');
            cdThumb.classList.add('rotating');
        }
        audio.onpause=function(){
            _this.isPlaying=false;
            player.classList.remove('playing');
            cdThumb.classList.remove('rotating');
        }
        
        // When finish song
        audio.onended=function() {
            if (_this.isRepeat){
                audio.play();
            } else {
                nextBtn.click();
            }
        }

        // Event progress of audio
        audio.ontimeupdate=function() {
            if (audio.duration) {
                const progressPercent=Math.floor(audio.currentTime/audio.duration*100);
                progress.style.width=`${progressPercent}%`;
                var timeSecond=(audio.currentTime/audio.duration)*audio.duration;
                var timeStart=_this.changeTime(timeSecond);
                songStart.textContent=timeStart;
            }
        }

        // When change progress
        propressTrack.onclick=function(e){
            const rect = e.target.getBoundingClientRect();
            var positionClick=e.clientX-rect.left;
            audio.currentTime=positionClick/this.offsetWidth*audio.duration;
            audio.timeupdate();
        }
        audio.volume=0.6;
        volumeProgress.style.width=`${audio.volume*100}%`;
        //When click volume
        volumeBtn.onclick=function(){
            _this.isMuting=!_this.isMuting;
            if(_this.isMuting) {
                audio.volume=0;
            } else {
                audio.volume=0.8;
            }
            volumeProgress.style.width=`${audio.volume*100}%`
            this.classList.toggle('muting');
        }
        // When change volume
        volumeTrack.onclick=function(e){
            const rect = e.target.getBoundingClientRect();
            var positionClick=e.clientX-rect.left;
            audio.volume=positionClick/this.offsetWidth;
            volumeProgress.style.width=`${audio.volume*100}%`
        }

        // When keyup "Enter" on document
        document.addEventListener('keyup', function(e) {
            if (e.which==13) {
                if (control.style.display=="none") {
                    control.style.display="flex";
                } else {
                    control.style.display="none";
                }
            }
        });

        // When close Control
        closeBtn.onclick=function() {
            control.style.display="none";
        }
    },
    defineProperties: function(){
        Object.defineProperty(this,'currentSong',{
            get: function(){
                return this.songs[this.currentPage][this.currentIndex];
            }
        })
    },
    loadcurrentSong: function(){
        nameSong.textContent=this.currentSong.song;
        nameSinger.textContent=this.currentSong.name;
        cdThumb.src=this.currentSong.avata;
        audio.src=this.currentSong.audio;
        photoTheme.src=this.currentSong.avata;
        songLength.textContent=this.changeTime(this.currentSong.length);
        if(this.currentPage==0) {
            if (this.heartArray[this.currentIndex]==0) {
                heartIcon.classList.remove('like');
            } else {
                heartIcon.classList.add('like');
            }
        } else {
            if (this.heartList[this.currentPage-1][this.currentIndex]==0) {
                heartIcon.classList.remove('like');
            } else {
                heartIcon.classList.add('like');
            }
        }
    },
    playRandomSong: function() {
        var newIndex=Math.floor(Math.random()*this.songs[this.currentPage].length);
        while (newIndex==this.currentIndex){
            newIndex=Math.floor(Math.random()*this.songs[this.currentPage].length);
        }
        this.currentIndex=newIndex;
    },
    scrollToActiveSong: function() {
        setTimeout(function(){
            $('.song-songs-item.song-active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        },300)
    },
    changeTime: function(timeInital) {
        timeInital=Math.floor(timeInital);
        var timeMinute=Math.floor(timeInital/60);
        var timeSecond=timeInital-timeMinute*60;
        if (timeMinute<10) {
            timeMinute=`0${timeMinute}`;
        }
        if (timeSecond<10) {
            timeSecond=`0${timeSecond}`;
        }
        return `${timeMinute}:${timeSecond}`;
    },
    selectEvent: function(){
        const supportBtns=$$('.song-songs-support');
        const selectBtns=$$('.song-songs-select');
        // // const selectKindBtns=$$('.song-top-item.song-active .song-top-select');

        $('.song-box.active').onclick=function() {
            for (var i=0;i<supportBtns.length;i++) {
                supportBtns[i].classList.remove('active');
            }
        }

        // Stop Propagation when click on support table or select btn
        for (let i=0;i<supportBtns.length;i++) {
            supportBtns[i].onclick=function(e) {
                e.stopPropagation();
            }
        }
        for (let i=0;i<selectBtns.length;i++) {
            selectBtns[i].onclick=function(e) {
                supportBtns[i].classList.add('active');
                for (var j=0;j<selectBtns.length;j++) {
                    if(j!=i) {
                        supportBtns[j].classList.remove('active');
                    }
                }
                e.stopPropagation();
            }
        }
    },
    selectKind: function(){
        var supportKinds=$$('.song-top-support');
        var selectKinds=$$('.song-top-select');

        $('.song-box-kind').onclick = function(){
            for (var j=0;j<supportKinds.length;j++) {
                supportKinds[j].classList.remove('active');
            }
        }

        for (let i=0;i<supportKinds.length;i++) {
            supportKinds[i].onclick=function(e) {
                e.stopPropagation();
            }
        }
        for (let i=0;i<selectKinds.length;i++) {
            selectKinds[i].onclick=function(e) {
                supportKinds[i].classList.add('active');
                for (var j=0;j<selectKinds.length;j++) {
                    if(j!=i) {
                        supportKinds[j].classList.remove('active');
                    }
                }
                e.stopPropagation();
            }
        }
    },
    operateEvent: function() {
        const _this = this;

        // Remove song from your library
        const removeSongs=$$('.song-songs-remove');
        for (let i=0;i<removeSongs.length;i++) {
            removeSongs[i].onclick=function(){
                if($('.song-songs-item.song-active').contains(this)){
                    var tempNumber=$('.song-songs-item.song-active').getAttribute('data-index');
                    _this.songs[0].splice(tempNumber,1);
                    _this.render();
                    _this.loadcurrentSong();
                    audio.play();
                } else {
                    for(var i=0; i<$$('.song-songs-item').length;i++) {
                        if ($$('.song-songs-item')[i].contains(this)) {
                            var tempActive=$('.song-songs-item.song-active').getAttribute('data-index');
                            var tempNumber=$$('.song-songs-item')[i].getAttribute('data-index');
                            _this.songs[0].splice(tempNumber,1);
                            if(tempActive>tempNumber) {
                                _this.currentIndex--;                          
                            }
                            if(_this.currentPage==0){
                                _this.render();
                            } else {
                                this.parentNode.classList.remove('active');
                            }
                        }
                    }
                }
            }
        }

        // Add song to your library
        const addSongs=$$('.song-top-add');
        const addSuccess=$$('.song-add-successful');
        for (let i=0;i<addSongs.length;i++) {
            addSongs[i].onclick=function() {
                this.parentNode.classList.remove('active');
                for (var j=0; j<$$('.song-top-item').length;j++) {
                    if ($$('.song-top-item')[j].contains(this)) {
                        var tempAdd=$$('.song-top-item')[j].getAttribute("data-index");
                        _this.songs[0].push(_this.songs[indexCurrent][tempAdd]);
                        if (_this.currentPage==0){
                            _this.render();
                        }
                    }
                }
                addSuccess[i].classList.add('active');
                for(var j=0;j<addSuccess.length;j++) {
                    if(j!=i){
                        addSuccess[j].classList.remove('active');
                    }
                }
                setTimeout(function(){addSuccess[i].classList.remove('active')},3000);
            }
        }
    },
    heartControl: function() {
        const _this = this;
        // Click heart Event
        heartIcon.onclick=function() {
            this.classList.toggle('like');
            var tempHeart=this.getAttribute('class');
            if(tempHeart.includes('like')) {
                if(_this.currentPage==0){
                    var tempNode=$('.song-songs-item.song-active');
                    var heartIndex=tempNode.getAttribute('data-index');
                    $$('.song-songs-heart')[heartIndex].classList.add('like');
                    _this.heartArray[heartIndex]=1;
                } else {
                    var itemActive=$('.song-kind-background.active .song-top-item.song-active');
                    var topHeart=itemActive.getAttribute('data-index');
                    $$('.song-kind-background.active .song-top-heart')[topHeart].classList.add('like');
                    _this.heartList[_this.currentPage-1][topHeart]=1;
                }
            } else {
                if(_this.currentPage==0){
                    var tempNode=$('.song-songs-item.song-active');
                    var heartIndex=tempNode.getAttribute('data-index');
                    $$('.song-songs-heart')[heartIndex].classList.remove('like');
                    _this.heartArray[heartIndex]=0;
                } else {
                    var topNode=$('.song-kind-background.active .song-top-item.song-active');
                    var heartTop=topNode.getAttribute('data-index');
                    $$('.song-kind-background.active .song-top-heart')[heartTop].classList.remove('like');
                    _this.heartList[_this.currentPage-1][heartTop]=0;
                }
            }
        }
    },
    start: function(){
        this.defineProperties();
        this.render();
        this.loadcurrentSong();
        this.handleEvent();
    }
}


// Initial music list
const KindListen = {
    currentIndex: 0,
    songs: [listChart,listChart,listChart,listChart,listChart,listChart,listChart,cpopList,listChart,listChart,lunarnewyearList,listChart,listChart,listChart,listChart,listChart,listChart,listChart],
    render: function(){
        var html=[];
        var index=indexCurrent-1;
        for (var i=0;i<this.songs[index].length;i++) {
            html[i]=`
            <div class="song-top-item" data-index=${i}>
                <div class="song-top-head">
                    <div class="song-top-number-frame">
                        <h3 class="song-top-number">${i+1}</h3>
                    </div>
                    <img src=${this.songs[index][i].img} alt="" class="song-top-thumb">
                    <div class="song-top-decoration">
                        <span class="song-top-song">${this.songs[index][i].song}</span>
                        <span class="song-top-name">${this.songs[index][i].name}</span>
                    </div>
                </div>
                <div class="song-top-time column-5">${this.changeTime(this.songs[index][i].length)}</div>
                <div class="song-top-tail column-5">
                    <i class="bi bi-heart-fill song-top-heart"></i>
                    <i class="bi bi-send-fill song-top-send"></i>
                    <span class="bi bi-three-dots song-top-select">
                        <div class="song-top-support">
                            <div class="song-top-broadcast">
                                <i class="bi bi-broadcast-pin song-top-broadcast-icon"></i>
                                Next broadcast
                            </div>
                            <div class="song-top-add">
                                <i class="bi bi-plus-circle-fill song-top-add-icon"></i>
                                Add from your library
                            </div>
                            <div class="song-top-share">
                                <i class="bi bi-share-fill song-top-share-icon"></i>
                                Share
                            </div>
                        </div>
                    </span>
                </div>
                <div class="song-add-successful">
                    <div class="bi bi-check-circle song-add-icon"></div>
                    <div class="song-add-heading">Successfully added to your library</div>
                </div>
            </div>
            `;
        }
        kindLists[index].innerHTML=html.join('\n');
    },
    changeTime: function(timeInital) {
        timeInital=Math.floor(timeInital);
        var timeMinute=Math.floor(timeInital/60);
        var timeSecond=timeInital-timeMinute*60;
        if (timeMinute<10) {
            timeMinute=`0${timeMinute}`;
        }
        if (timeSecond<10) {
            timeSecond=`0${timeSecond}`;
        }
        return `${timeMinute}:${timeSecond}`;
    },
    start: function(){
        this.render();
    }
}
var tempArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // Check go to KindItems event
var indexCurrent=0;

// Handle go in and go out events
const Search={
    currentIndex: 0,
    handleEvent: function(){ 
        const _this = this;

        //Hover top Event
        for (let index=0;index<2;index++) {
            kindHighLights[index].onmouseover=function() {
                kindThumbs[index].classList.remove("active");
                kindPhotos[index].classList.add("hovering");
            }
            kindHighLights[index].onmouseout=function() {
                kindThumbs[index].classList.add("active");
                kindPhotos[index].classList.remove("hovering");
            }
        }

        // Click into kind Items
        for (let i=0;i<kindItems.length;i++) {
            kindItems[i].onclick=function() {
                kindFrames[0].classList.remove('active');
                kindFrames[i+1].classList.add('active');
                _this.currentIndex=i+1;
                indexCurrent=_this.currentIndex;
                if (tempArray[i]==0){
                    KindListen.render();
                    YourLibrary.selectKind();
                    YourLibrary.operateEvent();
                }
            }
        }
        // Exit kind music
        for (let i=0;i<kindItems.length;i++) {
            kindExits[i].onclick=function() {
                kindFrames[i+1].classList.remove('active');
                kindFrames[0].classList.add('active');
                _this.currentIndex=0;
                indexCurrent=_this.currentIndex;
            }
        }
    },
    start: function(){
        this.handleEvent();
    }
}

nav.start();
YourLibrary.start();
Search.start();


