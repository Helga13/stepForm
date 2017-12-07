$(document).ready(function () {
  
  'use strict'
  
  $('#roof_area_input').on('keydown', function(e){
    if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
      return false;
    };
  });
  
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
//      console.log(i+1);
      
      if(i == 0){
        $(".next").text('Шаг 2: Площадь крыши');
      }
      
      if(i == 1){
        $(".next").text('Шаг 3: Материал кровли');
        $(".back").text('Шаг 1: Форма крыши'); 
      }
      
      if(i == 2){
        $(".next").text('Шаг 4: Производитель кровли');
        $(".back").text('Шаг 2: Площадь крыши');
        
        $(".next").click(function(){
          var roofMat = $('.step3 input:checked').attr('value');
          console.log(roofMat);
          if( roofMat == 'Металлочерепица'){
            $('.mat_roof').removeClass('visible');
            $('.metall_roof').addClass('visible');
          }
          if( roofMat == 'Битумная черепица'){
            $('.mat_roof').removeClass('visible');
            $('.bitum_roof').addClass('visible');
          }
          if( roofMat == 'Модульная черепица'){
            $('.mat_roof').removeClass('visible');
            $('.modul_roof').addClass('visible');
          }
          if( roofMat == 'Композитная черепица'){
            $('.mat_roof').removeClass('visible');
            $('.komposit_roof').addClass('visible');
          }
          
        });
      }
      
      if(i == 3){
        $(".next").text('Шаг 5: Покрытие');
        $(".back").text('Шаг 3: Материал кровли'); 
        $(".next").click(function(){
        
          var manufacturer = manufacturer = $('.step4 input:checked').attr('value');

          if( manufacturer == 'Грандлайн' ){ 
            $('.step5 .economy .price span').text('10 р.'); 
            $('.step5 .standard .price span').text('17,5 р.'); 
            $('.step5 .premium .price span').text('25 р.'); 
          }
          if( manufacturer == 'Металлпрофиль' ){ 
            $('.step5 .economy .price span').text('8,5 р.'); 
            $('.step5 .standard .price span').text('16 р.'); 
            $('.step5 .premium .price span').text('23,5 р.'); 
          }
          if( manufacturer == 'Альтер' ){ 
            $('.step5 .economy .price span').text('9,5 р.'); 
            $('.step5 .standard .price span').text('17,25 р.'); 
            $('.step5 .premium .price span').text('25 р.'); 
          }
          if( manufacturer == 'Ruukki' ){ 
            $('.step5 .economy .price span').text('16 р.'); 
            $('.step5 .standard .price span').text('23 р.'); 
            $('.step5 .premium .price span').text('30 р.'); 
          }
          //-----------------------------------------------------
          if( manufacturer == 'Budmat' ){ 
            $('.step5 .economy .price span').text('17 р.'); 
            $('.step5 .standard .price span').text('25 р.'); 
            $('.step5 .premium .price span').text('33 р.'); 
          }
          if( manufacturer == 'Ruukki1' ){ 
            $('.step5 .economy .price span').text('16 р.'); 
            $('.step5 .standard .price span').text('21,5 р.'); 
            $('.step5 .premium .price span').text('27 р.'); 
          }
          if( manufacturer == 'Blachotrapez' ){ 
            $('.step5 .economy .price span').text('17 р.'); 
            $('.step5 .standard .price span').text('23 р.'); 
            $('.step5 .premium .price span').text('29 р.'); 
          }
          if( manufacturer == 'Альтер Максима' ){ 
            $('.step5 .economy .price span').text('16 р.'); 
            $('.step5 .standard .price span').text('21,5 р.'); 
            $('.step5 .premium .price span').text('27 р.'); 
          }
          //----------------------------------------------------
          if( manufacturer == 'Docke' ){ 
            $('.step5 .economy .price span').text('7,7 р.'); 
            $('.step5 .standard .price span').text('11,35 р.'); 
            $('.step5 .premium .price span').text('15 р.'); 
          }
          if( manufacturer == 'Katepal' ){ 
            $('.step5 .economy .price span').text('15 р.'); 
            $('.step5 .standard .price span').text('21,5 р.'); 
            $('.step5 .premium .price span').text('28 р.'); 
          }
          if( manufacturer == 'Шинглас' ){ 
            $('.step5 .economy .price span').text('8 р.'); 
            $('.step5 .standard .price span').text('19 р.'); 
            $('.step5 .premium .price span').text('30 р.'); 
          }
          //----------------------------------------------------
          if( manufacturer == 'Gerard' ){ 
            $('.step5 .economy .price span').text('34 р.'); 
            $('.step5 .standard .price span').text('41,5 р.'); 
            $('.step5 .premium .price span').text('49 р.'); 
          }
          if( manufacturer == 'Metrotile' ){ 
            $('.step5 .economy .price span').text('33 р.'); 
            $('.step5 .standard .price span').text('40 р.'); 
            $('.step5 .premium .price span').text('47 р.'); 
          }
        });
        
      } 
      
      if(i == 4){
        $(".next").text('Расчитать стоимость');
        $(".back").text('Шаг 4: Производитель кровли'); 
        
        $(".next").click(function(){
          
          var roofForm     = $('.step1 input:checked').attr('value');
          var roofArea     = $('.step2 input').val();
          roofArea         = +roofArea;
//          var roofMaterial = $('.step3 input:checked').attr('value');
          var manufacturer = $('.step4 input:checked').attr('value');
          var coating      = $('.step5 input:checked').attr('value');
          
          var roofMat = $('.step3 input:checked').attr('value');
            roofArea = +roofArea;
            console.log(roofForm);
            console.log(roofArea);
//            console.log(roofMaterial);
            console.log(manufacturer);
            console.log(coating);
          
          // final destination
          var finalValue;
          
          // options for Двухскатная & Грандлайн
          if( roofForm == 'Двухскатная' && manufacturer == 'Грандлайн' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 10 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Грандлайн' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 17.5 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Грандлайн' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 25 ; }
          // options for Ломаная & Грандлайн
          if( roofForm == 'Ломаная' && manufacturer == 'Грандлайн' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 10 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Грандлайн' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 17.5 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Грандлайн' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 25 ; }
          // options for Вальмовая & Грандлайн
          if( roofForm == 'Вальмовая' && manufacturer == 'Грандлайн' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 10 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Грандлайн' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 17.5 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Грандлайн' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 25 ; }
          // options for Шатровая & Грандлайн
          if( roofForm == 'Шатровая' && manufacturer == 'Грандлайн' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 10 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Грандлайн' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 17.5 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Грандлайн' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 25 ; }
          // options for Многощипцовая & Грандлайн
          if( roofForm == 'Многощипцовая' && manufacturer == 'Грандлайн' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 10 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Грандлайн' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 17.5 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Грандлайн' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 25 ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Металлпрофиль
          if( roofForm == 'Двухскатная' && manufacturer == 'Металлпрофиль' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 8.5 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Металлпрофиль' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 16 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Металлпрофиль' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 23.5 ; }
          // options for Ломаная & Металлпрофиль
          if( roofForm == 'Ломаная' && manufacturer == 'Металлпрофиль' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 8.5 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Металлпрофиль' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 16 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Металлпрофиль' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 23.5 ; }
          // options for Вальмовая & Металлпрофиль
          if( roofForm == 'Вальмовая' && manufacturer == 'Металлпрофиль' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 8.5 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Металлпрофиль' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 16 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Металлпрофиль' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 23.5 ; }
          // options for Шатровая & Металлпрофиль
          if( roofForm == 'Шатровая' && manufacturer == 'Металлпрофиль' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 8.5 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Металлпрофиль' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 16 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Металлпрофиль' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 23.5 ; }
          // options for Многощипцовая & Металлпрофиль
          if( roofForm == 'Многощипцовая' && manufacturer == 'Металлпрофиль' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 8.5 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Металлпрофиль' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 16 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Металлпрофиль' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 23.5 ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Альтер
          if( roofForm == 'Двухскатная' && manufacturer == 'Альтер' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 9.5 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Альтер' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 17.25 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Альтер' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 25 ; }
          // options for Ломаная & Альтер
          if( roofForm == 'Ломаная' && manufacturer == 'Альтер' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 9.5 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Альтер' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 17.25 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Альтер' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 25 ; }
          // options for Вальмовая & Альтер
          if( roofForm == 'Вальмовая' && manufacturer == 'Альтер' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 9.5 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Альтер' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 17.25 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Альтер' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 25 ; }
          // options for Шатровая & Альтер
          if( roofForm == 'Шатровая' && manufacturer == 'Альтер' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 9.5 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Альтер' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 17.25 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Альтер' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 25 ; }
          // options for Многощипцовая & Альтер
          if( roofForm == 'Многощипцовая' && manufacturer == 'Альтер' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 9.5 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Альтер' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 17.25 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Альтер' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 25 ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Ruukki
          if( roofForm == 'Двухскатная' && manufacturer == 'Ruukki' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 16 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Ruukki' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 23 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Ruukki' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 30 ; }
          // options for Ломаная & Ruukki
          if( roofForm == 'Ломаная' && manufacturer == 'Ruukki' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 16 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Ruukki' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 23 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Ruukki' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 30 ; }
          // options for Вальмовая & Ruukki
          if( roofForm == 'Вальмовая' && manufacturer == 'Ruukki' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 16 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Ruukki' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 23 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Ruukki' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 30 ; }
          // options for Шатровая & Ruukki
          if( roofForm == 'Шатровая' && manufacturer == 'Ruukki' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 16 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Ruukki' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 23 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Ruukki' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 30 ; }
          // options for Многощипцовая & Ruukki
          if( roofForm == 'Многощипцовая' && manufacturer == 'Ruukki' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 16 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Ruukki' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 23 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Ruukki' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 30 ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Budmat
          if( roofForm == 'Двухскатная' && manufacturer == 'Budmat' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 17 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Budmat' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 25 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Budmat' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 33 ; }
          // options for Ломаная & Budmat
          if( roofForm == 'Ломаная' && manufacturer == 'Budmat' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 17 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Budmat' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 25 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Budmat' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 33 ; }
          // options for Вальмовая & Budmat
          if( roofForm == 'Вальмовая' && manufacturer == 'Budmat' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 17 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Budmat' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 25 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Budmat' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 33 ; }
          // options for Шатровая & Budmat
          if( roofForm == 'Шатровая' && manufacturer == 'Budmat' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 17 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Budmat' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 25 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Budmat' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 33 ;  }
          // options for Многощипцовая & Budmat
          if( roofForm == 'Многощипцовая' && manufacturer == 'Budmat' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 17 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Budmat' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 25 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Budmat' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 33 ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Ruukki1
          if( roofForm == 'Двухскатная' && manufacturer == 'Ruukki1' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 16 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Ruukki1' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 21.5 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Ruukki1' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 27 ; }
          // options for Ломаная & Ruukki1
          if( roofForm == 'Ломаная' && manufacturer == 'Ruukki1' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 16 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Ruukki1' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 21.5 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Ruukki1' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 27 ; }
          // options for Вальмовая & Ruukki1
          if( roofForm == 'Вальмовая' && manufacturer == 'Ruukki1' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 16 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Ruukki1' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 21.5 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Ruukki1' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 27 ; }
          // options for Шатровая & Ruukki1
          if( roofForm == 'Шатровая' && manufacturer == 'Ruukki1' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 16 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Ruukki1' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 21.5 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Ruukki1' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 27 ; }
          // options for Многощипцовая & Ruukki1
          if( roofForm == 'Многощипцовая' && manufacturer == 'Ruukki1' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 16 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Ruukki1' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 21.5 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Ruukki1' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 27 ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Blachotrapez
          if( roofForm == 'Двухскатная' && manufacturer == 'Blachotrapez' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 17 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Blachotrapez' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 23 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Blachotrapez' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 29 ; }
          // options for Ломаная & Blachotrapez
          if( roofForm == 'Ломаная' && manufacturer == 'Blachotrapez' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 17 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Blachotrapez' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 23 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Blachotrapez' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 29 ; }
          // options for Вальмовая & Blachotrapez
          if( roofForm == 'Вальмовая' && manufacturer == 'Blachotrapez' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 17 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Blachotrapez' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 23 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Blachotrapez' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 29 ; }
          // options for Шатровая & Blachotrapez
          if( roofForm == 'Шатровая' && manufacturer == 'Blachotrapez' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 17 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Blachotrapez' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 23 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Blachotrapez' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 29 ; }
          // options for Многощипцовая & Blachotrapez
          if( roofForm == 'Многощипцовая' && manufacturer == 'Blachotrapez' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 17 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Blachotrapez' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 23 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Blachotrapez' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 29 ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Альтер Максима
          if( roofForm == 'Двухскатная' && manufacturer == 'Альтер Максима' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 16 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Альтер Максима' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 21.5 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Альтер Максима' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 27 ; }
          // options for Ломаная & Альтер Максима
          if( roofForm == 'Ломаная' && manufacturer == 'Альтер Максима' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 16 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Альтер Максима' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 21.5 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Альтер Максима' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 27 ; }
          // options for Вальмовая & Альтер Максима
          if( roofForm == 'Вальмовая' && manufacturer == 'Альтер Максима' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 16 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Альтер Максима' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 21.5 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Альтер Максима' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 27 ; }
          // options for Шатровая & Альтер Максима
          if( roofForm == 'Шатровая' && manufacturer == 'Альтер Максима' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 16 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Альтер Максима' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 21.5 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Альтер Максима' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 27 ; }
          // options for Многощипцовая & Альтер Максима
          if( roofForm == 'Многощипцовая' && manufacturer == 'Альтер Максима' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 16 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Альтер Максима' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 21.5 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Альтер Максима' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 27 ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Docke
          if( roofForm == 'Двухскатная' && manufacturer == 'Docke' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 7.7 + 5.5 * roofArea ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Docke' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 11.35 + 5.5 * roofArea ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Docke' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 15 + 5.5 * roofArea ; }
          // options for Ломаная & Docke
          if( roofForm == 'Ломаная' && manufacturer == 'Docke' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 7.7 + 5.5 * roofArea ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Docke' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 11.35 + 5.5 * roofArea ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Docke' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 15 + 5.5 * roofArea ; }
          // options for Вальмовая & Docke
          if( roofForm == 'Вальмовая' && manufacturer == 'Docke' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 7.7 + 5.5 * roofArea ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Docke' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 11.35 + 5.5 * roofArea ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Docke' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 15 + 5.5 * roofArea ; }
          // options for Шатровая & Docke
          if( roofForm == 'Шатровая' && manufacturer == 'Docke' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 7.7 + 5.5 * roofArea ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Docke' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 11.35 + 5.5 * roofArea ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Docke' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 15 + 5.5 * roofArea ; }
          // options for Многощипцовая & Docke
          if( roofForm == 'Многощипцовая' && manufacturer == 'Docke' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 7.7 + 5.5 * roofArea ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Docke' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 11.35 + 5.5 * roofArea ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Docke' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 15 + 5.5 * roofArea ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Katepal
          if( roofForm == 'Двухскатная' && manufacturer == 'Katepal' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 15 + 5.5 * roofArea ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Katepal' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 21.5 + 5.5 * roofArea ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Katepal' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 28 + 5.5 * roofArea ; }
          // options for Ломаная & Katepal
          if( roofForm == 'Ломаная' && manufacturer == 'Katepal' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 15 + 5.5 * roofArea ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Katepal' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 21.5 + 5.5 * roofArea ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Katepal' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 28 + 5.5 * roofArea ; }
          // options for Вальмовая & Katepal
          if( roofForm == 'Вальмовая' && manufacturer == 'Katepal' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 15 + 5.5 * roofArea ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Katepal' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 21.5 + 5.5 * roofArea ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Katepal' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 28 + 5.5 * roofArea ; }
          // options for Шатровая & Katepal
          if( roofForm == 'Шатровая' && manufacturer == 'Katepal' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 15 + 5.5 * roofArea ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Katepal' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 21.5 + 5.5 * roofArea ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Katepal' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 28 + 5.5 * roofArea ; }
          // options for Многощипцовая & Katepal
          if( roofForm == 'Многощипцовая' && manufacturer == 'Katepal' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 15 + 5.5 * roofArea ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Katepal' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 21.5 + 5.5 * roofArea ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Katepal' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 28 + 5.5 * roofArea ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Шинглас
          if( roofForm == 'Двухскатная' && manufacturer == 'Шинглас' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 8 + 5.5 * roofArea ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Шинглас' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 19 + 5.5 * roofArea ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Шинглас' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 30 + 5.5 * roofArea ; }
          // options for Ломаная & Шинглас
          if( roofForm == 'Ломаная' && manufacturer == 'Шинглас' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 8 + 5.5 * roofArea ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Шинглас' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 19 + 5.5 * roofArea ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Шинглас' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 30 + 5.5 * roofArea ; }
          // options for Вальмовая & Шинглас
          if( roofForm == 'Вальмовая' && manufacturer == 'Шинглас' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 8 + 5.5 * roofArea ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Шинглас' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 19 + 5.5 * roofArea ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Шинглас' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 30 + 5.5 * roofArea ; }
          // options for Шатровая & Шинглас
          if( roofForm == 'Шатровая' && manufacturer == 'Шинглас' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 8 + 5.5 * roofArea ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Шинглас' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 19 + 5.5 * roofArea ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Шинглас' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 30 + 5.5 * roofArea ; }
          // options for Многощипцовая & Шинглас
          if( roofForm == 'Многощипцовая' && manufacturer == 'Шинглас' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 8 + 5.5 * roofArea ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Шинглас' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 19 + 5.5 * roofArea ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Шинглас' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 30 + 5.5 * roofArea ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Gerard
          if( roofForm == 'Двухскатная' && manufacturer == 'Gerard' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 34 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Gerard' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 41.5 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Gerard' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 49 ; }
          // options for Ломаная & Gerard
          if( roofForm == 'Ломаная' && manufacturer == 'Gerard' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 34 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Gerard' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 41.5 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Gerard' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 49 ; }
          // options for Вальмовая & Gerard
          if( roofForm == 'Вальмовая' && manufacturer == 'Gerard' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 34 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Gerard' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 41.5 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Gerard' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 49 ; }
          // options for Шатровая & Gerard
          if( roofForm == 'Шатровая' && manufacturer == 'Gerard' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 34 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Gerard' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 41.5 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Gerard' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 49 ; }
          // options for Многощипцовая & Gerard
          if( roofForm == 'Многощипцовая' && manufacturer == 'Gerard' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 34 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Gerard' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 41.5 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Gerard' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 49 ; }
          //---------------------------------------------------------------------------------------
          
          // options for Двухскатная & Metrotile
          if( roofForm == 'Двухскатная' && manufacturer == 'Metrotile' && coating == 'Эконом'){ finalValue = 1.35 * roofArea * 33 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Metrotile' && coating == 'Стандарт'){ finalValue = 1.35 * roofArea * 40 ; }
          if( roofForm == 'Двухскатная' && manufacturer == 'Metrotile' && coating == 'Премиум'){ finalValue = 1.35 * roofArea * 47 ; }
          // options for Ломаная & Metrotile
          if( roofForm == 'Ломаная' && manufacturer == 'Metrotile' && coating == 'Эконом'){ finalValue = 1.40 * roofArea * 33 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Metrotile' && coating == 'Стандарт'){ finalValue = 1.40 * roofArea * 40 ; }
          if( roofForm == 'Ломаная' && manufacturer == 'Metrotile' && coating == 'Премиум'){ finalValue = 1.40 * roofArea * 47 ; }
          // options for Вальмовая & Metrotile
          if( roofForm == 'Вальмовая' && manufacturer == 'Metrotile' && coating == 'Эконом'){ finalValue = 1.45 * roofArea * 33 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Metrotile' && coating == 'Стандарт'){ finalValue = 1.45 * roofArea * 40 ; }
          if( roofForm == 'Вальмовая' && manufacturer == 'Metrotile' && coating == 'Премиум'){ finalValue = 1.45 * roofArea * 47 ; }
          // options for Шатровая & Metrotile
          if( roofForm == 'Шатровая' && manufacturer == 'Metrotile' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 33 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Metrotile' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 40 ; }
          if( roofForm == 'Шатровая' && manufacturer == 'Metrotile' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 47 ; }
          // options for Многощипцовая & Metrotile
          if( roofForm == 'Многощипцовая' && manufacturer == 'Metrotile' && coating == 'Эконом'){ finalValue = 1.50 * roofArea * 33 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Metrotile' && coating == 'Стандарт'){ finalValue = 1.50 * roofArea * 40 ; }
          if( roofForm == 'Многощипцовая' && manufacturer == 'Metrotile' && coating == 'Премиум'){ finalValue = 1.50 * roofArea * 47 ; }
          //---------------------------------------------------------------------------------------------------------------------------------
          
          console.log(finalValue);
          finalValue = Math.round(finalValue * 100) / 100;
          console.log(finalValue);
          if( roofForm == undefined || roofArea == 0 || roofMat == undefined || manufacturer == undefined || coating == undefined ) {
            $('.total_calculation .total .total_value').text('Заполните все поля');
            $('.total_calculation .price').css({'font-size': '64px', 'line-height': '100px'});
          }else{
            $('.total_calculation .total .total_value').text(finalValue + ' BYN');
          }
          
          $('.total_calculation .total .shape').text(roofForm);
          $('.total_calculation .total .area').text(roofArea);
          $('.total_calculation .total .material').text(roofMat);
          if( manufacturer == 'Ruukki1' ){
            $('.total_calculation .total .manufacturer').text('Ruukki');
          }else{
            $('.total_calculation .total .manufacturer').text(manufacturer);
          }
          $('.total_calculation .total .coating').text(coating);
          
        });
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