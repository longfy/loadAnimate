/*	* Copyright (c) 2015 longfeiyang; version:1.02 
 *	method:	
 *	$(".demo").loadAnimate({
 *		type:"bottom",  //(string: 动画名称)
 *		delay:"0s",     //(string: 等待时间)
 *		LOADNUM:1       //number:(动画是否循环加载，默认0只加载一次，1为循环加载)
 *	});
 */
(function ($) {
    $.fn.loadAnimate = function (options) {
        var opts = $.extend({}, $.fn.loadAnimate.defaults, options);
        return this.each(function () {
            var $this = $(this);
            var w_h = $(window).height(); //获取窗口高度
            var o_h = $this.height();
            var obj_h = $this.offset().top; //获取元素离顶部高度
            if (obj_h < w_h) {
                $this.addClass(opts.type).addClass("animated").css({
                    "animation-delay": opts.delay
                });;
            }
            $(window).scroll(function () {
                var scroll_h = $(window).scrollTop(); //获取滚动条滚动高度
                //console.log(scroll_h+'\n'+obj_h+'\n'+w_h+'\n'+o_h)			
                if (scroll_h > (obj_h - w_h) && scroll_h < (obj_h + o_h)) {
                    $this.addClass(opts.type).addClass("animated").css({
                        "animation-delay": opts.delay
                    });
                } else {
                    if (opts.LOADNUM != 0) {
                        $this.removeClass(opts.type);
                        $this.removeClass("animated");
                    }
                }
            });


        });
    };
    $.fn.loadAnimate.defaults = {
        type: "fadeIn",
        delay: "0s",
        LOADNUM: 0
    }
})(jQuery);