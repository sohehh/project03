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
        

        
    });


});