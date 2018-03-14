$(document).ready(function(){ 

    $("#lecture5").hide();
	$("#lecture1 .layer-box").on("mouseover", function () {
        if($(".text-box").css('right') == '0px') {
            $(".layer-box").css({
                'left' : '-60%',
                '-ms-transform' : 'rotate(-10deg)',
                '-webkit-transform' : 'rotate(-10deg)',
                'transform' : 'rotate(-10deg)',
            });
            $(".text-box").css({
                'right' : 'unset'
            });
            $(".lecture-image").css('transform','rotateY(0deg)');
        }
        else {
            $(".layer-box").css({
                'left' : '60%',
                '-ms-transform' : 'rotate(10deg)',
                '-webkit-transform' : 'rotate(10deg)',
                'transform' : 'rotate(10deg)',
            });
            $(".text-box").css({
                'right' : '0px'
            });
            $(".lecture-image").css('transform','rotateY(180deg)');
        }
	});
	$("#lecture2 .layer-box").on("mouseover", function () {
        console
        if($(".text-box").css('right') == '0px') {
            $(".layer-box").css({
                'left' : '-60%',
                '-ms-transform' : 'rotate(-10deg)',
                '-webkit-transform' : 'rotate(-10deg)',
                'transform' : 'rotate(-10deg)',
            });
            $(".text-box").css({
                'right' : 'unset'
            });
            $(".lecture-image").css('transform', 'rotateY(180deg)');
        }
        else {
            $(".layer-box").css({
                'left' : '60%',
                '-ms-transform' : 'rotate(10deg)',
                '-webkit-transform' : 'rotate(10deg)',
                'transform' : 'rotate(10deg)',
            });
            $(".text-box").css({
                'right' : '0px'
            });
            $(".lecture-image").css('transform','rotateY(0deg)');
        }
	});
    
	$("#lecture3 .layer-box").on("mouseover", function () {
        if($(".text-box").css('right') == '0px') {
            $(".layer-box").css({
                'left' : '-60%',
                '-ms-transform' : 'rotate(10deg)',
                '-webkit-transform' : 'rotate(10deg)',
                'transform' : 'rotate(10deg)',
            });
            $(".text-box").css({
                'right' : 'unset'
            });
            $(".lecture-image").css('transform','rotateY(0deg)');
        }
        else {
            $(".layer-box").css({
                'left' : '60%',
                '-ms-transform' : 'rotate(-10deg)',
                '-webkit-transform' : 'rotate(-10deg)',
                'transform' : 'rotate(-10deg)',
            });
            $(".text-box").css({
                'right' : '0px'
            });
            $(".lecture-image").css('transform','rotateY(180deg)');
        }
	});
	$("#lecture4 .layer-box").on("mouseover", function () {
        if($(".text-box").css('right') == '0px') {
            $(".layer-box").css({
                'left' : '-60%',
                '-ms-transform' : 'rotate(10deg)',
                '-webkit-transform' : 'rotate(10deg)',
                'transform' : 'rotate(10deg)',
            });
            $(".text-box").css({
                'right' : 'unset'
            });
            $(".lecture-image").css('transform','rotateY(180deg)');
        }
        else {
            $(".layer-box").css({
                'left' : '60%',
                '-ms-transform' : 'rotate(-10deg)',
                '-webkit-transform' : 'rotate(-10deg)',
                'transform' : 'rotate(-10deg)',
            });
            $(".text-box").css({
                'right' : '0px'
            });
            $(".lecture-image").css('transform','rotateY(0deg)');
        }
	});
    
	$("#lecture5 .layer-box").on("mouseover", function () {
        console
        if($(".text-box").css('right') == '0px') {
            $(".layer-box").css({
                'left' : '-60%',
                '-ms-transform' : 'rotate(-10deg)',
                '-webkit-transform' : 'rotate(-10deg)',
                'transform' : 'rotate(-10deg)',
            });
            $(".text-box").css({
                'right' : 'unset'
            });
            $(".lecture-image").css('transform', 'rotateY(180deg)');
        }
        else {
            $(".layer-box").css({
                'left' : '60%',
                '-ms-transform' : 'rotate(10deg)',
                '-webkit-transform' : 'rotate(10deg)',
                'transform' : 'rotate(10deg)',
            });
            $(".text-box").css({
                'right' : '0px'
            });
            $(".lecture-image").css('transform','rotateY(0deg)');
        }
	});
    
});