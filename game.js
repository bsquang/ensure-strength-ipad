var url_sync = 'http://www.lamhongdata.com/ensure/';
var employee_data = {
  
  'id':'0',
  'name':'name',
  'channel':'',
  'shop_id':'',
  'team':''
  
};

checkEMPLOYEE();

function checkEMPLOYEE(){
  if (localStorage.employee_data == undefined ||
	  localStorage.employee_data == '[]') {
	
    localStorage.setItem('employee_data','[]')
	
	$(".panel[bsq-id=100]").show();
	
  }else{    
    var temp = JSON.parse(localStorage.employee_data);
	employee_data = temp;
	
	$(".panel[bsq-id=100]").hide();
	$(".panel[bsq-id=1]").show();
	
	$("#select-employee-channel2").val(employee_data.channel);
	$("#select-employee-team2").val(employee_data.team);
	$("#input-employee-shopid2").val(employee_data.shop_id);
	
	$("#employee-info-nameid").html(employee_data.id +" : "+employee_data.name);
	
	
  }
} 
function regEMPLOYEE(){
  
  if ($("#input-employee-id").val() != '' &&
	  $("#input-employee-name").val() != '' &&
	  $("#select-employee-channel").val() != '' &&
	  $("#input-employee-shopid").val() != '' &&
	  $("#select-employee-team").val() != ''
  ) {
	
	employee_data.id = $("#input-employee-id").val();
	employee_data.name = $("#input-employee-name").val();
	employee_data.channel = $("#select-employee-channel").val();
	employee_data.team = $("#select-employee-team").val();
	employee_data.shop_id = $("#input-employee-shopid").val();
	
	localStorage.employee_data = JSON.stringify(employee_data);
	
	$(".panel[bsq-id=100]").hide();
	$(".panel[bsq-id=1]").show();
  
  }
}
function clearEmployeeData(){
  localStorage.removeItem('employee_data');
}
function saveEmployeeData2(){
  if (
	  $("#select-employee-channel2").val() != '' &&
	  $("#select-employee-team2").val() != '' &&
	  $("#input-employee-shopid2").val() != ''
  ) {
	
	
	//$("#select-employee-channel option:selected").text()
	
	employee_data.channel = $("#select-employee-channel2").val();
	employee_data.team = $("#select-employee-team2").val();
	employee_data.shop_id = $("#input-employee-shopid2").val();
	
	localStorage.employee_data = JSON.stringify(employee_data);
	
	alert("Xong!");
  
  }
}

function controlBUTTON() {
  var employee_pass = '123456';
  var supervisor_pass = '654321';
  
  var result = prompt("Nhập vào password");
  
  if (result == supervisor_pass) {
	
	$("#input-employee-id2").val(employee_data.id);
	$("#input-employee-name2").val(employee_data.name);
	
	$(window).scrollTop(0);
	gotoPanel(101);
	
  }else if (result == employee_pass) {
	
	$(window).scrollTop(0);
	gotoPanel(8);
	
  }else{
	
	alert("Sai password !")
	
  }
  
}

function editEMPLOYEE(){
  if ($("#input-employee-id2").val() != '' &&
	  $("#input-employee-name2").val() != ''
	  
  ) {
	
	employee_data.id = $("#input-employee-id2").val();
	employee_data.name = $("#input-employee-name2").val();	
	
	localStorage.employee_data = JSON.stringify(employee_data);
	
	alert("Xong!")
  
  }
}


var list_data_user_created = []; // User data-add
var list_data_autocomplete = []; // Sync data-autocomplete
var list_data_local = []; // User data-local


var heightBARIMG = 202;
var user = {
  'name':'NguyenDongQuang',
  'age':1984,
  'sex':0,
  'phone':123456789,
  'address':"here",
  'type':"0",
  'milkType':"0",
  'dateCreated':getCurrentDateCreated()
}

//3 manh 2 tb 1 yeu

var total = {
    'pull': 44,
	'pullType':1,
	'agePull':22,
	'percent':50
}

function getCurrentDateCreated() {
  
  var current = new Date();
  return (current.getMonth()+1)+"/"+current.getDate()+"/"+current.getFullYear()+" "+current.getHours()+":"+current.getMinutes()+":"+current.getSeconds();
  
}


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


$(".panel").css({
  'min-height':'768px'
})

//calPTLK(1);

var cntstep2 = 0;
function stepAnimation2() {
  if (cntstep2 == 0) {
	$("#end-01-ele-01").css({
	  'width':'50%'
	})
  }
  if (cntstep2 == 1) {
	$('#end-01-ele-02').fadeIn();
  }
  
  if (cntstep2 == 2) {
	$("#end-01-slider-01-01").fadeIn();
  }
  if (cntstep2 == 3) {
	$("#end-01-slider-01-02").fadeIn();
  }
  if (cntstep2 == 4) {
	$("#end-01-slider-01-03").fadeIn();
  }
  if (cntstep2 == 5) {
	$("#end-01-slider-01-04").fadeIn();
  }
  if (cntstep2 == 6) {
	$("#end-01-slider-01-05").fadeIn();
  }
  
  if (cntstep2 == 7) {
	$("#end-01-ele-01").css({
	  'width':'100%'
	})
  }
  if (cntstep2 == 8) {
	$('#end-01-ele-03').fadeIn();
  }

  
  if (cntstep2 == 9) {
	$("#end-01-slider-02-01").fadeIn();
  }
  if (cntstep2 == 10) {
	$("#end-01-slider-02-02").fadeIn();
  }
  if (cntstep2 == 11) {
	$("#end-01-slider-02-03").fadeIn();
  }
  if (cntstep2 == 12) {
	$("#end-01-slider-02-04").fadeIn();
  }
  if (cntstep2 == 13) {
	$("#end-01-slider-02-05").fadeIn();
  }
  
  
  if (cntstep2 >= 13) {
	
	setTimeout(function(){
	  
	  $("#end-01-button-next").css({
		'opacity':'1'
	  })
	  
	}, 300);
	
	
  }else{
	
	cntstep2 += 1;
	
  }
}

$("#panel-06").click(function(){
  
  stepAnimation2();
  
})

var bANIEND02 = false;
function aniEND02() {
  
  if (!bANIEND02) {
  
	//$("#end-01-ele-01").css({
	//  'width':'50%'
	//})
	
	
	//$('#end-01-ele-02').delay(1000).fadeIn();
	//$('#end-01-ele-04').delay(2000).fadeIn();
	
	//setTimeout(function(){
	//  $("#end-01-ele-01").css({
	//  'width':'100%'
	//  });
	//},3000);
	
	
	//$('#end-01-ele-03').delay(4000).fadeIn();
	//$('#end-01-ele-05').delay(5000).fadeIn();
	//
	//setTimeout(function(){
	//  $('#end-01-button-next').css({
	//  'opacity':'1'
	//  });
	//},6000);
  
	bANIEND02 = true; 
  
  }
  
}

var countEnd02 = 0;

var bANIEND03 = false;
function aniEND03() {
  
  if (!bANIEND03) {
	$('#end-02-ele-man').delay(300).fadeIn();
	
	for(var i=1;i<11;i++){
	  
	  $('#end-02-ele-'+i).delay(1000 + (i*100)).fadeIn();  
	  
	}
	
	$('#end-02-button-01')
	.delay(3000)
	.queue( function(next){
	  
	  $('#end-02-button-01').fadeIn();
	  
	  $('#end-02-button-01').addClass('animated2')
	  $('#end-02-button-01').css({	  
		//'-webkit-transform': 'scale(0.6)',
		'opacity': '0.6',
	  })
	  
	  $('#end-02-button-01').click(function(){	  
	  
		if (countEnd02 < 2) {
		  countEnd02 += 1;
		}
		
		if (countEnd02 == 1) {
		  $('#end-02-button-02').fadeIn();
		  $('#end-02-button-02').click(function(){randomHIDEElement()});
		}else if (countEnd02 == 2) {
		  $('#end-02-button-03').fadeIn();
		  $('#end-02-button-03').click(function(){randomHIDEElement()});
		}	  
		
	  })
	  
	  for(var i=1;i<11;i++){
		
		$('#end-02-ele-'+i).addClass('animated2')
		$('#end-02-ele-'+i).css({
		'opacity' : '1'
		})
		
	  }
	 
	  next(); 
	});
	
	
	//$('#end-02-button-01').delay(3000).fadeIn();
	
	
	
  
	bANIEND03 = true;
  
  }
  
}

$("#end-03-button-01").click(function(){
  aniEND04();
})

var tempELEMENTs = [0,0,0,0,0,0];

function injectionBAR(id){
  
  $('#end-03-ele-0'+id).css({
	'top':'460px',
	'left':'370px',
	'opacity':'0'
  })
  
  tempELEMENTs[id-1] = 1;
  checkELEMENT();
}

function checkELEMENT() {
  if (tempELEMENTs[0]+tempELEMENTs[1]+tempELEMENTs[2]+tempELEMENTs[3]+tempELEMENTs[4]+tempELEMENTs[5] == 6) {
	$("#end-03-button-next").show();
	
	$("#end-bar-inside").css({
	  'height':heightBARIMG+'px'
	});
	
	$('#end-bar-inside-text').text(100+"%");
  }
}

var bANIEND04 = false;
function aniEND04() {
  
  if (!bANIEND04) {
	for(var i=1;i<7;i++){
		
		$('#end-03-ele-0'+i).addClass('animated-1s')
		
		$('#end-03-ele-0'+i)
		.delay(50 * i)
		.queue( function(next){ 
		  $(this).css({
			'top':'290px'
		  })
		  next(); 
		});
		
		//var templeft = (i*150) + "px";
		//
		//$('#end-03-ele-0'+i)
		//.delay(1000+200 * i)
		//.queue( function(next){
		//  
		//  $(this).css({
		//	'left':templeft
		//	//'top':'460px',
		//	//'opacity':'0'
		//  })
		//  next(); 
		//});
	}
	
	var padLeft = 100;
	var offsetX = 100;
	var paddingX = 10;
	
	$('#end-03-ele-01')
	.delay(1000+200 * 1)
	.queue( function(next){
	  
	  var templeft = padLeft+(1*(offsetX+paddingX)) + "px";
	  $(this).css({
		'left':templeft
		//'top':'460px',
		//'opacity':'0'
	  })
	  next(); 
	});
	$('#end-03-ele-02')
	.delay(1000+200 * 2)
	.queue( function(next){
	  
	  var templeft = padLeft+(2*(offsetX+paddingX)) + "px";
	  $(this).css({
		'left':templeft
		//'top':'460px',
		//'opacity':'0'
	  })
	  next(); 
	});
	$('#end-03-ele-03')
	.delay(1000+200 * 3)
	.queue( function(next){
	  
	  var templeft = padLeft+(3*(offsetX+paddingX)) + "px";
	  $(this).css({
		'left':templeft
		//'top':'460px',
		//'opacity':'0'
	  })
	  next(); 
	});
	
	$('#end-03-ele-04')
	.delay(1000+200 * 4)
	.queue( function(next){
	  
	  var templeft = padLeft+(4*(offsetX+paddingX)) + "px";
	  $(this).css({
		'left':templeft
		//'top':'460px',
		//'opacity':'0'
	  })
	  next(); 
	});
	
	$('#end-03-ele-05')
	.delay(1000+200 * 5)
	.queue( function(next){
	  
	  var templeft = padLeft+(5*(offsetX+paddingX)) + "px";
	  $(this).css({
		'left':templeft
		//'top':'460px',
		//'opacity':'0'
	  })
	  next(); 
	});
	
	$('#end-03-ele-06')
	.delay(1000+200 * 6)
	.queue( function(next){
	  
	  var templeft = padLeft+(6*(offsetX+paddingX)) + "px";
	  $(this).css({
		'left':templeft
		//'top':'460px',
		//'opacity':'0'
	  })
	  next(); 
	});
	
	$("#end-bar-inside").addClass('animated-1s')
	 
		
	
	
	bANIEND04 = true;
  }
}

var countRandomElement = 1;
function randomHIDEElement() {
  
//  var numberRand = getRandomInt(1,10);
//  
//  if($('#end-02-ele-'+numberRand).css('opacity') == 1){
//	$('#end-02-ele-'+numberRand).css({
//	'opacity' : '0.5',
//	'-webkit-transform':'scale(0.7)'
//	})
//  }else{
//	countRandomElement += 1;
//	if (countRandomElement < 11) {
//	  randomHIDEElement();
//	}
//	
//  }

  
  if (countRandomElement < 11) {
	$('#end-02-ele-'+countRandomElement).css({
	'opacity' : '0.5',
	'-webkit-transform':'scale(0.7)'
	})
  
	countRandomElement += 1;
  }
  
  $('#end-02-button-next').show();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createArrayGrid(){
  for(var i=0; i< 16;i++){
	
	var posEnd = {'x':63+(i*40), 'y':0};
	createLine(posEnd,520);
	
  }
  
}

function createLine(pos, height) {
  $('#container-pull').line(pos.x, pos.y, pos.x, height, {color:"rgb(194, 194, 194)", zindex:33});
}

setTimeout(function(){ $($(".panel[bsq-id=1]").find('input')[0]).focus() } , 300);

var current = 1;
function gotoPanel(id){
  
  //if (id == 5) {
  //  setTimeout(function(){ $($(".panel[bsq-id=5]").find('input')).focus() } , 300);
  //}

  $(".panel").hide();
  $(".panel[bsq-id="+id+"]").show();
  
  current = id;
}

function calBattery(currentPull, maxPull){  
  
  var percent = currentPull * 100 / maxPull;
  
  total.percent = percent;
  
  var heightBAR;
  
  if (percent < 100) {
    $("#battery-result").html('Pin thể lực của bạn <100%');
    heightBAR = heightBARIMG * percent / 100;
  }else if (percent >= 100) {
	
	percent = 100;
	total.percent = percent;
	
    $("#battery-result").html('Pin thể lực của bạn đạt 100%');
    heightBAR = heightBARIMG;
  }
  
  if (percent <= 40) {
	
	$("#end-03-button-01")[0].src = "resources/end/CUP-04.png";
  
  }else if (percent <= 70 && percent >= 41) {
	
	$("#end-03-button-01")[0].src = "resources/end/CUP-03.png";
  
  }else if (percent >= 71) {
	
	$("#end-03-button-01")[0].src = "resources/end/CUP-02.png";
	
  }
//  }else if (percent <= 95 && percent >= 71) {
//	
//	$("#end-03-button-01")[0].src = "resources/end/CUP-02.png";
//	
//  }else if (percent >= 96) {
//	
//	$("#end-03-button-01")[0].src = "resources/end/CUP-01.png";
//	
//  }
  
  $('#percent-bar-text').hide();
  setTimeout(function(){
	$('#percent-bar-text').fadeIn(500);
  },3000);
  $('#percent-bar-text').text(Math.round(percent)+"%"); 
  
  $('.energy-item').height(20);
  
  setTimeout(function(){
	
	 $('.energy-item').height(heightBAR);
	 
	 //MINIBAR
	var heightBAR2 = heightBARIMG * total.percent / 100;
	$("#end-bar-inside").css({
	 'height' : heightBAR2 + 'px'
	})
	$('#end-bar-inside-text').text(Math.round(percent)+"%"); 
	
  }, 200)
  
}


function checkPTLK() {
  document.activeElement.blur();
  $(window).scrollTop(0);
  
  user.name = $("#input-user-name").val();
  user.age = $("#input-user-birth").val();
  user.sex = $("#select-user-gender").val();
  
  user.phone = $("#input-user-phone").val();
  user.address = $("#input-user-address").val();  
  
  calPTLK(1);
  
  //saveDataUser();
  
  gotoPanel(2);
}

function nextBUTTON() {
    
  $(window).scrollTop(0);
  
  if (current == 2) {
	
	if (total.percent > 95) {
	  $('#end-bar').show();
	  current = 5; 
	  //gotoPanel(current);  
	
	}else{
	
	  $('#end-bar').show();
	  
	  var temp = "Với thể lực tương ứng ở tuổi "+getAge(user.age)+", bạn đang bị suy giảm sức khỏe hậu quả dễ thấy nhất là:";
	  $("#end-01-ele-02").text(temp);
	  
	  setTimeout(function(){ aniEND02(); } , 200 );
	
	  
	}
	
	
  }
  if (current == 2) {
	
	var tempAge = getAge(user.age);
	
	if (tempAge < 60) {
	  $("#result-01").show();
	}else{
	  $("#result-02").show();
	}
	
  }
  if (current == 4) {
	setTimeout(function(){ aniEND03(); } , 200 );	
  }
  if (current == 5) {
	
	//var heightBAR = heightBARIMG * total.percent / 100;
	//$("#end-bar-inside").css({
	//  'height' : heightBAR + 'px'
	//})
	
	$("#end-bar").css({
	  'top' : '430px',
	  'left' : '370px',
	  '-webkit-transform':'scale(1)'
	})
	
	
	//setTimeout(function(){ aniEND04(); } , 200 );
  }
  if (current == 6) {
	$('#end-bar').hide();
  }
  
  if (current == 7) {
	current = 101;
  }

  current += 1; 
  gotoPanel(current);  
   
}


function prevBUTTON() {
  
  $(window).scrollTop(0);
  document.activeElement.blur();
  
  current -= 1; 
  gotoPanel(current);  
  
  
}

$('#input-pull').change(function(){        
  
  var temp = $('#input-pull').val();    
  total.pull = bsqStringToNumber(temp);
  
  $("#td-pull").html(total.pull);
  
  showButtonPTLK();

});

function showButtonPTLK() {
  
  $("#button-ptlk").show();
  
}

function calPTLK(type) {
  
    var divTarget;
	if (type == 1) {
	  divTarget = $("#container-pull");
	}else if (type == 2) {
	  divTarget = $("#mini-lk");
	}
	
	divTarget.html('');
    
    var age1 = ['11', '13', '15', '17', '19', '24', '29', '34', '39', '44', '49', '54', '59', '64', '69', '82'];
    
    var age = ['10-11', '12-13', '14-15', '16-17', '18-19', '20-24', '25-29', '30-34', '35-39',
               '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-82'];
    
    var age_temp = getAge(user.age);
    var user_pulls = [];
    var user_pull_data = (total.pull);    
    
    var currentPOS = 0;
    
    for (var i = 0; i < age.length; i++) {
        if (age_temp <= age1[i]) {
          
          currentPOS = i;
          
            user_pulls[i] = {
                y: user_pull_data,
                marker: {
                    symbol: 'url(sun.png)'
                }
            }
            break;
        } else {
            user_pulls.push('');
        }
    }
    
  var weaks_male = [12.6,19.4,28.5,32.6,35.7,36.8,37.7,36.0,35.8,35.5,34.7,32.9,30.7,30.2,28.2,21.3];    
  var strongs_male = [22.4,31.2,44.3,52.4,55.5,56.6,57.5,55.8,55.6,55.3,54.5,50.7,48.5,48.0,44.0,35.1];
  var default_male = [];
  
  for(var i=0;i<weaks_male.length;i++){
    default_male[i] = (weaks_male[i]+strongs_male[i])/2;
  } 

  var weaks_female = [11.8,14.6,15.5,17.2,19.2,21.5,25.6,21.5,20.3,18.9,18.6,18.1,17.7,17.2,15.4,14.7];  
  var strongs_female = [21.6,24.4,27.3,29.0,31.0,35.3,41.4,35.3,34.1,32.7,32.4,31.9,31.5,31.0,27.2,24.5];
  var default_female = [];
  
  for(var i=0;i<weaks_female.length;i++){
    default_female[i] = (weaks_female[i]+strongs_female[i])/2;
  }
 

    var strongs = [];          
    var weaks = [];
    var defaultPull = [];
    
    if (user.sex == '0') {
      strongs = strongs_male;
      weaks = weaks_male;
      defaultPull = default_male;
    }else if (user.sex == '1') {
      strongs = strongs_female;
      weaks = weaks_female;
      defaultPull = default_female;
    }
    
    var middlePULL = defaultPull[currentPOS];
    var maxPULL = strongs[currentPOS];
    
    
    calBattery(total.pull,maxPULL);
    
    var oldPOINT = 0;
    var oldPOINTs = [];
    
    var lessIndex = -1;
    var oldCalLess = 0;
	
	total.agePull = total.pull;
    
    if (total.pull < middlePULL) {
	  
	  total.pullType = 1;
	  
	  if (total.pull < defaultPull[defaultPull.length-1]) {
		
		lessIndex = defaultPull.length-1;
		oldPOINT = lessIndex;
		
	  }else{

		for (var i = 0; i < defaultPull.length; i++) {
			
			if(age1[i] > age1[currentPOS]){
			  
			  if (total.pull >= defaultPull[i]) {
				
				
				
				if (oldCalLess == 0) {
				  
				  oldCalLess = defaultPull[i] - total.pull;
				  lessIndex = i;
				  
				}else{
				  
				  var calLess = defaultPull[i] - total.pull;
				  if (calLess > oldCalLess) {
					lessIndex = i;
				  }
				  
				}
				
			  }
			  
			}
		}
	  
	  }
            
      
      if (lessIndex >= 0) {        
      
        oldPOINT = lessIndex;
        for(var count=0;count<(oldPOINT);count++)
        {
          oldPOINTs.push('');
        }
        oldPOINTs[i] = {
            y: defaultPull[oldPOINT]
        }
        
        $('#age-popup-text').text(age1[lessIndex]);
		
		total.agePull = age1[lessIndex];
        //console.log("defaultPull:"+ total.pull + " " + lessIndex + " age:" + age1[lessIndex] + " default:" + defaultPull[lessIndex]);
      
      }else{
        
        $('#age-popup-text').text(age_temp);  
        total.agePull = age_temp;
      }
      
    }
    else{
      $('#age-popup-text').text(age_temp);
    }
    
	if (total.pull >= middlePULL && total.pull < maxPULL) {
	  total.pullType = 2;
	}
	
	if (total.pull >= maxPULL) {
	  total.pullType = 3;
	}
	

    divTarget.highcharts({
        chart: {
			backgroundColor: 'transparent',
            type: 'spline'
        },
        title: {
            text: null,            
        },

        xAxis: {
            categories: age
        },
        yAxis: {
            max: 90,
            min: 0,
            title: {
                text: 'Lực kéo (KG)'
            },
            labels: {
                formatter: function() {
                    return this.value;
                }
            }
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            },
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Mạnh',
            data: strongs,
            color: '#32BF49'

        },{
            name: 'Bình thường',
            marker: {
                symbol: 'diamond'
            },
            data: defaultPull,
            color: '#0C2E59'
        },{
            name: 'Bạn',            
            data: user_pulls,
            
        },{
            name: 'Yếu',
            marker: {
                symbol: 'diamond'
            },
            data: weaks,
            color: '#FF5362'
        },{
            name: 'Age',            
            data: oldPOINTs,
            
        }]
    }, function(chart){
      
      var pos = user_pulls.length - 1;
      
      var pos_user = user_pull_data;
      var pos_strongs = strongs[pos];
      var pos_weaks = weaks[pos];
      
      var tempDIV = "Mạnh: " + pos_strongs;
      tempDIV += "<br>";
      tempDIV += "<b>Bạn: " + pos_user;
      tempDIV += "</b><br>";
      tempDIV += "Yếu: " + pos_weaks;
      
      if (oldPOINT > 0) {
        var point = chart.series[4].data[oldPOINTs.length-1];
        var position = {
          'x':point.plotX + chart.plotLeft,
          'y':point.plotY + chart.plotTop
        }
        chart.renderer.circle(position.x, position.y, 10).attr({
            fill: '#FCFFC5',
            stroke: 'black',
            'stroke-width': 1
        }).add();
		
		console.log(point);
		
		var posEnd = {'x':point.plotX+60, 'y':point.plotY +10};
		$('#container-pull').line(640, 190, posEnd.x, posEnd.y, {color:"red", zindex:999});
		
		//$('#container-pull').line(posEnd.x, posEnd.y, posEnd.x-10, posEnd.y-10, {color:"red", zindex:33});
		//$('#container-pull').line(posEnd.x, posEnd.y, posEnd.x+10, posEnd.y-10, {color:"red", zindex:33});
      }
      
    
      var point = chart.series[2].data[pos];
      
      var text = chart.renderer.text(
        tempDIV,
        point.plotX + chart.plotLeft - 145,
        point.plotY + chart.plotTop).attr({ zIndex: 5 }).add();
      
      box = text.getBBox();
      
      
      var position = {
        'x':point.plotX + chart.plotLeft,
        'y':point.plotY + chart.plotTop
      }
          
      chart.renderer.circle(position.x, position.y, 10).attr({
          fill: '#FCFFC5',
          stroke: 'black',
          'stroke-width': 1
      }).add();
      
      var pos_box={
        'x':box.x - 5,
        'y':box.y - 5
      }
      
      chart.renderer.path(['M', position.x, position.y,
                           'L', pos_box.x, pos_box.y,
                           'L', pos_box.x, pos_box.y+10,
                           'L', position.x, position.y,
                           'Z'])
            .attr({
                'stroke-width': 1,
                stroke: 'gray',
                fill: '#FFFFEF'
            })
            .add();
      
      chart.renderer.rect(pos_box.x, pos_box.y, box.width + 10, box.height + 10, 5)
          .attr({
              'font-size':'16px',
              fill: '#FFFFEF',
              stroke: 'gray',
              'stroke-width': 1,
              zIndex: 4
          })
          .add();
    
    });
    
	createArrayGrid();
	
    divTarget.find("text").last().hide();
	
	$(".highcharts-container").css({
	  'z-index' : 999
	})
	
	$(".energy-bar").fadeIn();
}

function bsqStringToNumber(content){
  var temp = content;    
  temp = '{"a":'+temp+'}';    
  temp = JSON.parse(temp);    
  return temp.a;
}
function getAge(yearOfBirth) {
    var currentYear = new Date().getFullYear();
    return currentYear - parseInt(yearOfBirth);
}

function refreshPage() {
  window.location.href = '';
}

////////////////////////////////////////////////
initData();
function initData() {
  if (localStorage.list_data_user_created == undefined) {    
    localStorage.setItem('list_data_user_created','[]')    
  }else{    
    var temp = JSON.parse(localStorage.list_data_user_created);
    list_data_user_created = temp;
	
	showListUser();
  }
}

function clearData() {
  localStorage.list_data_user_created = "[]";
}

function saveDataUser(){  
  var temp_user = {
    'customer': user,
    'record':total          
  };
  
  list_data_user_created.push(temp_user);  
  localStorage.list_data_user_created = JSON.stringify(list_data_user_created);  
  
  console.log("Save data done!");
  console.log(temp_user);
  
  showListUser()
  
  //list_data_local.push(user);    
  //save2LocalStorage();
  
  
  // Update to autocomplete and dat_local when new user and new phone
  
  
  
  //var bExist = false;
  //for(var i=0;i<list_data_local.length;i++)
  //{
  //  var temp = list_data_local[i];
  //  if (temp.phone == user.phone) {
  //    bExist = true;
  //    break;
  //  }
  //}
  //
  //if (bExist == false) {            
  //  list_data_local.push(user);    
  //  save2LocalStorage();
  //}
  
}

function save2LocalStorage() {
  //Data local
  var data_json = JSON.stringify(list_data_local);
  localStorage.list_data_local = data_json;         
}

function syncData() {  
  
  var sync_data = {
	
	'employeeData' : employee_data,
	'userData' : list_data_user_created	
	
  }
  
  var data_json = JSON.stringify(sync_data);
  
  //
  $.ajax({
      type: "POST",
      url: url_sync+"ajax.php?",
      data: {
          'action': 'sync',
          'data': data_json
      },
      success: function (msg) {
          var temp = JSON.parse(msg);
          
		  if(temp.result=='1') {		
            alert('Đã gởi dữ liệu xong!');

            list_data_user_created = [];
			localStorage.list_data_user_created = JSON.stringify(list_data_user_created);
			
			showListUser();
			$("#panel-list-user").hide();
 
          }
      }
  });
  
}


//INIT DATA LOCAL
initDataLocal();
function initDataLocal(){
  if (localStorage.list_data_local == undefined) {    
    localStorage.setItem('list_data_local','[]')    
  }else{    
    var temp = JSON.parse(localStorage.list_data_local);
	list_data_local = temp;    
  }
}
function data2Local(data){
  list_data_local = data;
  
  var data_json = JSON.stringify(list_data_local);
  localStorage.list_data_local = data_json; 
}


function showListUser(){
  
  $("#listUserContent").html('')
  
  for(var i=0; i<list_data_user_created.length ; i++){
	
	var tempUSER = list_data_user_created[i].customer;
	var tempRecord = list_data_user_created[i].record;
	
	var gender = '';
	if (tempUSER.sex == "0") {
	  gender = "Nam";
	}else{
	  gender = "Nữ";
	}
	
	var resultType='';
	switch(tempUSER.type){
	  case 0: resultType="New User"; break;
	  case 1: resultType="Current User"; break;
	  case 2: resultType="Non-User"; break;
	}
	
	
	var tempDIV = "<tr>"
	+"<td>"+i+"</td>"
	+"<td>"+tempUSER.name+"</td>"
	+"<td>"+tempUSER.age+"</td>"	
	+"<td>"+gender+"</td>"
	+"<td>"+tempUSER.phone+"</td>"
	+"<td>"+tempUSER.address+"</td>"
	+"<td>"+Math.round(tempRecord.pull)+"</td>"
	+"<td>"+Math.round(tempRecord.percent)+"%</td>"
	+"<td>"+resultType+"</td>"
	+"<td>"+tempUSER.dateCreated+"</td>"
	+"</tr>";
	
	$("#listUserContent").append(tempDIV);
  }
}

function testDATA(count){
  for(var i=0; i< count;i++){
	saveDataUser();
  }
}

function clearAllData() {
  
  var result = confirm("Bạn có chắc chắn muốn xóa tất cả dữ liệu này ?");
  if (result) {
	list_data_user_created = [];
	localStorage.list_data_user_created = JSON.stringify(list_data_user_created);
	
	showListUser();
  }
  
}


function viewReport() {
  $("#panel-list-user").toggle();
  $("#panel-employee-info").hide();
}

function viewEmployeeInfo(){
  $("#panel-employee-info").toggle();
  $("#panel-list-user").hide();
}

function setUserMilk(type){
  user.milkType = type;
  nextBUTTON();
}
function setUser(type){
  user.type = type;
  
  saveDataUser();
  
  refreshPage();
}