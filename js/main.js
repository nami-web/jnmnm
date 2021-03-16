$(function(){
     
    
    
  

    //fullpage
    $('#fullpage').fullpage({
        anchors:['p1','p2','p3','p4'],
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 960,
        afterLoad: function (anchorLink, index) {

      if(index==1){
          $('.origin_bg').addClass('active','easeInExpo').delay(2000).queue(function(next){
              $(this).removeClass('active');
              next();
          });
          $('.white_bg').addClass('active','easeInExpo').delay(1500).queue(function(next){
              $(this).removeClass('active');
              next();
              
          });
          
               $('.title').addClass('active');
          }     else if(index==2){
                $('.nami').removeClass('active');
            } 
                else if(index==3){
                $('.nami').removeClass('active');
            } 
                else if(index==4){
                $('.nami').addClass('active');
            } 
            
            else{ $('.title').removeClass('active'); } 
           
             
            
            
            
        }
    });



    //swiper  
    var swiper = new Swiper('.swiper1', {
        effect:'fade',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: true,
        keyboard: true,
    });



    
   //팝업갤러리
    var gallery_num=0;
    $('.focus .container ul li').hide();
    $('.gallery ul li').click(function(e){
        e.preventDefault(); 
        gallery_num=$(this).index();
        $('.focus').fadeIn();
        $('.focus .container ul li').each(function(){
            if(gallery_num==$(this).index()){
             $('.focus .container ul li').hide();
                $(this).fadeIn();
            }
        });
    });
    

   //팝업갤러리 안의 swiper 작동
  var swiper1 = new Swiper('.focus1', {
        observer: true,
        observeParents: true,
        loop:true,
        autoplay:true,
        navigation: {
        nextEl: '.next1',
        prevEl: '.prev1',
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    
    var swiper2 = new Swiper('.focus2', {
        observer: true,
        observeParents: true,
        loop:true,
        autoplay:true,
        navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    
    
    var swiper3 = new Swiper('.focus3', {
        observer: true,
        observeParents: true,
        loop:true,
        autoplay:true,
        navigation: {
        nextEl: '.next3',
        prevEl: '.prev3',
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    
    
    
    var swiper4 = new Swiper('.focus4', {
        observer: true,
        observeParents: true,
        loop:true,
        autoplay:true,
        navigation: {
        nextEl: '.next4',
        prevEl: '.prev4',
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    
    
    var swiper5 = new Swiper('.focus5', {
        observer: true,
        observeParents: true,
        loop:true,
        autoplay:true,
        navigation: {
        nextEl: '.next5',
        prevEl: '.prev5',
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    
    var swiper6 = new Swiper('.focus6', {
        observer: true,
        observeParents: true,
        loop:true,
        autoplay:true,
        navigation: {
        nextEl: '.next6',
        prevEl: '.prev6',
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    
    
    var swiper7 = new Swiper('.focus7', {
        observer: true,
        observeParents: true,
        loop:true,
        autoplay:true,
        navigation: {
        nextEl: '.next7',
        prevEl: '.prev7',
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    
    
    
    var swiper8 = new Swiper('.focus8', {
        observer: true,
        observeParents: true,
        loop:true,
        autoplay:true,
        navigation: {
        nextEl: '.next8',
        prevEl: '.prev8',
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    
    
    
    
    
    
    
    
    $('.popup_close').click(function(e){
        e.preventDefault();
        $('.focus').hide();
    });
    
    
    
    
    
    
    
    
    

    
});