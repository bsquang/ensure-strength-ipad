var user = {
  'name':'NguyenDongQuang',
  'age':1984,
  'sex':0
}

var total = {
    'pull': 44   
}


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


$(".panel").css({
  'min-height':'768px'
})

calPTLK(1);
createArrayGrid()
createAreaColor();

function createAreaColor(){
  
}

function createArrayGrid(){
  for(var i=0; i< 17;i++){
	
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
  var heightBAR;
  
  if (percent < 100) {
    $("#battery-result").html('Pin thể lực của bạn <100%');
    heightBAR = 163 * percent / 100;
  }else if (percent >= 100) {
    $("#battery-result").html('Pin thể lực của bạn đạt 100%');
    heightBAR = 163;
  }
  
  $('#percent-bar-text').hide();
  setTimeout(function(){
	$('#percent-bar-text').fadeIn(500);
  },3000);
  $('#percent-bar-text').text(Math.round(percent)+"%"); 
  
  $('.energy-item').height(20);
  
  setTimeout(function(){
	
	 $('.energy-item').height(heightBAR);
	
  }, 200)
  
}


function checkPTLK() {
  document.activeElement.blur();
  $(window).scrollTop(0);
  
  user.name = $("#input-user-name").val();
  user.age = $("#input-user-birth").val();
  user.sex = $("#select-user-gender").val();
  
  calPTLK(1);
  
  gotoPanel(2);
}

function nextBUTTON() {
    
  $(window).scrollTop(0);

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
    
    if (total.pull < middlePULL) {
	  
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
        console.log("defaultPull:"+ total.pull + " " + lessIndex + " age:" + age1[lessIndex] + " default:" + defaultPull[lessIndex]);
      
      }else{
        
        $('#age-popup-text').text(age_temp);  
        
      }
      
    }
    else{
      $('#age-popup-text').text(age_temp);
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