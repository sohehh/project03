$(function(){
    var $section = $('.parallax>div');
    var $sectionInfo=[];
    var $sectionInfo2=[];
    var $imgname=$('.sns>li');
    var $imgInfo=[];
    // $imgname.each(function(){
    //     var $this=$(this);
    //     $imgInfo.push($this.children().children().attr("src"));
    // });
    // console.log($imgInfo);

    $section.each(function(){
        var $this=$(this);
        $sectionInfo.push($this.offset().top);
    });
    //console.log($sectionInfo);
    
    $section.css({position:'fixed'});
    $(window).scroll(function(){
        var sct = $(this).scrollTop();
        $section.each(function(idx){
            var $this=$(this);
            var $newtop =-1*sct+$sectionInfo[idx];

            if(sct>$sectionInfo[idx]){
                $newtop = $newtop * 0.5;
            }
            // if($sectionInfo[idx]<=100){
            //     console.log($sectionInfo);
            //     $('.gnb_list>li:nth-child('+(idx+1)+')>a').css('color','#00df2f');
            // }else{
            //     $('.gnb_list>li:nth-child('+(idx+1)+')>a').css('color','black');

            // }
            $this.css({top:$newtop});
            //console.log($newtop);
            /* console.log($this.eq(idx).attr('top'));
            if($this.offset().top>=80 && $this.offset().top<=500){
                $('.gnb_list li:nth-child(1) a').css('color','#2c6757');

            }else if($this.offset().top>=969 && $this.offset().top<=1534){
                $('.gnb_list li:nth-child(2) a').css('color','#2c6757');
                $('.gnb_list li:nth-child(1) a').css('color','black');

            }else{

            } */
            /* if($section.top()==80){
                console.log($section);
                $('.gnb_list li a').css('color','black');
                $('.gnb_list li:nth-child('+(idx+1)+')a').css('color','pink');
            } */
            

            
        });
        //console.log($('.right-content').offset().top);
        if($('.right-content').offset().top<sct){
            $('.sns li:nth-child(1) a img').attr("src","../image/sns_instagram_b.png").fadeIn('slow');
            $('.sns li:nth-child(2) a img').attr("src","../image/sns_twitter_b.png");
            $('.sns li:nth-child(3) a img').attr("src","../image/sns_facebook_b.png");
            $('.sns li:nth-child(4) a img').attr("src","../image/sns_youtube_b.png");
            $('.sns li:nth-child(5) a img').attr("src","../image/sns_fans_b.png");
            $('.sns li:nth-child(6) a img').attr("src","../image/sns_edm_b.png");

            
        }else{
            $('.sns li:nth-child(1) a img').attr("src","../image/sns_instagram.png").fadeIn('slow');
            $('.sns li:nth-child(2) a img').attr("src","../image/sns_twitter.png");
            $('.sns li:nth-child(3) a img').attr("src","../image/sns_facebook.png");
            $('.sns li:nth-child(4) a img').attr("src","../image/sns_youtube.png");
            $('.sns li:nth-child(5) a img').attr("src","../image/sns_fans.png");
            $('.sns li:nth-child(6) a img').attr("src","../image/sns_EDM.png");

        }

        
    });


});