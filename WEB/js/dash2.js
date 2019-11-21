//console.log('app.js');
"use strict";
"use strict";

var ctx = document.getElementById('mixedChart');
var barChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Bar Dataset',
      data: [10, 20, 30, 40]
    }, {
      label: 'Line Dataset',
      data: [50, 50, 50, 50],
      // Changes this dataset to become a line
      type: 'line'
    }],
    labels: ['January', 'February', 'March', 'April']
  },
  options: {}
});
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
      borderWidth: [4, 8, 1, 2, 1, 3] //borderSkipped: 'right', // not working

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
      display: true,
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

var ctx = document.getElementById('bubbleChart');
var barChart = new Chart(ctx, {
  type: 'bubble',
  data: {
    //labels: ['Louis', 'Carlos', 'Mike'],
    datasets: [{
      label: 'Data',
      data: [{
        x: 1.5,
        y: 1.5,
        r: 5
      }, {
        x: 4,
        y: 2,
        r: 20
      }, {
        x: 7,
        y: 3,
        r: 10
      }],
      backgroundColor: ['rgba(255, 99, 132, 0.75)', 'rgba(54, 162, 235, 0.75)', 'rgba(255, 206, 86, 0.75)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 2,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }]
  }
}); // backgroundColor: [
//   'rgba(255, 99, 132, 0.75)',
//   'rgba(54, 162, 235, 0.75)',
//   'rgba(255, 206, 86, 0.75)',
// ],
// borderColor: [
//   'rgba(255, 99, 132, 1)',
//   'rgba(54, 162, 235, 1)',
//   'rgba(255, 206, 86, 1)',
// ],
// borderWidth: 2,
"use strict";

var ctx = document.getElementById('doughnutChartMulti');
var doughnutChartMulti = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Favorite color',
      data: [12, 20, 3, 15, 6, 3],
      backgroundColor: ['rgba(255, 99, 132, 0.75)', 'rgba(54, 162, 235, 0.75)', 'rgba(255, 206, 86, 0.75)', 'rgba(75, 192, 192, 0.75)', 'rgba(153, 102, 255, 0.75)', 'rgba(255, 159, 64, 0.75)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 2
    }, {
      label: 'Favorite color',
      data: [2, 8, 10, 8, 9, 6],
      backgroundColor: ['rgba(255, 99, 132, 0.75)', 'rgba(54, 162, 235, 0.75)', 'rgba(255, 206, 86, 0.75)', 'rgba(75, 192, 192, 0.75)', 'rgba(153, 102, 255, 0.75)', 'rgba(255, 159, 64, 0.75)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 2
    }]
  } // options: {
  // }

});
"use strict";

var ctx = document.getElementById('doughnutChart');
var doughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Favorite color',
      data: [12, 20, 3, 15, 6, 3],
      backgroundColor: ['rgba(255, 99, 132, 0.75)', 'rgba(54, 162, 235, 0.75)', 'rgba(255, 206, 86, 0.75)', 'rgba(75, 192, 192, 0.75)', 'rgba(153, 102, 255, 0.75)', 'rgba(255, 159, 64, 0.75)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 2
    }]
  },
  options: {}
});
"use strict";

var ctx = document.getElementById('lineChart');
var lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Dave', 'Jim', 'Sue', 'Sam', 'Kate', 'Corey'],
    datasets: [{
      label: 'Miles ran',
      data: [12, 10, 3, 0, 2, 3],
      backgroundColor: ['rgba(255, 255, 255, 0)'],
      borderColor: ['rgba(255, 99, 132, 1)'],
      borderWidth: 1 //showLine: false,

    }, {
      label: '# Glasses of water per day',
      data: [13, 5, 10, 9, 8, 4],
      backgroundColor: ['rgba(150, 0, 255, 0.2)'],
      borderColor: ['rgba(0, 99, 132, 1)'],
      borderWidth: 3,
      borderCapStyle: 'square',
      borderDash: [7, 9],
      //borderDashOffset: 600,
      //borderJoinStyle: 'bevel',
      lineTension: 0 //stright

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

var ctx = document.getElementById('polarAreaChart');
var barChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 20, 13, 15, 12, 3],
      backgroundColor: ['rgba(255, 99, 132, 0.75)', 'rgba(54, 162, 235, 0.75)', 'rgba(255, 206, 86, 0.75)', 'rgba(75, 192, 192, 0.75)', 'rgba(153, 102, 255, 0.75)', 'rgba(255, 159, 64, 0.75)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 2
    }]
  },
  options: {// scales: {
    //   yAxes: [{
    //     ticks: {
    //       beginAtZero: true
    //     }
    //   }]
    // }
  }
});
"use strict";

var ctx = document.getElementById('radarChart');
var radarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Favorite color',
      data: [12, 20, 3, 15, 10, 3],
      backgroundColor: ['rgba(155, 155, 132, 0.75)'],
      borderColor: ['rgba(0, 99, 132, 1)'],
      borderWidth: 1
    }]
  },
  options: {// scales: {
    //     yAxes: [{
    //         ticks: {
    //             beginAtZero: true
    //         }
    //     }]
    // }
  }
});
"use strict";

var ctx = document.getElementById('scatterChart');
var scatterChart = new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Scatter Dataset',
      data: [{
        x: -5,
        y: 0
      }, {
        x: 4,
        y: 3
      }, {
        x: 10,
        y: 5
      }]
    }]
  },
  options: {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }]
    }
  }
});