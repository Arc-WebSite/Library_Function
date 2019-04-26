
	$(document).ready(function() {

		var element = $(".fixed_block");
		var height_el = element.offset().top;
		
		var getStyle = document.getElementById('left_Sidebar').style.display //*
		document.getElementById('left_Sidebar').style.display='block'; //*
		
		$(".fixed_block_position").css({
			//"width": element.outerWidth(),//!!!
			"height": element.outerHeight()//!!!
		});

		document.getElementById('left_Sidebar').style.display = getStyle; //*

		$('#left_Sidebar').scroll(function() {
			
			if($('#left_Sidebar').scrollTop() > height_el) {
			
				element.addClass("fixed");

			} else {
			
				element.removeClass("fixed");

			}

		});

	});

// ЗАФИКСИРОВАТЬ БЛОК ПРИ ПРОКРУТКЕ:
// --------------------------------
// * для того, что бы при скрытии блока не ломалось