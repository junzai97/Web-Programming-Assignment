var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var config1 = {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Books Own',
      backgroundColor: window.chartColors.red,
      borderColor: window.chartColors.red,
      data: [
        5, 10, 20, 40, 50, 70,100
      ],
      fill: false,
    }, {
      label: 'Loans Activity',
      fill: false,
      backgroundColor: window.chartColors.blue,
      borderColor: window.chartColors.blue,
      data: [
        1,2,3,4,5,6,9
      ],
    }]
  },
  options: {
    responsive: true,
    /*title: {
      display: true,
      text: ''
    },*/
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: false, // axis varries according to data
          labelString: 'Value'
        }
      }]
    }
  }
};

var config2 = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        6,7,8,3
      ],
      backgroundColor: [
        window.chartColors.red,
        window.chartColors.orange,
        window.chartColors.yellow,
        window.chartColors.green,
        window.chartColors.blue,
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Fantasy',
      'Sci-Fi',
      'Mystery',
      'Romance',
    ]
  },
  options: {
    responsive: true
  }
};

var config3 = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        4,1,3,1
      ],
      backgroundColor: [
        window.chartColors.red,
        window.chartColors.orange,
        window.chartColors.yellow,
        window.chartColors.green,
        window.chartColors.blue,
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Fantasy',
      'Sci-Fi',
      'Mystery',
      'Romance',
    ]
  },
  options: {
    responsive: true
  }
};

window.onload = function() {
  var ctx1 = document.getElementById('canvas').getContext('2d');
  var ctx2 = document.getElementById('chart-area').getContext('2d');
  var ctx3 = document.getElementById('chart-area2').getContext('2d');
  window.myLine = new Chart(ctx1, config1);
  window.myPie = new Chart(ctx2, config2)
  window.myPie = new Chart(ctx3, config3)
};
