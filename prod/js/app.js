$(document).ready(function () {
  
  'use strict'
  
	var steps = $("form").children(".step"); // находим все шаги формы
  
	$(steps[0]).show(); // показываем первый шаг
	var current_step = 0; // задаем текущий шаг
	$(".next").click(function(e){	// Событие клика на ссылку "Следующий шаг"
      e.preventDefault();
		if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
		  $(this).hide(); // скрываем ссылку "Следующий шаг"
		}
		$(".back").css({'display': 'inline-block'}); // показываем ссылку "Назад"
		current_step++; // увеличиваем счетчик текущего слайда
		changeStep(current_step); // меняем шаг
      $("#progressbar li").eq(current_step).addClass("active");
	});
	
	$(".back").click(function(e){	// Событие клика на ссылку "Предыдущий шаг"
      e.preventDefault();
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).hide(); // скрываем ссылку "Назад"
		}
		$(".next").show(); // показываем ссылку "Следующий шаг"
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
      $("#progressbar li").eq(current_step+1).removeClass("active");
	});
  
  $(".reset").click(function(){	
    location.reload();
  });
  
  //popup
  $(".exact_calculation").click(function(e){	
    e.preventDefault();
    var DataId = $(this).attr('data-id');
		if (typeof DataId == "string") {
			$('#'+DataId).fadeIn(300);
			$('body').css('overflow', 'hidden');
		}
  });
  $('.popup_calculation').click(function (e) {
		e = event || window.event
		if (e.target == this) {
			$(this).fadeOut(100);
			$('body').css('overflow', 'auto');
		}
	});
  $('.back_to_results').click(function (e) {
		e.preventDefault();
		$(this).parents('.popup_calculation').fadeOut(100);
		$('body').css('overflow', 'auto');
	});
  $('.popup_calculation .popup_content').click(function (e) {
		e.stopPropagation();
	});
  
	
	
	function changeStep(i) { // функция смены шага
		$(steps).hide(); // скрываем все шаги
		$(steps[i]).show(); // показываем текущий
      console.log(i+1);
      
      if(i == 0){
        $(".next").text('Шаг 2: Площаль крыши');
      }
      
      if(i == 1){
        $(".next").text('Шаг 3: Материал кровли');
        $(".back").text('Шаг 1: Форма крыши'); 
      }
      
      if(i == 2){
        $(".next").text('Шаг 4: Производитель кровли');
        $(".back").text('Шаг 2: Площаль крыши'); 
      }
      
      if(i == 3){
        $(".next").text('Шаг 5: Покрытие');
        $(".back").text('Шаг 3: Материал кровли'); 
      }
      
      if(i == 4){
        $(".next").text('Расчитать стоимость');
        $(".back").text('Шаг 4: Производитель кровли'); 
      }
      
      if(i == 5){
        $(".reset").css({'display': 'inline-block'});
        $(".exact_calculation").css({'display': 'inline-block'});
        $(".back").hide(); 
        $("#progressbar").hide(); 
      }
      
	}
  
  // tooltip
	$('.js-tooltip').mousemove(function (e) {
		var tooltip = $(this).next('.tooltip');
		$(tooltip).css({
			"top": e.pageY + 30
			, "left": e.pageX - 10
		}).show();
	}).mouseout(function () {
		var tooltip = $(this).next('.tooltip');
		$(tooltip).hide().css({
			"top": 0
			, "left": 0
		});
	});
  
  
  
  
  
})