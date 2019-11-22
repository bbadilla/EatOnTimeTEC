//console.log('app.js');
"use strict";
"use strict";



// Image
var img = new Image(); //img.src = 'http://localhost:3000/dist/img/diagonal_black_30-4x4.png';
//img.src = 'http://yak.la/public/images/site/_hero/carcosa_00.jpg';
// img.onload = function () {
//var fillPattern = ctx.createPattern(img, 'repeat'); //not working
// };

var ctx = document.getElementById('barChart');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
      label: 'Numero de compras',
      data: [12, 20, 3, 5, 2, 3],
      backgroundColor: ['red', '#fff000', '#0000ff', '#ff33ff', 'salmon', 'rgba(255, 99, 132, 0.75)'],
      borderColor: ['#000000', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: [2, 2, 2, 2, 2, 2] //borderSkipped: 'right', // not working

    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: 'black',
          fontFamily: 'Montserrat',
          fontSize: '14'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: 'black',
          fontFamily: 'Montserrat',
          fontSize: '18'
        }
      }]
    },
    title: {
      display: false,
      text: 'This chart has a custom title',
      fontColor: 'gold'
    },
    animation: {
      duration: 5100,
      easing: 'easeInOutQuart'
    },
    legend: {
      labels: {
        fontColor: 'white',
        fontFamily: 'Montserrat',
        //fontSize: '12',
        fontStyle: 'bold'
      }
    }
  }
});
"use strict";






var ctx = document.getElementById('lineChart');
var lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
      label: 'Colones en descuentos',
      data: [5, 10, 10, 17, 18, 18],
      backgroundColor: ['rgba(255, 255, 255, 0)'],
      borderColor: ['rgba(255, 99, 132, 1)'],
      borderWidth: 1 //showLine: false,

    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
"use strict";




var ctx = document.getElementsByClassName("chartjs-gauge1");
var chart = new Chart(ctx, {
    type:"doughnut",
    data: {
        labels : ["Gastado [M]","Disponible [M]"],
        datasets: [{
            label: "Gauge",
            data : [29, 100],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)"
            ]
        }]
    },
    options: {
        circumference: Math.PI,
        rotation : Math.PI,
        cutoutPercentage : 80, // precent
        plugins: {
					  datalabels: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
						  borderColor: '#ffffff',
              color: function(context) {
							  return context.dataset.backgroundColor;
						  },
						  font: function(context) {
                var w = context.chart.width;
                return {
                  size: w < 512 ? 18 : 20
                }
              },
              align: 'start',
              anchor: 'start',
              offset: 10,
						  borderRadius: 4,
						  borderWidth: 1,
              formatter: function(value, context) {
							  var i = context.dataIndex;
                var len = context.dataset.data.length - 1;
                if(i == len){
                  return null;
                }
							  return value+' mph';
						  }
            }
        },
        legend: {
            display: true
        },
        tooltips: {
            enabled: true
        }
    }
});

var ctx = document.getElementsByClassName("chartjs-gauge2");
var chart = new Chart(ctx, {
    type:"doughnut",
    data: {
        labels : ["Positivas","Negativas"],
        datasets: [{
            label: "Gauge",
            data : [100, 190],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)"
            ]
        }]
    },
    options: {
        circumference: Math.PI,
        rotation : Math.PI,
        cutoutPercentage : 80, // precent
        plugins: {
					  datalabels: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
						  borderColor: '#ffffff',
              color: function(context) {
							  return context.dataset.backgroundColor;
						  },
						  font: function(context) {
                var w = context.chart.width;
                return {
                  size: w < 512 ? 18 : 20
                }
              },
              align: 'start',
              anchor: 'start',
              offset: 10,
						  borderRadius: 4,
						  borderWidth: 1,
              formatter: function(value, context) {
							  var i = context.dataIndex;
                var len = context.dataset.data.length - 1;
                if(i == len){
                  return null;
                }
							  return value+' mph';
						  }
            }
        },
        legend: {
            display: true
        },
        tooltips: {
            enabled: true
        }
    }
});

var ctx = document.getElementsByClassName("chartjs-gauge3");
var chart = new Chart(ctx, {
    type:"doughnut",
    data: {
        labels : ["Activos","Desconectados"],
        datasets: [{
            label: "Gauge",
            data : [100, 190],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)"
            ]
        }]
    },
    options: {
        circumference: Math.PI,
        rotation : Math.PI,
        cutoutPercentage : 80, // precent
        plugins: {
					  datalabels: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
						  borderColor: '#ffffff',
              color: function(context) {
							  return context.dataset.backgroundColor;
						  },
						  font: function(context) {
                var w = context.chart.width;
                return {
                  size: w < 512 ? 18 : 20
                }
              },
              align: 'start',
              anchor: 'start',
              offset: 10,
						  borderRadius: 4,
						  borderWidth: 1,
              formatter: function(value, context) {
							  var i = context.dataIndex;
                var len = context.dataset.data.length - 1;
                if(i == len){
                  return null;
                }
							  return value+' mph';
						  }
            }
        },
        legend: {
            display: true
        },
        tooltips: {
            enabled: true
        }
    }
});

var ctx = document.getElementsByClassName("chartjs-gauge4");
var chart = new Chart(ctx, {
    type:"doughnut",
    data: {
        labels : ["Positivas","Negativas"],
        datasets: [{
            label: "Gauge",
            data : [100, 190],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)"
            ]
        }]
    },
    options: {
        circumference: Math.PI,
        rotation : Math.PI,
        cutoutPercentage : 80, // precent
        plugins: {
					  datalabels: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
						  borderColor: '#ffffff',
              color: function(context) {
							  return context.dataset.backgroundColor;
						  },
						  font: function(context) {
                var w = context.chart.width;
                return {
                  size: w < 512 ? 18 : 20
                }
              },
              align: 'start',
              anchor: 'start',
              offset: 10,
						  borderRadius: 4,
						  borderWidth: 1,
              formatter: function(value, context) {
							  var i = context.dataIndex;
                var len = context.dataset.data.length - 1;
                if(i == len){
                  return null;
                }
							  return value+' mph';
						  }
            }
        },
        legend: {
            display: true
        },
        tooltips: {
            enabled: true
        }
    }
});
