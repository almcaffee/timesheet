// JavaScript Document

$(document).ready( function () {
	
	if($(document.body).hasClass('has-time')){
		if(window.innerWidth <= 768) {
			if(window.innerWidth < 440) {
				
				var _w = window.innerWidth - 40; 
				$('.saved-time').attr('style','display: block; position: absolute; top: 65px; left: 20px; width: '+_w+'px; padding: 15px;'); 
			 } else  {
				 
				 var tt = (window.innerWidth - 400)/2;
				 $('.saved-time').attr('style','display: block; position: absolute; top: 65px; left: '+tt+'px; width: 400px; padding: 15px;'); 
				 
			 }
		} else {
			var tt = (window.innerWidth - 400)/2;
			$('.saved-time').attr('style','display: block; position: absolute; top: 85px; left: '+tt+'px; width: 400px; padding: 15px;'); 
		}
		
		$('.disable').show();
		$('.saved-time').show();
		
		var a = 0.00;
		var obja = $('.al-time .hours');
		var r = 0.00;
		var objr = $('.re-time .hours');
		var v = 0.00;
		var objv = $('.va-time .hours');
		var o = 0.00;
		var objo = $('.ot-time .hours');
		
		$.each(objr, function() {
			
			if($(this).text() !== '') {
				
				r += parseFloat($(this).text());
			}
			
			$('.re-total .total').val(r);
			
		});
		
		$.each(obja, function() {
			
			if($(this).text() !== '') {
				
				a += parseFloat($(this).text());
			}
			
			$('.al-total .total').val(a);
			
		});
		
		
		$.each(objv, function() {
			
			if($(this).text() !== '') {
				
				v += parseFloat($(this).text());
			}
			
			$('.va-total .total').val(v);
			
		});
		
		$.each(objo, function() {
			
			if($(this).text() !== '') {
				
				o += parseFloat($(this).text());
			}
			
			if(o === 0 || 0 === '') {
				
				$('.ot-total .total').val('');
				
			} else {
			   
			   $('.ot-total .total').val(o);
			
			}
			
		});
		
		var t = r+a+v+o;
		$('.all-total .displayfield').text(t);
	}
	
	$('.head-date').val($('#calendar').attr('data-first'));
	$('.date2').val($('#calendar').attr('data-last'));
	
	var xy = window.innerHeight;
	var wy = window.innerWidth;
	var ww = wy/2;
	var vv = xy/2;
	var vy = (window.innerHeight - $('.login-form').height())/2;
	var wv = (window.innerWidth - $('.login-form').width())/2;
	var st = (window.innerWidth - $('.saved-time').width())/2;
	
	var xx = (xy - 76)/2;
	var xz = window.innerWidth - 220;
	
	$('.left').height(xy);
	$('.right').height(xy);
	$('.left').width(200);
	
	
	if(window.innerWidth >= 1420) {
		$('.right').width(1200);
	} else if(window.innerWidth <= 1084) {
		$('.right').width(window.innerWidth);
	} else {
		$('.right').width(xz);
	}
	
	if(window.innerWidth > 768) {
		var formPad = ($('.right').width() - 700)/16;
		$('.dayForm').attr('style','margin: 0px '+formPad+'px; width: 100px;');
				
	} else if(window.innerWidth < 768) {
		
		var aa = $('.nav').height() + $('#calendar').height() + 50;
		
		$('.dayForm').hide();
		$('#'+$('.startDate').attr('data-start')+'-form').show();
		
		var bb = $('#'+$('.startDate').attr('data-start')+'-form').width();
		var lft =( window.innerWidth - bb)/2;
		$('#'+$('.startDate').attr('data-start')+'-form').attr('style','position: relative; top: 50px; left: '+lft+'px;');
		$('#'+$('.startDate').attr('data-start')).addClass('dayDayhover');		
				
	} else {
		$('.dayForm').width('');
	}
	
	
	var bb = $('.box');
	$.each(bb, function() {
		
		console.log($(this).find('.hours').length);
		if($(this).find('.hours').length > 0) {
			$(this).show();
		} else {
			$(this).hide();
		}
		
	});
	
	if(window.innerWidth <= 768) {
		$('.outerDay').text('');
		$('.innerDay .day').remove();
		$('.re-time .head').text('Regular: ');
		$('.al-time .head').text('Administrative: ');
		$('.va-time .head').text('Vacation: ');
		$('.ot-time .head').text('Other: ');
		$('#'+$('.dayDate').attr('data-show')).show();
		
	}
	
	var xxx = window.innerWidth/7;
	$('.mobile-week a, .mobile-week span').width(xxx);
	
	$(document.body).height(xy);
	
});

$(window).resize( function () {
	
	
	$('.head-date').val($('#calendar').attr('data-first'));
	$('.date2').val($('#calendar').attr('data-last'));
	
	var xy = window.innerHeight;
	var wy = window.innerWidth;
	var ww = wy/2;
	var vv = xy/2;
	var vy = (window.innerHeight - $('.login-form').height())/2;
	var wv = (window.innerWidth - $('.login-form').width())/2;
	var st = (window.innerWidth - $('.saved-time').width())/2;
	
	var xx = (xy - 76)/2;
	var xz = window.innerWidth - 220;
	
	
	$('.left').height(xy);
	$('.right').height(xy);
	$('.left').width(200);
	
	
	if(window.innerWidth >= 1420) {
		$('.right').width(1200);
	} else if(window.innerWidth <= 1084) {
		$('.right').width(window.innerWidth);
	} else {
		$('.right').width(xz);
	}
	
	if(window.innerWidth > 768) {
		var formPad = ($('.right').width() - 700)/16;
		$('.dayForm').attr('style','margin: 0px '+formPad+'px; width: 100px;');
				
	} else if(window.innerWidth < 768) {
		
		var aa = $('.nav').height() + $('#calendar').height() + 50;
		
		$('.dayForm').hide();
		$('#'+$('.startDate').attr('data-start')+'-form').show();
		
		var bb = $('#'+$('.startDate').attr('data-start')+'-form').width();
		var lft =( window.innerWidth - bb)/2;
		$('#'+$('.startDate').attr('data-start')+'-form').attr('style','position: relative; top: 50px; left: '+lft+'px;');
		$('#'+$('.startDate').attr('data-start')).addClass('dayDayhover');
		
	} else {
		$('.dayForm').width('');
	}
	
	var bb = $('.box');
	$.each(bb, function() {
		
		console.log($(this).find('.hours').length);
		if($(this).find('.hours').length > 0) {
			$(this).show();
		} else {
			$(this).hide();
		}
		
	});
	
	if(window.innerWidth <= 768) {
		$('.outerDay').text('');
		$('.innerDay .day').remove();
		$('.re-time .head').text('Regular: ');
		$('.al-time .head').text('Administrative: ');
		$('.va-time .head').text('Vacation: ');
		$('.ot-time .head').text('Other: ');
		$('#'+$('.dayDate').attr('data-show')).show();
		
		/*console.log($('.dayDate').attr('data-show'));*/
	}
	
	var xxx = window.innerWidth/7;
	$('.mobile-week a, .mobile-week span').width(xxx);
	
	$(document.body).height(xy);
	
});

$('.close-time').click( function() {
	$('.disable').hide();
		$('.saved-time').hide();
});

$('.logout').click( function() { $.post('/timesheet/login.cfm?logout=true', function() { window.location = '/timesheet/time.cfm'; window.location.reload(true); }); });


$('.toggle').click( function() {
	
	if($(this).hasClass('glyphicon-menu-hamburger')) {
		$(this).removeClass('glyphicon-menu-hamburger');
		$(this).addClass('glyphicon-remove');
		$('.left').show();
		$('.disable').show();
		$('.right').hide();
		$(document.body).addClass('pause');
		
	} else {
		$(this).removeClass('glyphicon-remove');
		$(this).addClass('glyphicon-menu-hamburger');
		$('.left').hide();
		$('.disable').hide();
		$('.right').show();
		$(document.body).removeClass('pause');
	}
	
});

$('.disable').click( function() {
	
	$('.toggle').removeClass('glyphicon-remove');
	$('.toggle').addClass('glyphicon-menu-hamburger');
	$('.disable').hide();
	$('.saved-time').hide();
	
});

$('.form-control').blur( function() {
	
	var xz = window.innerWidth;
	$(document.body).width(xy);
	var xy = window.innerHeight;
	$(document.body).height(xy);
});

$('.up-level').click( function () {
	
		var ee = '?employeeid='+$(this).attr("data-supervisor");
		var dd;
		
		if(window.innerWidth > 1084) {
			
			dd = $('.form-head');
			console.log(dd);
			
		} else {
			
			dd = $('.form-left');
			console.log(dd);
			
		}
		
		$.each(dd, function(key, value) {
			
			ee += '&'+$(this).attr('name')+'='+$(this).val();
			
		});
		
		window.location = '/timesheet/time.cfm'+ee;
	
	
	
});


$('.submit').click( function() {
	
	
		var dd;
		
		var ee = '?employeeid='+$('.employee-start').attr('data-empid');
				
		if(window.innerWidth > 1084) {
			
			dd = $('.form-head');
			console.log(dd);
			
		} else {
			
			dd = $('.form-left');
			console.log(dd);
			
		}
		
		$.each(dd, function(key, value) {
			
			ee += '&'+$(this).attr('name')+'='+$(this).val();
			
		});
		
		window.location = '/timesheet/time.cfm'+ee;
	
	
});


$('.select-id').change( function() {
	
	
	if($(this).valueOf() !== '0'){
	   
		var dd;
		
		var ee = '?employeeid='+$(this).find("option:selected").val();
		
		var cc = '?'+ee.toString();
		
		if(window.innerWidth > 1084) {
			
			dd = $('.form-head');
			console.log(dd);
			
		} else {
			
			dd = $('.form-left');
			console.log(dd);
			
		}
		
		$.each(dd, function(key, value) {
			
			ee += '&'+$(this).attr('name')+'='+$(this).val();
			
		});
		
		window.location = '/timesheet/time.cfm'+ee;
	
	}
	
});


$('.elogin').click( function() {
	
	location.href = '/timesheet/login.cfm?email='+$('#email').val()+'&password='+$('#password').val(); 
	
});

	
	$('.dayDay').click( function() {
		if(window.innerWidth < 768) {
			
			var aa = $('.nav').height() + $('#calendar').height() + 50;
			
			$('.dayForm').hide();
			$('.dayDay').removeClass('dayDayhover');
			$('#'+$(this).attr('data-target')).show();
			
			var bb = $('#'+$(this).attr('data-target')).width();
			var lft =( window.innerWidth - bb)/2;
			$('#'+$(this).attr('data-target')).attr('style','position: relative; top: 50px; left: '+lft+'px;');
		
			$(this).addClass('dayDayhover');
		} else {
			$('.dayForm').removeClass('dayForm-selected');
			$('.dayDay').removeClass('dayDayhover');
			$(this).addClass('dayDayhover');
			$('#'+$(this).attr('data-target')).addClass('dayForm-selected');
		}
	});
	
	$('.dayForm').click( function() {
		if(window.innerWidth > 768) {
			
			$('.dayForm').removeClass('dayForm-selected');
			$('.dayDay').removeClass('dayDayhover');
			$(this).addClass('dayForm-selected');
			$('#'+$(this).attr('data-parent')).addClass('dayDayhover');
		}
	});
	
	$('.date2').val($('#calendar').attr('data-last'));
	
	$('.date2').change( function () { 
		$('.date2').val($('#calendar').attr('data-last'));
	});
	
	$('.time-input').change( function() {
			
			
	  var max = parseInt(24);
	  
	  if(parseInt($(this).val()) === 0) {
		  $(this).val('');
	  }
	  
	  console.log($(this));	
      if($(this).val() !== '' || $(this).val() !== 0) {  
		$('#'+$(this).attr('data-update')+'-type').find("option:selected").attr('data-input', $(this).val());
		
		if(!$('#'+$(this).attr('data-update')+' .outerDay').hasClass('updated')) {
			$('#'+$(this).attr('data-update')+' .outerDay').addClass('updated');
			$('#'+$(this).attr('data-update')+' .innerDay').addClass('no-pad');
			
			$('#'+$(this).attr('data-update')+' .outerDay').append(' '+$('#'+$(this).attr('data-update')+' .innerDay .day').text());
		  $('#'+$(this).attr('data-update')+' .innerDay .day').text('');
		  $('#'+$(this).attr('data-update')+' .innerDay .day').hide();
		}
	  }
	   
		  
	  if($('#'+$(this).attr('data-update')+'-type').find("option:selected").val() === 'al') {
	  
		  if($('#'+$(this).attr('data-update')+' .outerDay').hasClass('al')) {
			  
			  if($(this).val() === '' || parseInt($(this).val()) === 0) {
				 
				  $('#'+$(this).attr('data-update')+' .innerDay .al-time').hide();
				$('#'+$(this).attr('data-update')+' .outerDay').removeClass('al'); 
				$('#'+$(this).attr('data-update')+' .innerDay .al-time .al').remove();
				$('#'+$(this).attr('data-update')+' .innerDay .al-time .al').attr('data-hours',0);
				  
			  } else {
			  
			     $('#'+$(this).attr('data-update')+' .innerDay .al-time').show();
				$('#'+$(this).attr('data-update')+' .innerDay .al-time .al').text($(this).val());
			    $('#'+$(this).attr('data-update')+' .innerDay .al-time .al').attr('data-hours',$(this).val());
			  }
			  
		  } else {
			   $('#'+$(this).attr('data-update')+' .innerDay .al-time').show();
			  $('#'+$(this).attr('data-update')+' .outerDay').addClass('al');
			  $('#'+$(this).attr('data-update')+' .innerDay .al-time').append('<span class="al hours" data-type="al" data-hours="'+$(this).val()+'">'+$(this).val()+'</span>');
			  
		  }
	  
	  } else if($('#'+$(this).attr('data-update')+'-type').find("option:selected").val() === 'va') {
	  
		  if($('#'+$(this).attr('data-update')+' .outerDay').hasClass('va')) {
			  
			  if($(this).val() === '' || parseInt($(this).val()) === 0) {
				  $('#'+$(this).attr('data-update')+' .innerDay .va-time').hide();
				$('#'+$(this).attr('data-update')+' .outerDay').removeClass('va'); 
				$('#'+$(this).attr('data-update')+' .innerDay .va-time .va').remove();
				$('#'+$(this).attr('data-update')+' .innerDay .va-time .va').attr('data-hours',0);
				  
			  } else {
			    $('#'+$(this).attr('data-update')+' .innerDay .va-time').show();
				$('#'+$(this).attr('data-update')+' .innerDay .va-time .va').text($(this).val());
			    $('#'+$(this).attr('data-update')+' .innerDay .va-time .va').attr('data-hours',$(this).val());
			  }
			  
		  } else {
			  
			   $('#'+$(this).attr('data-update')+' .innerDay .va-time').show();
			  $('#'+$(this).attr('data-update')+' .outerDay').addClass('va');
			  $('#'+$(this).attr('data-update')+' .innerDay .va-time').append('<span class="va hours" data-type="va" data-hours="'+$(this).val()+'">'+$(this).val()+'</span>');
			  
		  }
	  
	  } else if($('#'+$(this).attr('data-update')+'-type').find("option:selected").val() === 're') {
		  
		  if($('#'+$(this).attr('data-update')+' .outerDay').hasClass('re')) {
			  
			  if($(this).val() === '' || parseInt($(this).val()) === 0) {
				 $('#'+$(this).attr('data-update')+' .innerDay .re-time').hide();  
				$('#'+$(this).attr('data-update')+' .outerDay').removeClass('re');
				$('#'+$(this).attr('data-update')+' .innerDay .re-time .re').remove();
				$('#'+$(this).attr('data-update')+' .innerDay .re-time .re').attr('data-hours',0);
				  
			  } else {
			    $('#'+$(this).attr('data-update')+' .innerDay .re-time').show();
				$('#'+$(this).attr('data-update')+' .innerDay .re-time .re').text($(this).val());
			    $('#'+$(this).attr('data-update')+' .innerDay .re-time .re').attr('data-hours',$(this).val());
			  
			  }
			  
		  } else {
			  
			   $('#'+$(this).attr('data-update')+' .innerDay .re-time').show();
			  $('#'+$(this).attr('data-update')+' .outerDay').addClass('re');
			  $('#'+$(this).attr('data-update')+' .innerDay .re-time').append('<span class="re hours" data-type="re" data-hours="'+$(this).val()+'">'+$(this).val()+'</span>');
			  
		  }
	  
	  } else if($('#'+$(this).attr('data-update')+'-type').find("option:selected").val() === 'ot') {
		  
		  if($('#'+$(this).attr('data-update')+' .outerDay').hasClass('ot')) {
			  
			  if($(this).val() === '' || parseInt($(this).val()) === 0) {
				 
				 $('#'+$(this).attr('data-update')+' .innerDay .ot-time').hide();
				 $('#'+$(this).attr('data-update')+' .outerDay').removeClass('ot'); 
				$('#'+$(this).attr('data-update')+' .innerDay .ot-time .ot').remove();
				$('#'+$(this).attr('data-update')+' .innerDay .ot-time .ot').attr('data-hours',0);
				  
			  } else {
			  
				$('#'+$(this).attr('data-update')+' .innerDay .ot-time .ot').text($(this).val());
			    $('#'+$(this).attr('data-update')+' .innerDay .ot-time .ot').attr('data-hours',$(this).val());
			  }
			  
		  } else {
			  $('#'+$(this).attr('data-update')+' .innerDay .ot-time').show();
			  $('#'+$(this).attr('data-update')+' .outerDay').addClass('ot');
			  $('#'+$(this).attr('data-update')+' .innerDay .ot-time').append('<span class="ot hours" data-type="ot" data-hours="'+$(this).val()+'">'+$(this).val()+'</span>');
			  
		  }
		  
		  
		} else if($(this).val() > max){
			
			$(this).addClass('form-control-warning');
			console.log('warning');
			
		} else {
			
			$('#'+$(this).attr('data-update')+' .outerDay').removeClass('updated');
			$('#'+$(this).attr('data-update')+' .innerDay').removeClass('no-pad');
			$('#'+$(this).attr('data-update')+' .innerDay .day').text($(this).attr('data-day'));
			$('#'+$(this).attr('data-update')+' .outerDay').text($(this).attr('data-wday'));
			$('#'+$(this).attr('data-update')+'-type').find("option:selected").removeAttr('data-input');
		}
			
			/*$('#'+$(this).attr('data-update')+' .outerDay').append(' '+$('#'+$(this).attr('data-update')+' .innerDay').text());
		}*/
		
		/*console.log($('#'+$(this).attr('data-update')+' .innerDay').find('.hours'));*/
		
		
		if($('#'+$(this).attr('data-update')+' .innerDay').find('.hours').length === 0) {
			
			if($('#'+$(this).attr('data-update')+' .outerDay').hasClass('updated')) {
				
				$('#'+$(this).attr('data-update')+' .outerDay').removeClass('updated');
				$('#'+$(this).attr('data-update')+' .innerDay').removeClass('no-pad');
				$('#'+$(this).attr('data-update')+' .innerDay .day').text($(this).attr('data-day'));
				$('#'+$(this).attr('data-update')+' .innerDay .day').show();
				$('#'+$(this).attr('data-update')+' .outerDay').text($(this).attr('data-wday'));
				$('#'+$(this).attr('data-update')+' .innerDay div').hide();
			
			}
		}
		
		var a = 0.00;
		var obja = $('.al-time .hours');
		var r = 0.00;
		var objr = $('.re-time .hours');
		var v = 0.00;
		var objv = $('.va-time .hours');
		var o = 0.00;
		var objo = $('.ot-time .hours');
		
		$.each(objr, function() {
			
			if($(this).text() !== '') {
				
				r += parseFloat($(this).text());
			}
			
			$('.re-total .total').val(r);
			
		});
		
		$.each(obja, function() {
			
			if($(this).text() !== '') {
				
				a += parseFloat($(this).text());
			}
			
			$('.al-total .total').val(a);
			
		});
		
		
		$.each(objv, function() {
			
			if($(this).text() !== '') {
				
				v += parseFloat($(this).text());
			}
			
			$('.va-total .total').val(v);
			
		});
		
		$.each(objo, function() {
			
			if($(this).text() !== '') {
				
				o += parseFloat($(this).text());
			}
			
			if(o === 0 || 0 === '') {
				
				$('.ot-total .total').val('');
				
			} else {
			   
			   $('.ot-total .total').val(o);
			
			}
			
		});
		
		var t = r+a+v+o;
		$('.all-total .displayfield').text(t);
	});
	
	$('.type-select').change( function () {
		
		
	  if($(this).find("option:selected").attr('data-input') !== '') {  
		
		$('#'+$(this).attr('data-input')).val($(this).find("option:selected").attr('data-input'));
	  
	  } else {
		
		$('#'+$(this).attr('data-input')).val('');
	  }
		
	});
	
	
	
	$('.previous-day, .next-day, .calendar-link').click( function () {
		
		
		var a = '#'+$(this).attr('data-show');
		console.log(a);
		
		$('.calendar-link').removeClass('selected-day');
		$('.'+$(this).attr('data-show')+'-link').addClass('selected-day');
		$('.dayDay').hide();
		$('.dayDate .text').text($(a).attr('data-show'));
		$('.next-day').attr('data-show',$(a).attr('data-next'));
		$('.previous-day').attr('data-show',$(a).attr('data-prev'));
		$(a).show();
		
		if($(this).hasClass('calendar-link')) {
			$('.mobile-calendar').toggle();
			$('.dayDate small .glyphicon').removeClass('glyphicon-triangle-top');
			$('.dayDate small .glyphicon').addClass('glyphicon-triangle-bottom');
		}
		
	});
	
	$('.dayDate').click( function () {
		
		
		$('.mobile-calendar').toggle();
		if($('.mobile-calendar').is(':visible')) {
			
			$('.dayDate small .glyphicon').removeClass('glyphicon-triangle-bottom');
			$('.dayDate small .glyphicon').addClass('glyphicon-triangle-top');
			
		} else {
			
			$('.dayDate small .glyphicon').removeClass('glyphicon-triangle-top');
			$('.dayDate small .glyphicon').addClass('glyphicon-triangle-bottom');
			
		}
		
	});
	
	$('.submit-time').click(function() {
		
		var ss = $('.dayDay');
		var hours = [];
		var index = 0;
		
		$.each(ss, function() {
			
			var date = $(this).attr('data-date');
			
			var r = $(this).find('.re-time .hours').text();
			var a = $(this).find('.al-time .hours').text();
			var v = $(this).find('.va-time .hours').text();
			var o = $(this).find('.ot-time .hours').text();
			
			if(r != '') {
				hours.push($('.employee-start').attr('data-empid')+$(this).attr('id')+'r, '+date+', Regular, '+r);
			}
			
			if(a != '') {
				hours.push($('.employee-start').attr('data-empid')+$(this).attr('id')+'a, '+date+', Administrative, '+a);
			}
			
			if(v != '') {
				hours.push($('.employee-start').attr('data-empid')+$(this).attr('id')+'v, '+date+', Vacation, '+v);
			}
			
			if(o != '') {
				hours.push($('.employee-start').attr('data-empid')+$(this).attr('id')+'o, '+date+', Other, '+o);
			}
			
		});
		
		/*console.log(hours);*/
		
		var postData = {
			employeeid : $('.employee-start').attr('data-empid'),
			timesheetid : $('.employee-start').attr('data-time'),
			start : $('.employee-start').attr('data-start'),
			end : $('.employee-start').attr('data-end'),
			hours: $('.hours-total').text(),
			timecard: hours
		};
		
		var json_hours = JSON.stringify(hours);
		/*console.log(postData);*/
		
		
		$.post('/timesheet/timecard.cfm', JSON.stringify(postData), function (data) {
			
			var response = JSON.parse(data);
			/*console.log(response.success);
			console.log(response.message);*/
			
			$('.saved-time table').remove();
			$('.saved-time p').text(response.message);
			if(window.innerWidth <= 768) {
				if(window.innerWidth < 440) {
					
					var _w = window.innerWidth - 40; 
					$('.saved-time').attr('style','display: block; position: absolute; top: 65px; left: 20px; width: '+_w+'px; padding: 15px;'); 
				 } else  {
					 
					 var tt = (window.innerWidth - 400)/2;
					 $('.saved-time').attr('style','display: block; position: absolute; top: 65px; left: '+tt+'px; width: 400px; padding: 15px;'); 
					 
				 }
			} else {
				var tt = (window.innerWidth - 400)/2;
				$('.saved-time').attr('style','display: block; position: absolute; top: 85px; left: '+tt+'px; width: 400px; padding: 15px;'); 
			}
			$('.saved-time').show();
			$('.disable').show();
			
        });
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	