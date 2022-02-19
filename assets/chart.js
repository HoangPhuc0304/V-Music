const chartItem=document.querySelectorAll('.chart-item-box');

// songs Lists:
// your library + chart lists
var listChart=[
    {
        link: "https://www.youtube.com/watch?v=psZ1g9fMfeo",
        img: "./assets/image/chart_ctcht.jpg",
        avata: "./assets/image/song_ctcht.jpg",
        song: "Chúng ta của hiện tại",
        name: "Son Tung M-TP",
        audio: "./assets/audio/chungtacuahientai.flac",
        length: 301
    },
    {
        link: "https://www.youtube.com/watch?v=UVbv-PJXm14",
        img: "./assets/image/chart_mangtienvechome.jpg",
        avata: "./assets/image/song_mangtienvechome.jpg",
        song: "Mang tiền về cho mẹ",
        name: "Den",
        audio: "./assets/audio/mtvcm.flac",
        length: 405
    },
    {
        link: "https://www.youtube.com/watch?v=rIXhXaQ8tiM",
        img: "./assets/image/chart_ndt.jpg",
        avata: "./assets/image/song_ndt.jpg",
        song: "Ngày đầu tiên",
        name: "Duc Phuc",
        audio: "./assets/audio/ngaydautien.mp3",    
        length: 208
    },
    {
        link: "https://www.youtube.com/watch?v=D80QnP0iRBo",
        img: "./assets/image/chart_dnlli.jpg",
        avata: "./assets/image/song_dnlli.jpg",
        song: "Đau nhất là lặng im",
        name: "Erik",
        audio: "./assets/audio/daunhatlalangim.mp3",    
        length: 286
    },
    {
        link: "https://www.youtube.com/watch?v=ptSwuFTEYAo",
        img: "./assets/image/chart_tmcgya.jpg",
        avata: "./assets/image/song_tmcgya.jpg",
        song: "Thay mọi cô gái yêu anh",
        name: "Amee",
        audio: "./assets/audio/thaymoicogaiyeuanh.flac",    
        length: 215
    },
    {
        link: "https://www.youtube.com/watch?v=4CCGI83vOVo",
        img: "./assets/image/chart_domdom.jpg",
        avata: "./assets/image/song_domdom.jpg",
        song: "Đom Đóm",
        name: "Jack-J97",
        audio: "./assets/audio/domdom.flac",
        length: 324
    },
    {
        link: "https://www.youtube.com/watch?v=vTJdVE_gjI0",
        img: "./assets/image/chart_divenha.jpg",
        avata: "./assets/image/song_divenha.jpg",
        song: "Đi về nhà",
        name: "Den, JustaTee",
        audio: "./assets/audio/divenha.flac",
        length: 200
    },
    {
        link: "https://www.youtube.com/watch?v=ixdSsW5n2rI",
        img: "./assets/image/chart_buocquanhau.jpg",
        avata: "./assets/image/song_buocquanhau.jpg",
        song: "Bước qua nhau",
        name: "Vu",
        audio: "./assets/audio/buocquanhau.flac",
        length: 257
    },
    {
        link: "https://www.youtube.com/watch?v=Z7tiB0xMrZg",
        img: "./assets/image/chart_tinylove.jpg",
        avata: "./assets/image/song_tinylove.jpg",
        song: "tiny love",
        name: "Thinh Suy",
        audio: "./assets/audio/tinylove.flac",
        length: 158
    },
    {
        link: "https://www.youtube.com/watch?v=ZwDxaM5VBJM",
        img: "./assets/image/chart_dendakhongduong.jpg",
        avata: "./assets/image/song_dendakhongduong.jpg",
        song: "Đen đá không đường",
        name: "Amee",
        audio: "./assets/audio/dendakhongduong.flac",
        length: 180
    },
    {
        link: "https://www.youtube.com/watch?v=ECxVfrwwTp0",
        img: "./assets/image/chart_gaclaiaulo.jpg",
        avata: "./assets/image/song_gaclaiaulo.jpg",
        song: "Gác lại âu lo",
        name: "Da LAB",
        audio: "./assets/audio/gaclaiaulo.flac",
        length: 282
    },
    {
        link: "https://www.youtube.com/watch?v=0R8IbpKXavM",
        img: "./assets/image/chart_ttbdty.png",
        avata: "./assets/image/song_ttbdty.png",
        song: "Trên tình bạn dưới tình yêu",
        name: "Min",
        audio: "./assets/audio/ttbdty.mp3",
        length: 199
    },
    {
        link: "https://www.youtube.com/watch?v=663GAiYnWVk",
        img: "./assets/image/chart_namnguemru.jpg",
        avata: "./assets/image/song_namnguemru.jpg",
        song: "Nằm ngủ emru",
        name: "Bich Phuong",
        audio: "./assets/audio/namnguemru.mp3",
        length: 258
    },
    {
        link: "https://www.youtube.com/watch?v=vpRi8S6uXAg",
        img: "./assets/image/chart_chvtx.jpg",
        avata: "./assets/image/song_chvtx.jpg",
        song: "Có hẹn với thanh xuân",
        name: "MONSTAR",
        audio: "./assets/audio/cohenvoithanhxuan.flac",
        length: 218
    },
    {
        link: "https://www.youtube.com/watch?v=xypzmu5mMPY",
        img: "./assets/image/chart_mrmsc.jpg",
        avata: "./assets/image/song_mrmsc.jpeg",
        song: "Muộn rồi mà sao còn",
        name: "Son Tung M-TP",
        audio: "./assets/audio/muonroimasaocon.flac",
        length: 275
    },
    {
        link: "https://www.youtube.com/watch?v=UqKVL56IJB8",
        img: "./assets/image/chart_clkcn.jpg",
        avata: "./assets/image/song_clkcn.jpg",
        song: "Chỉ là không cùng nhau",
        name: "Tang Phuc, Truong Thao Nhi",
        audio: "./assets/audio/chilakhongcungnhau.flac",
        length: 226
    },
    {
        link: "https://www.youtube.com/watch?v=faSVTByG0LQ",
        img: "./assets/image/chart_tehn.jpg",
        avata: "./assets/image/song_tehn.jpg",
        song: "Thích em hơi nhiều",
        name: "Wren Evans",
        audio: "./assets/audio/thichemhoinhieu.flac",
        length: 171
    },
    {
        link: "https://www.youtube.com/watch?v=qkPgUgkQE4Y",
        img: "./assets/image/chart_devuong.jpg",
        avata: "./assets/image/song_devuong.jpg",
        song: "Đế vương",
        name: "Dinh Dung",
        audio: "./assets/audio/devuong.flac",
        length: 262
    },
    {
        link: "https://www.youtube.com/watch?v=kfw7MYah2n0",
        img: "./assets/image/chart_3107.jpg",
        avata: "./assets/image/song_3107.jpg",
        song: "3107-3",
        name: "W/N, ft.Duongg,Titie",
        audio: "./assets/audio/3107.flac",
        length: 240
    },
    {
        link: "https://www.youtube.com/watch?v=BdPk9ipvczM",
        img: "./assets/image/chart_sgdlq.jpg",
        avata: "./assets/image/song_sgdlq.jpg",
        song: "Sài gòn đau lòng quá",
        name: "Hua Kim Tuyen, Hoang Duyen",
        audio: "./assets/audio/saigondaulongqua.flac",
        length: 308
    },
    {
        link: "https://www.youtube.com/watch?v=Q6ZNsHvspEg",
        img: "./assets/image/chart_gieoque.jpg",
        avata: "./assets/image/song_gieoque.jpg",
        song: "Gieo quẻ",
        name: "Hoang Thuy Linh, Den Vau",
        audio: "./assets/audio/gieoque.flac",
        length: 198
    },
    {
        link: "https://www.youtube.com/watch?v=Orv_t0KgEB8",
        img: "./assets/image/chart_rangkhon.png",
        avata: "./assets/image/song_rangkhon.png",
        song: "Răng khôn",
        name: "Phi Phuong Anh, RIN9",
        audio: "./assets/audio/rangkhon.flac",
        length: 231
    },
    {
        link: "https://www.youtube.com/watch?v=HZi4eJXWZU0",
        img: "./assets/image/chart_rtl.jpg",
        avata: "./assets/image/song_rtl.jpg",
        song: "Rồi tới luôn",
        name: "Nal",
        audio: "./assets/audio/roitoiluon.flac",
        length: 246
    },
    {
        link: "https://www.youtube.com/watch?v=1pquvJRgIMY",
        img: "./assets/image/chart_aino.jpg",
        avata: "./assets/image/song_aino.jpg",
        song: "Ái nộ",
        name: " Masew, Khoi Vu",
        audio: "./assets/audio/aino.flac",
        length: 232
    },
    {
        link: "https://www.youtube.com/watch?v=Ki0LCD-IMXg",
        img: "./assets/image/chart_cqtl.jpg",
        avata: "./assets/image/song_cqtl.jpg",
        song: "Chim quý trong lồng",
        name: "K-ICM, Van Mai Huong",
        audio: "./assets/audio/chimquytronglong.flac",
        length: 343
    },
    {
        link: "https://www.youtube.com/watch?v=Ws-QlpSltr8",
        img: "./assets/image/chart_trontim.jpg",
        avata: "./assets/image/song_trontim.jpg",
        song: "Trốn tìm",
        name: "DEN, MTV band",
        audio: "./assets/audio/trontim.flac",
        length: 248
    },
    {
        link: "https://www.youtube.com/watch?v=d44UTUSTYKU",
        img: "./assets/image/chart_theplayah.jpg",
        avata: "./assets/image/song_theplayah.jpg",
        song: "The playah",
        name: "Soobin, Slim V",
        audio: "./assets/audio/theplayah.flac",
        length: 449
    },
    {
        link: "https://www.youtube.com/watch?v=2YllmPaKhkY",
        img: "./assets/image/chart_hcvn.jpg",
        avata: "./assets/image/song_hcvn.jpg",
        song: "Hạ còn vương nắng",
        name: "DATKAA x KIDO",
        audio: "./assets/audio/haconvuongnang.flac",
        length: 285
    },
    {
        link: "https://www.youtube.com/watch?v=GMyF41IxReo",
        img: "./assets/image/chart_khuemoclan.jpg",
        avata: "./assets/image/song_khuemoclan.jpg",
        song: "Khuê mộc lang",
        name: "Huong Ly, Jombie",
        audio: "./assets/audio/khuemoclang.flac",
        length: 205
    },
    {   
        link: "https://www.youtube.com/watch?v=R3trO4a49go",
        img: "./assets/image/chart_thucgiac.jpg",
        avata: "./assets/image/song_thucgiac.jpg",
        song: "Thức giấc",
        name: "Da LAB",
        audio: "./assets/audio/thucgiac.flac",
        length: 269
    },
    {
        link: "https://www.youtube.com/watch?v=n6Pnzi6r9NU",
        img: "./assets/image/chart_bqmcd.jpg",
        avata: "./assets/image/song_bqmcd.jpg",
        song: "Bước qua mùa cô đơn",
        name: "Vu",
        audio: "./assets/audio/buocquamuacodon.flac",
        length: 278
    },
    {
        link: "https://www.youtube.com/watch?v=Zzn9-ATB9aU",
        img: "./assets/image/chart_nangtho.jpeg",
        avata: "./assets/image/song_nangtho.jpeg",
        song: "Nàng thơ",
        name: "Hoang Dung",
        audio: "./assets/audio/nangtho.flac",
        length: 254
    },
    {
        link: "https://www.youtube.com/watch?v=J7eYhM6wXPo",
        img: "./assets/image/chart_anthan.jpg",
        avata: "./assets/image/song_anthan.jpg",
        song: "An thần",
        name: "Low G, Thang",
        audio: "./assets/audio/anthan.flac",
        length: 174
    },
    {
        link: "https://www.youtube.com/watch?v=LZN4I3K8SC0",
        img: "./assets/image/chart_cuchillthoi.jpg",
        avata: "./assets/image/song_cuchillthoi.jpg",
        song: "Cứ chill thôi",
        name: "Chillies, Suni Ha Linh",
        audio: "./assets/audio/cuchillthoi.flac",
        length: 270
    },
    {
        link: "https://www.youtube.com/watch?v=N4a9Db9_ijc",
        img: "./assets/image/chart_freakysquad.jpg",
        avata: "./assets/image/song_freakysquad.jpg",
        song: "Freaky squad",
        name: "SpaceSpeakers",
        audio: "./assets/audio/freakysquad.flac",
        length: 196
    },
    {
        link: "https://www.youtube.com/watch?v=dZ0ryALfs3Y",
        img: "./assets/image/chart_gnkol.jpg",
        avata: "./assets/image/song_gnkol.jpg",
        song: "Gặp nhưng không ở lại",
        name: "Hien Ho, Vuong Anh Tu",
        audio: "./assets/audio/gapnhungkhongolai.flac",
        length: 276
    },
    {
        link: "https://www.youtube.com/watch?v=EBpp2VTSI2Q",
        img: "./assets/image/chart_ydkqtcvkva.jpg",
        avata: "./assets/image/song_ydkqtcvkva.jpg",
        song: "yêu đương khó quá thì Chạy Về Khóc Với Anh",
        name: "Erik",
        audio: "./assets/audio/ydkqtcvkva.flac",
        length: 163
    },
    {
        link: "https://www.youtube.com/watch?v=Bhg-Gw953b0",
        img: "./assets/image/chart_hoahaiduong.jpg",
        avata: "./assets/image/song_hoahaiduong.jpg",
        song: "Hoa hải đường",
        name: "Jack - J97",
        audio: "./assets/audio/hoahaiduong.flac",
        length: 229
    },
    {
        link: "https://www.youtube.com/watch?v=jgZkrA8E5do",
        img: "./assets/image/chart_bctb.jpg",
        avata: "./assets/image/song_bctb.jpg",
        song: "Bigcityboi",
        name: "Binz",
        audio: "./assets/audio/bigcityboi.flac",
        length: 201
    },
    {
        link: "https://www.youtube.com/watch?v=6t-MjBazs3o",
        img: "./assets/image/chart_ccyld.jpg",
        avata: "./assets/image/song_ccyld.jpg",
        song: "Có chắc yêu là đây",
        name: "Son Tung M-TP",
        audio: "./assets/audio/cochacyeuladay.mp3",
        length: 202
    },
    {
        link: "https://www.youtube.com/watch?v=iwGuiSnr2Qc",
        img: "./assets/image/chart_ekscts.png",
        avata: "./assets/image/song_ekscts.png",
        song: "Em không sai chúng ta sai",
        name: "Erik",
        audio: "./assets/audio/ekscts.mp3",
        length: 291
    },
    {
        link: "https://www.youtube.com/watch?v=ayJY9ieBuEU",
        img: "./assets/image/chart_ktcnsk.jpg",
        avata: "./assets/image/song_ktcnsk.jpg",
        song: "Không thể cùng nhau suốt kiếp",
        name: "Hoa Minzy, Mr.Siro",
        audio: "./assets/audio/ktcnsk.mp3",
        length: 300
    },
    {
        link: "https://www.youtube.com/watch?v=BtulL3oArQw",
        img: "./assets/image/chart_namnguemru.jpg",
        avata: "./assets/image/song_namnguemru.jpg",
        song: "Ghen cô vy",
        name: "Khac Hung, Min, Erik",
        audio: "./assets/audio/ghencovy.mp3",
        length: 189
    },
    {
        link: "https://www.youtube.com/watch?v=__kGJZ-kPno",
        img: "./assets/image/chart_hcy.jpg",
        avata: "./assets/image/song_hcy.jpg",
        song: "Hơn cả yêu",
        name: "Duc Phuc",
        audio: "./assets/audio/honcayeu.mp3",
        length: 256
    },
    {
        link: "https://www.youtube.com/watch?v=5d6IiLmjQYg",
        img: "./assets/image/chart_canhba.jpg",
        avata: "./assets/image/song_canhba.jpg",
        song: "Canh ba",
        name: "Nguyen Tran Trung Quan",
        audio: "./assets/audio/canhba.mp3",
        length: 284
    },
    {
        link: "https://www.youtube.com/watch?v=zRdHnseM0PE",
        img: "./assets/image/chart_blackjack.jpg",
        avata: "./assets/image/song_blackjack.jpg",
        song: "BlackJack",
        name: "Soobin, Binz",
        audio: "./assets/audio/blackjack.flac",
        length: 196
    },
    {
        link: "https://www.youtube.com/watch?v=KKc_RMln5UY",
        img: "./assets/image/chart_loinho.jpg",
        avata: "./assets/image/song_loinho.jpg",
        song: "Lối nhỏ",
        name: "Den, Phuong Anh Dao",
        audio: "./assets/audio/loinho.flac",
        length: 252
    },
    {
        link: "https://www.youtube.com/watch?v=c7Yv9izJH5Y",
        img: "./assets/image/chart_cdvd.jpg",
        avata: "./assets/image/song_cdvd.jpg",
        song: "Cung đàn vỡ đôi",
        name: "Chi Pu",
        audio: "./assets/audio/cungdanvodoi.mp3",
        length: 316
    },
    {
        link: "https://www.youtube.com/watch?v=akgNYX8i9Xs",
        img: "./assets/image/chart_chuyenrang.jpg",
        avata: "./assets/image/song_chuyenrang.jpg",
        song: "Chuyện rằng",
        name: "Thinh Suy",
        audio: "./assets/audio/chuyenrang.flac",
        length: 287
    },
    {
        link: "https://www.youtube.com/watch?v=y_6aSG2yfe8",
        img: "./assets/image/chart_hnkm.jpg",
        avata: "./assets/image/song_hnkm.jpg",
        song: "Hoa nở không màu",
        name: "Hoai Lam",
        audio: "./assets/audio/hoanokhongmau.mp3",
        length: 328
    },
    {
        link: "https://www.youtube.com/watch?v=WAxxfzdcNdA",
        img: "./assets/image/chart_ebhtc.jpg",
        avata: "./assets/image/song_ebhtc.jpg",
        song: "Em bỏ hút thuốc chưa",
        name: "Bich Phuong",
        audio: "./assets/audio/embohutthuocchua.mp3",
        length: 216
    },
    {
        link: "https://www.youtube.com/watch?v=EFOBb6pZnuo",
        img: "./assets/image/chart_am.jpg",
        avata: "./assets/image/song_am.jpg",
        song: "Ấm",
        name: "Ha Anh Tuan",
        audio: "./assets/audio/am.mp3",
        length: 228
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/chart_tdd.jpg",
        avata: "./assets/image/song_tdd.jpg",
        song: "Tết đông đầy",
        name: "Kay Tran, Nguyen Khoa",
        audio: "./assets/audio/tetdongday.flac",    
        length: 205
    },
];

// cpop song list
const cpopList=[
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_atctr.jpg",
        avata: "./assets/image/cpop/avata_atctr.jpg",
        song: "Âm thanh của tuyết rơi",
        name: "Luc Ho",
        audio: "./assets/audio/cpop/amthanhcuatuyetroi.flac",    
        length: 311
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_ll.jpg",
        avata: "./assets/image/cpop/avata_ll.jpg",
        song: "Lạnh lẽo",
        name: "Truong Bich Than, Duong Tong Vy",
        audio: "./assets/audio/cpop/lanhleo.flac",    
        length: 333
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_bn.jpg",
        avata: "./assets/image/cpop/avata_bn.jpg",
        song: "Bất nhiễm",
        name: "Mao Bat Dich",
        audio: "./assets/audio/cpop/batnhiem.mp3",    
        length: 325
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_btdsckba.jpg",
        avata: "./assets/image/cpop/avata_btdsckba.jpg",
        song: "Bầu trời đầy sao không bằng anh",
        name: "Ycccc",
        audio: "./assets/audio/cpop/bautroidaysaokhongbanganh.mp3",    
        length: 216
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_dhn.jpg",
        avata: "./assets/image/cpop/avata_dhn.jpg",
        song: "Đào hoa nặc",
        name: "Dang Tu Ky",
        audio: "./assets/audio/cpop/daohoanac.mp3",    
        length: 219
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_nmns.jpg",
        avata: "./assets/image/cpop/avata_nmns.jpg",
        song: "Năm mươi năm sau",
        name: "Tieu A That",
        audio: "./assets/audio/cpop/nammuoinamsau.mp3",    
        length: 283
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_km.jpg",
        avata: "./assets/image/cpop/avata_km.jpg",
        song: "Khách mời",
        name: "Lo Phi Van",
        audio: "./assets/audio/cpop/khachmoi.mp3",    
        length: 270
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_bqng.jpg",
        avata: "./assets/image/cpop/avata_bqng.jpg",
        song: "Bất quá nhân gian",
        name: "Hai Lai A Loc",
        audio: "./assets/audio/cpop/batquanhangian.mp3",    
        length: 250
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_kb.jpg",
        avata: "./assets/image/cpop/avata_kb.jpg",
        song: "Không bằng",
        name: "Tan Hai Thanh",
        audio: "./assets/audio/cpop/khongbang.mp3",    
        length: 180
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_actdrxedk.jpg",
        avata: "./assets/image/cpop/avata_actdrxedk.jpg",
        song: "Anh có thể đừng rời xa em được không",
        name: "Mac Khieu Ty Ty",
        audio: "./assets/audio/cpop/anhcothedungroixaemduockhong.mp3",    
        length: 236
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_hnhv.jpg",
        avata: "./assets/image/cpop/avata_hnhv.jpg",
        song: "Hàng ngàn hàng vạn",
        name: "Tham Hai Ngu Tu Tuong",
        audio: "./assets/audio/cpop/hangnganhangvan.mp3",    
        length: 246
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_mdsh.jpg",
        avata: "./assets/image/cpop/avata_mdsh.jpg",
        song: "Một đường sinh hoa",
        name: "On Dich Tam",
        audio: "./assets/audio/cpop/motduongsinhhoa.mp3",    
        length: 256
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_tab.png",
        avata: "./assets/image/cpop/avata_tab.png",
        song: "Trường An biệt",
        name: "Vuong Ngoc Manh",
        audio: "./assets/audio/cpop/truonganbiet.mp3",    
        length: 246
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_vg.jpg",
        avata: "./assets/image/cpop/avata_vg.jpg",
        song: "Vây giữ",
        name: "Vuong Tinh Van Khong Map",
        audio: "./assets/audio/cpop/vaygiu.mp3",    
        length: 234
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_akmdelmm.jpg",
        avata: "./assets/image/cpop/avata_akmdelmm.jpg",
        song: "Anh không muốn để em lại một mình",
        name: "Vu Nguyet Thien",
        audio: "./assets/audio/cpop/anhkhongmuondeemmotminh.mp3",    
        length: 265
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_atnhle.jpg",
        avata: "./assets/image/cpop/avata_atnhle.jpg",
        song: "Ánh trăng nói hộ lòng em",
        name: "Dang Le Quan",
        audio: "./assets/audio/cpop/anhtrangnoiholongem.mp3",    
        length: 206
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_bnqvncs.jpeg",
        avata: "./assets/image/cpop/avata_bnqvncs.jpeg",
        song: "Bạch nguyệt quang và nốt chu sa",
        name: "Dai Tu",
        audio: "./assets/audio/cpop/bachnguyetquangvanotchusa.mp3",    
        length: 207
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_bkbk.jpg",
        avata: "./assets/image/cpop/avata_bkbk.jpg",
        song: "Biết không, biết không",
        name: "Uc Kha Duy, Ho Ha",
        audio: "./assets/audio/cpop/bietkhongbietkhong.mp3",    
        length: 276
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_ccta.jpg",
        avata: "./assets/image/cpop/avata_ccta.jpg",
        song: "Chầm chậm thích anh",
        name: "Mac Van Uy",
        audio: "./assets/audio/cpop/chamchamthichanh.mp3",    
        length: 221
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_pdvvs.jpg",
        avata: "./assets/image/cpop/avata_pdvvs.jpg",
        song: "Phi điểu và ve sầu",
        name: "Nham Nhien",
        audio: "./assets/audio/cpop/chimbaycungve.flac",    
        length: 296
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_cvqya.jpg",
        avata: "./assets/image/cpop/avata_cvqya.jpg",
        song: "Chỉ vì quá yêu anh",
        name: "Dinh Phu Ni",
        audio: "./assets/audio/cpop/chiviquayeuanh.mp3",    
        length: 247
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_cmdnn.jpg",
        avata: "./assets/image/cpop/avata_cmdnn.jpg",
        song: "Chớp mắt đã ngàn năm",
        name: "S.H.E",
        audio: "./assets/audio/cpop/chopmatdangannam.mp3",    
        length: 269
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_dkn.jpg",
        avata: "./assets/image/cpop/avata_dkn.jpg",
        song: "Đảo không người",
        name: "Nham Nhien",
        audio: "./assets/audio/cpop/daokhongnguoi.mp3",    
        length: 285
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_dhna.jpg",
        avata: "./assets/image/cpop/avata_dhna.jpg",
        song: "Đầu hạ năm ấy",
        name: "Nham Nhien",
        audio: "./assets/audio/cpop/dauhanamay.mp3",    
        length: 310
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_dm.jpg",
        avata: "./assets/image/cpop/avta_dm.jpg",
        song: "Đông miên",
        name: "Tu Nam",
        audio: "./assets/audio/cpop/dongmien.flac",    
        length: 269
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_dt.jpg",
        avata: "./assets/image/cpop/avata_dt.jpg",
        song: "Đồng thoại",
        name: "Quang Luong",
        audio: "./assets/audio/cpop/dongthoai.flac",    
        length: 241
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_dk.jpg",
        avata: "./assets/image/cpop/avata_dk.jpg",
        song: "Dũng Khí",
        name: "Mien Tu",
        audio: "./assets/audio/cpop/dungkhi.mp3",    
        length: 241
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_ecctyc.png",
        avata: "./assets/image/cpop/avata_ecctyc.png",
        song: "Em chỉ có thể yêu chàng",
        name: "Banh Thanh",
        audio: "./assets/audio/cpop/emchicotheyeuchang.mp3",    
        length: 276
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_gg.png",
        avata: "./assets/image/cpop/avata_gg.png",
        song: "Gặp gỡ",
        name: "Ton Yen Tu",
        audio: "./assets/audio/cpop/gapgo.mp3",    
        length: 210
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_ggc.jpg",
        avata: "./assets/image/cpop/avata_ggc.jpg",
        song: "Giấy ghi chú tâm niệm",
        name: "Vuong Han Vu",
        audio: "./assets/audio/cpop/giayghichutamniem.mp3",    
        length: 178
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_gbntgln.jpg",
        avata: "./assets/image/cpop/avata_gbntgln.jpg",
        song: "Giữa biển người ta gặp lại nhau",
        name: "V.A",
        audio: "./assets/audio/cpop/giuabiennguoitagaplainhau.mp3",    
        length: 232
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_htmk.jpg",
        avata: "./assets/image/cpop/avata_htmk.jpg",
        song: "Học tiếng mèo kêu",
        name: "Tieu Phong Phong, Tieu Phan Phan",
        audio: "./assets/audio/cpop/hoctiengmeokeu.flac",    
        length: 209
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_hoi.jpg",
        avata: "./assets/image/cpop/avata_hoi.jpg",
        song: "Hỏi",
        name: "Đuong Co",
        audio: "./assets/audio/cpop/hoi.mp3",    
        length: 292
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_kn.jpg",
        avata: "./assets/image/cpop/avata_kn.jpg",
        song: "Kiêu ngạo",
        name: "Ho Linh",
        audio: "./assets/audio/cpop/kieungao.mp3",    
        length: 244
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_ltedt.jpg",
        avata: "./assets/image/cpop/avata_ltedt.jpg",
        song: "Là tự em đa tình",
        name: "Ho Duong Lam",
        audio: "./assets/audio/cpop/latuemdatinh.mp3",    
        length: 287
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_lhcc.jpg",
        avata: "./assets/image/cpop/avata_lhcc.jpg",
        song: "Luân hồi chi cảnh",
        name: "Critty",
        audio: "./assets/audio/cpop/luanhoichicanh.mp3",    
        length: 251
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_mc.jpg",
        avata: "./assets/image/cpop/avata_mc.jpg",
        song: "Mang chủng",
        name: "Am Khuyet Thi Thinh",
        audio: "./assets/audio/cpop/mangchung.mp3",    
        length: 216
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_mm.jpg",
        avata: "./assets/image/cpop/avata_mm.jpg",
        song: "May mắn",
        name: "Nham Nhien",
        audio: "./assets/audio/cpop/mayman.mp3",    
        length: 322
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_mmbn.jpg",
        avata: "./assets/image/cpop/avata_mmbn.jpg",
        song: "May mắn bé nhỏ",
        name: "Hebe (S.H.E)",
        audio: "./assets/audio/cpop/maymanbenho.mp3",    
        length: 265
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_mph.jpg",
        avata: "./assets/image/cpop/avata_mph.jpg",
        song: "Mộng phồn hoa",
        name: "Hoang Linh",
        audio: "./assets/audio/cpop/mongphonhoa.mp3",    
        length: 306
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_mtkn.jpg",
        avata: "./assets/image/cpop/avata_mtkn.jpg",
        song: "Một triệu khả năng",
        name: "Christine Welch",
        audio: "./assets/audio/cpop/mottrieukhanang.mp3",    
        length: 275
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_mht.jpg",
        avata: "./assets/image/cpop/avata_mht.jpg",
        song: "Mưa hồng trần",
        name: "Nguy Tan Vu",
        audio: "./assets/audio/cpop/muahongtran.mp3",    
        length: 260
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_nbdturl.jpg",
        avata: "./assets/image/cpop/avata_nbdturl.jpg",
        song: "Người bạn đã từng yêu rất lâu",
        name: "Dien Phuc Chan",
        audio: "./assets/audio/cpop/nguoibandatungyeuratlau.mp3",    
        length: 268
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_nkv.jpg",
        avata: "./assets/image/avata_nkv.jpg",
        song: "Người kế vị",
        name: "Nham Nhien",
        audio: "./assets/audio/cpop/nguoikevi.mp3",    
        length: 245
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_ntdas.jpg",
        avata: "./assets/image/avata_ntdas.jpg",
        song: "Người theo đuổi ánh sáng",
        name: "Tu Vi",
        audio: "./assets/audio/cpop/nguoitheoduoianhsang.mp3",    
        length: 224
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_nt.jpg",
        avata: "./assets/image/cpop/avata_nt.jpg",
        song: "Nhìn thấu",
        name: "Nham Nhien",
        audio: "./assets/audio/cpop/nhinthau.mp3",    
        length: 261
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_nnta.jpg",
        avata: "./assets/image/cpop/avata_nnta.jpg",
        song: "Những năm tháng ấy",
        name: "Ho Ha",
        audio: "./assets/audio/cpop/nhungnamthangay.mp3",    
        length: 373
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_pcl.jpg",
        avata: "./assets/image/cpop/avata_pcl.jpg",
        song: "Phong chi luyến",
        name: "Quan Thi Man",
        audio: "./assets/audio/cpop/phongchiluyen.mp3",    
        length: 286
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_pst.png",
        avata: "./assets/image/cpop/avata_pst.png",
        song: "Phù sinh từ",
        name: "V.A",
        audio: "./assets/audio/cpop/phusinhtu.mp3",    
        length: 298
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_qcmx.jpg",
        avata: "./assets/image/cpop/avata_qcmx.jpg",
        song: "Quả chanh màu xanh",
        name: "Ly Van Huong, Son Truc Mui Hiep",
        audio: "./assets/audio/cpop/quachanhmauxanh.mp3",    
        length: 200
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_qb.jpg",
        avata: "./assets/image/cpop/avata_qb.jpg",
        song: "Quẻ bói",
        name: "Thoi Tu Cach",
        audio: "./assets/audio/cpop/queboi.mp3",    
        length: 214
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_snglda.jpg",
        avata: "./assets/image/cpop/avata_snglda.jpg",
        song: "Sau này gặp lại được anh",
        name: "V.A",
        audio: "./assets/audio/cpop/saunaygaplaiduocanh.mp3",    
        length: 249
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_tt.jpg",
        avata: "./assets/image/cpop/avata_tt.jpg",
        song: "Tâm tình",
        name: "Trieu Le Dinh, Tran Hieu",
        audio: "./assets/audio/cpop/tamtinh.mp3",    
        length: 311
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_tttantcl.jpg",
        avata: "./assets/image/cpop/avata_tttantcl.jpg",
        song: "Ta tên Trường An, ngươi tên Cố Lý",
        name: "Doan Tich Mien, Tieu Dien Am Nhac Xa",
        audio: "./assets/audio/cpop/tatentruongan.mp3",    
        length: 209
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_tvn.jpg",
        avata: "./assets/image/cpop/avata_tvn.jpg",
        song: "Ta và nàng",
        name: "Tran Hieu, Tran Nghien Hy",
        audio: "./assets/audio/cpop/tavangang.mp3",    
        length: 285
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_ttct.jpg",
        avata: "./assets/image/cpop/avata_ttct.jpg",
        song: "Tay trái chỉ trăng",
        name: "Tat Dinh Dinh",
        audio: "./assets/audio/cpop/taytraichitrang.mp3",    
        length: 230
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_thanthoai.jpeg",
        avata: "./assets/image/cpop/avata_thanthoai.jpeg",
        song: "Thần thoại",
        name: "Thanh Long, Kim Hee Sun",
        audio: "./assets/audio/cpop/thanthoai.mp3",    
        length: 290
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_ttts.jpg",
        avata: "./assets/image/cpop/avata_ttts.jpg",
        song: "Thần thoại trăng sao",
        name: "Kim Sa",
        audio: "./assets/audio/cpop/thanthoaitrangsao.flac",    
        length: 251
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_tlb.jpg",
        avata: "./assets/image/cpop/avata_tlb.jpg",
        song: "Thương ly biệt",
        name: "Nguy Tan Vu",
        audio: "./assets/audio/cpop/thuonglybiet.mp3",    
        length: 241
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_tdk.jpg",
        avata: "./assets/image/cpop/avata_tdk.jpg",
        song: "Tiêu dao khúc",
        name: "Hoac Kien Hoa",
        audio: "./assets/audio/cpop/tieudaokhuc.mp3",    
        length: 265
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_tydn.jpg",
        avata: "./assets/image/cpop/avata_tydn.jpg",
        song: "Tình yêu duy nhất",
        name: "Tiet Khai Ky, Hinson Chu",
        audio: "./assets/audio/cpop/tinhyeuduynhat.mp3",    
        length: 207
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_trantrong.jpeg",
        avata: "./assets/image/cpop/avata_trantrong.jpeg",
        song: "Trân trọng",
        name: "Ly Vu Xuan",
        audio: "./assets/audio/cpop/trantrong.mp3",    
        length: 300
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_ttkd.jpg",
        avata: "./assets/image/cpop/avata_ttkd.jpg",
        song: "Tương tư không đến",
        name: "Mao Trach Thieu",
        audio: "./assets/audio/cpop/tuongtukhongden.mp3",    
        length: 185
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_vtk.jpg",
        avata: "./assets/image/cpop/avata_vtk.jpg",
        song: "Vịnh Trăng Khuyết",
        name: "Zai'en Pan",
        audio: "./assets/audio/cpop/vinhtrangkhuyet.mp3",    
        length: 195
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_vyt.jpg",
        avata: "./assets/image/cpop/avata_vyt.jpg",
        song: "Vô ý thức",
        name: "Tiet Khai Ky, V.A",
        audio: "./assets/audio/cpop/voythuc.mp3",    
        length: 221
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/cpop/img_ygshymn.jpg",
        avata: "./assets/image/cpop/avata_ygshymn.jpg",
        song: "Yêu giang sơn càng yêu mỹ nhân",
        name: "Tieu A Phong",
        audio: "./assets/audio/cpop/yeugiangsoncangyeumynhan.mp3",    
        length: 236
    },
];

// lunar new year song list
const lunarnewyearList=[
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_acemx.jpg",
        avata: "./assets/image/lunarnewyear/avata_acemx.jpg",
        song: "Anh cho em mùa xuân",
        name: "Hoang Thuc Linh",
        audio: "./assets/audio/lunarnewyear/acemx.mp3",    
        length: 229
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_als.jpg",
        avata: "./assets/image/lunarnewyear/avata_als.jpg",
        song: "Auld Lang Syne",
        name: "Boney M",
        audio: "./assets/audio/lunarnewyear/als.mp3",    
        length: 154
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_bglc.jpg",
        avata: "./assets/image/lunarnewyear/avata_bglc.jpg",
        song: "Bao giờ lấy chồng",
        name: "Bich Phuong",
        audio: "./assets/audio/lunarnewyear/bglc.mp3",    
        length: 224
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_ccdn.jpg",
        avata: "./assets/image/lunarnewyear/avata_ccdn.jpg",
        song: "Câu chuyện đầu năm",
        name: "Dan Nguyen",
        audio: "./assets/audio/lunarnewyear/ccdn.mp3",    
        length: 279
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_cx.jpg",
        avata: "./assets/image/lunarnewyear/avata_cx.jpg",
        song: "Chiều xuân",
        name: "Hong Ngoc",
        audio: "./assets/audio/lunarnewyear/cx.mp3",    
        length: 244
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_cmnm.jpg",
        avata: "./assets/image/lunarnewyear/avata_cmnm.jpg",
        song: "Chúc mừng năm mới",
        name: "Ho Quang Hieu",
        audio: "./assets/audio/lunarnewyear/cmnm.mp3",    
        length: 208
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_ccbq.jpg",
        avata: "./assets/image/lunarnewyear/avata_ccbq.jpg",
        song: "Chuyện cũ bỏ qua",
        name: "Bich Phuong",
        audio: "./assets/audio/lunarnewyear/ccbq.mp3",    
        length: 206
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_cbx.jpg",
        avata: "./assets/image/lunarnewyear/avata_cbx.jpg",
        song: "Con bướm xuân",
        name: "Ho Quang Hieu",
        audio: "./assets/audio/lunarnewyear/cbx.mp3",    
        length: 224
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_csvst.jpg",
        avata: "./assets/image/lunarnewyear/avata_csvst.jpg",
        song: "Con sẽ về sớm thôi",
        name: "Nana Liu",
        audio: "./assets/audio/lunarnewyear/csvst.mp3",    
        length: 280
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_ddtv.jpg",
        avata: "./assets/image/lunarnewyear/avata_ddtv.jpg",
        song: "Đi để trở về",
        name: "Soobin Hoang Son",
        audio: "./assets/audio/lunarnewyear/ddtv.mp3",    
        length: 208
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_dkmx.jpg",
        avata: "./assets/image/lunarnewyear/avata_dkmx.jpg",
        song: "Điệp khúc mùa xuân",
        name: "Dam Vinh Hung",
        audio: "./assets/audio/lunarnewyear/dkmx.mp3",    
        length: 206
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_ddsx.jpg",
        avata: "./assets/image/lunarnewyear/avata_ddsx.jpg",
        song: "Dịu dàng sắc xuân",
        name: "Ngoc Linh",
        audio: "./assets/audio/lunarnewyear/ddsx.mp3",    
        length: 221
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_dxc.jpg",
        avata: "./assets/image/lunarnewyear/avata_dxc.jpg",
        song: "Đoàn xuân ca",
        name: "Nhu Quynh",
        audio: "./assets/audio/lunarnewyear/dxc.mp3",    
        length: 252
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_dx.jpg",
        avata: "./assets/image/lunarnewyear/avata_dx.jpg",
        song: "Đón xuân",
        name: "Nhu Quynh",
        audio: "./assets/audio/lunarnewyear/dx.mp3",    
        length: 251
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_hpny.jpg",
        avata: "./assets/image/lunarnewyear/avata_hpny.jpg",
        song: "Happy new year",
        name: "ABBA",
        audio: "./assets/audio/lunarnewyear/hnw.mp3",    
        length: 263
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_hoacomuaxuan.jpg",
        avata: "./assets/image/lunarnewyear/avata_hoacomuaxuan.jpg",
        song: "Hoa cỏ mùa xuân",
        name: "Thuy Tien",
        audio: "./assets/audio/lunarnewyear/hcmx.mp3",    
        length: 214
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_htmx.jpg",
        avata: "./assets/image/lunarnewyear/avata_htmx.jpg",
        song: "Hơi thở mùa xuân",
        name: "Anh Tho",
        audio: "./assets/audio/lunarnewyear/htmx.mp3",    
        length: 323
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_kgt.jpg",
        avata: "./assets/image/lunarnewyear/avata_kgt.jpg",
        song: "Khúc giao thừa",
        name: "My Linh, Minh Quan",
        audio: "./assets/audio/lunarnewyear/kgt.mp3",    
        length: 264
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_lgph.jpg",
        avata: "./assets/image/lunarnewyear/avata_lgph.jpg",
        song: "Làm gì phải hốt",
        name: "JustaTee, Hoang Thuy Linh, Den",
        audio: "./assets/audio/lunarnewyear/lgph.mp3",    
        length: 189
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_lnmxv.jpg",
        avata: "./assets/image/lunarnewyear/avata_lnmxv.jpg",
        song: "Lắng nghe mùa xuân về",
        name: "Hong Nhung, Bang Kieu",
        audio: "./assets/audio/lunarnewyear/lnmxv.mp3",    
        length: 327
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_mcmtv.jpg",
        avata: "./assets/image/lunarnewyear/avata_mcmtv.jpg",
        song: "Mẹ chỉ mong tết về",
        name: "Ha Anh Tuan",
        audio: "./assets/audio/lunarnewyear/mcmtv.mp3",    
        length: 244
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_mcx.jpg",
        avata: "./assets/image/lunarnewyear/avata_mcx.jpg",
        song: "Mộng chiều xuân",
        name: "Huong Lan",
        audio: "./assets/audio/lunarnewyear/mcx.mp3",    
        length: 255
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_mnmba.jpg",
        avata: "./assets/image/lunarnewyear/avata_mnmba.jpg",
        song: "Một năm mới bình an",
        name: "Son Tung M-TP",
        audio: "./assets/audio/lunarnewyear/mnmba.mp3",    
        length: 247
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_mhtl.jpg",
        avata: "./assets/image/lunarnewyear/avata_mhtl.jpg",
        song: "Mùa hoa trở lại",
        name: "Khanh Linh",
        audio: "./assets/audio/lunarnewyear/mhtl.mp3",    
        length: 321
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_mxdt.jpg",
        avata: "./assets/image/lunarnewyear/avata_mxdt.jpg",
        song: "Mùa xuân đầu tiên",
        name: "Thanh Thuy",
        audio: "./assets/audio/lunarnewyear/mxdt.mp3",    
        length: 357
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_mxo.jpg",
        avata: "./assets/image/lunarnewyear/avata_mxo.jpg",
        song: "Mùa xuân ơi",
        name: "May Trang",
        audio: "./assets/audio/lunarnewyear/mxo.mp3",    
        length: 186
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_mxyt.jpg",
        avata: "./assets/image/lunarnewyear/avata_mxyt.jpg",
        song: "Mùa xuân yêu thương",
        name: "Ho Ngoc Ha",
        audio: "./assets/audio/lunarnewyear/mxyt.mp3",    
        length: 204
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_nqdlg.jpg",
        avata: "./assets/image/lunarnewyear/avata_nqdlg.jpg",
        song: "Năm qua đã làm gì",
        name: "Noo Phuoc Thinh",
        audio: "./assets/audio/lunarnewyear/nqdlg.mp3",    
        length: 235
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_nccx.jpg",
        avata: "./assets/image/lunarnewyear/avata_nccx.jpg",
        song: "Nắng có còn xuân",
        name: "Le Quyen",
        audio: "./assets/audio/lunarnewyear/nccx.mp3",    
        length: 266
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_ntqe.jpg",
        avata: "./assets/image/lunarnewyear/avata_ntqe.jpg",
        song: "Ngày tết quê em",
        name: "May Trang",
        audio: "./assets/audio/lunarnewyear/ntqe.mp3",    
        length: 240
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_nxlpsv.jpg",
        avata: "./assets/image/lunarnewyear/avata_nxlpsv.jpg",
        song: "Ngày xuân long phụng sum vầy",
        name: "Ung Hoang Phuc, H.A.T, Anh Kiet",
        audio: "./assets/audio/lunarnewyear/nxlpsv.mp3",    
        length: 248
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_nhmx.png",
        avata: "./assets/image/lunarnewyear/avata_nhmx.png",
        song: "Như hoa mùa xuân",
        name: "Ho Ngoc Ha, Thuy Tien",
        audio: "./assets/audio/lunarnewyear/nhmx.mp3",    
        length: 232
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_pgtll.jpg",
        avata: "./assets/image/lunarnewyear/avata_pgtll.jpg",
        song: "Phút giao thừa lặng lẽ",
        name: "Thuy Chi, Tang Nhat Tue",
        audio: "./assets/audio/lunarnewyear/pgtll.mp3",    
        length: 336
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_tdr.jpg",
        avata: "./assets/image/lunarnewyear/avata_tdr.jpg",
        song: "Tết đến rồi",
        name: "Tam ca con gai",
        audio: "./assets/audio/lunarnewyear/tdr.mp3",    
        length: 232
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_tlt.jpg",
        avata: "./assets/image/lunarnewyear/avata_tlt.jpg",
        song: "Tết là tết",
        name: "Thuy Khanh",
        audio: "./assets/audio/lunarnewyear/tlt.mp3",    
        length: 168
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_tncv.jpg",
        avata: "./assets/image/lunarnewyear/avata_tncv.jpg",
        song: "Tết này con về",
        name: "Issac Thai, Binz",
        audio: "./assets/audio/lunarnewyear/tncsv.mp3",    
        length: 295
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_tnd.jpg",
        avata: "./assets/image/lunarnewyear/avata_tnd.jpg",
        song: "Tết nguyên đán",
        name: "V.A",
        audio: "./assets/audio/lunarnewyear/tnd.mp3",    
        length: 266
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_tnm.jpg",
        avata: "./assets/image/lunarnewyear/avata_tnm.jpg",
        song: "Tết nhà mình",
        name: "Hoa Minzy, Lang LD",
        audio: "./assets/audio/lunarnewyear/tnm.mp3",    
        length: 235
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_ts.jpg",
        avata: "./assets/image/lunarnewyear/avata_ts.jpg",
        song: "Tết sang",
        name: "Nam Em",
        audio: "./assets/audio/lunarnewyear/ts.mp3",    
        length: 238
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_tetxa.jpg",
        avata: "./assets/image/lunarnewyear/avata_tetxa.jpg",
        song: "Tết xa",
        name: "Bao Uyen",
        audio: "./assets/audio/lunarnewyear/tx.mp3",    
        length: 274
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_tx.jpg",
        avata: "./assets/image/lunarnewyear/avata_tx.jpg",
        song: "Tết xuân",
        name: "Luu Huong Giang, Ho Hoai Anh",
        audio: "./assets/audio/lunarnewyear/tetxuan.mp3",    
        length: 318
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_ttd.jpg",
        avata: "./assets/image/lunarnewyear/avata_ttd.jpg",
        song: "Thần tài đến",
        name: "Luong Bich Huu",
        audio: "./assets/audio/lunarnewyear/ttd.mp3",    
        length: 238
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_ttmx.jpg",
        avata: "./assets/image/lunarnewyear/avata_ttmx.jpg",
        song: "Thì thầm mùa xuân",
        name: "My Linh",
        audio: "./assets/audio/lunarnewyear/ttmx.mp3",    
        length: 281
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_vqn.jpg",
        avata: "./assets/image/lunarnewyear/avata_vqn.jpg",
        song: "Vị quê nhà",
        name: "Noo Phuoc Thinh, Lou Hoang",
        audio: "./assets/audio/lunarnewyear/vqn.mp3",    
        length: 257
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_xdv.jpg",
        avata: "./assets/image/lunarnewyear/avata_xdv.jpg",
        song: "Xuân đã về",
        name: "Hop ca",
        audio: "./assets/audio/lunarnewyear/xdv.mp3",    
        length: 303
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_xhm.jpg",
        avata: "./assets/image/lunarnewyear/avata_xhm.jpg",
        song: "Xuân họp mặt",
        name: "Hợp ca",
        audio: "./assets/audio/lunarnewyear/xhm.flac",    
        length: 287
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/lunarnewyear/img_xkm.png",
        avata: "./assets/image/lunarnewyear/avata_xkm.png",
        song: "Xuân không màu",
        name: "Miu Lê",
        audio: "./assets/audio/lunarnewyear/xkm.mp3",    
        length: 340
    },
    {
        link: "https://www.youtube.com/watch?v=vTJdVE_gjI0",
        img: "./assets/image/chart_divenha.jpg",
        avata: "./assets/image/song_divenha.jpg",
        song: "Đi về nhà",
        name: "Den, JustaTee",
        audio: "./assets/audio/divenha.flac",
        length: 200
    },
    {
        link: "https://www.youtube.com/watch?v=gOtfJ151ue4",
        img: "./assets/image/chart_tdd.jpg",
        avata: "./assets/image/song_tdd.jpg",
        song: "Tết đông đầy",
        name: "Kay Tran, Nguyen Khoa",
        audio: "./assets/audio/tetdongday.flac",    
        length: 205
    },
];

var countChart=0;
var indexChart=[];
// Random with probability
while(countChart<10){
    var numberRandom=Math.floor(Math.random() * 100);
    numberRandom++;
    if (numberRandom<=15) {
        if(indexChart.includes(0)==false) {
            indexChart.push(0);
            countChart++;
        } 
    } else if (numberRandom>15 && numberRandom<=30) {
        var fourRandom=Math.floor(Math.random() * 4);
        fourRandom+=1;
        if (indexChart.includes(fourRandom)==false) {
            indexChart.push(fourRandom);
            countChart++;
        }
    } else if (numberRandom>30 && numberRandom<=50) {
        var tenRandom=Math.floor(Math.random()*10);
        tenRandom+=5;
        if (indexChart.includes(tenRandom)==false) {
            indexChart.push(tenRandom);
            countChart++;
        } 
    } else {
        var oddRandom=Math.floor(Math.random()*(listChart.length-15));
        oddRandom+=15;
        if (indexChart.includes(oddRandom)==false) {
            indexChart.push(oddRandom);
            countChart++;
        } 
    }
}

// Give data into chart
for (var i=0;i<10;i++){
    chartItem[i].innerHTML=`<a href=${listChart[indexChart[i]].link} class="chart-btn" target="_blank">
    <img src=${listChart[indexChart[i]].img} alt="" class="chart-photo">
    <div class="chart-decoration"></div>`;
    var tempChart=document.querySelectorAll('.chart-decoration')[i];
    tempChart.innerHTML=`<h3 class="chart-decoration-song">${listChart[indexChart[i]].song}</h3>
    <p class="chart-decoration-singer">${listChart[indexChart[i]].name}</p>`;
}

// Export song lists
export {listChart,cpopList,lunarnewyearList};