
var ctx = document.getElementById('myChart').getContext('2d');
let today='20.12'
Chart.defaults.global.elements.point.borderWidth=2
Chart.defaults.global.elements.line.tension=0


var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['14.12', '15.12', '16.12', '17.12', '18.12', '19.12', today],
        datasets: [ {
            // label: 'מגמת שינוי במאומתים חדשים וקצב הכפלה',
            backgroundColor: 'rgb(199, 255, 252)',
            borderColor: 'rgb(0, 179, 170)',
            // fill:3,
            data: [3, 4, 9, 7, 6, 6, 3]
            
            
            
            
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
               gridLines: {
                  display: false
               }
            }]
         },legend:
         {
             display: false
         }
    }
});


var ctx2 = document.getElementById('myChart2').getContext('2d');

var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',
    

    // The data for our dataset
    data: {
        labels: ['14.12','', '16.12','', '18.12','','20.12'],
        datasets: [ {
            // label: 'מגמת שינוי במאומתים חדשים וקצב הכפלה',
            backgroundColor: 'rgb(105, 169, 170)',
            borderColor: 'rgb(0, 179, 170)',
            // fill:3,
            data: [385, 390, 406, 434, 453, 473, 455]
            
            
            
            
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
               gridLines: {
                  display: false
               },
               ticks:{
                   beginAtZero:true
               }
            }]
         },
            legend:
         {
             display: false
         }
    }
});

// 
// 

var ctx3 = document.getElementById('myChart3').getContext('2d');

var chart3 = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'bar',
    
    // The data for our dataset
    data: {
        labels: ['13.12','14.12', '15.12','16.12', '17.12','18.12','19.12'],
        datasets: [ {
            // label: 'מגמת שינוי במאומתים חדשים וקצב הכפלה',
            backgroundColor: 'rgb(182, 202, 81)',
            borderColor: 'rgb(0, 179, 170)',
            // fill:3,
            data: [1485, 2016, 2557, 2420, 2418, 2489, 1594]
            
            
            
            
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               },
               barThickness: 6
            }],
            yAxes: [{
               gridLines: {
                  display: false
               },
               ticks:{
                   beginAtZero:true
               }
            }]
         },
            legend:
         {
             display: false
         }
    }
});
// 

var ctx4 = document.getElementById('myChart4').getContext('2d');

var chart4 = new Chart(ctx4, {
    // The type of chart we want to create
    type: 'bar',
    
    // The data for our dataset
    data: {
        datasets: [{
            label: 'מחלימים חדשים',
            data: [150000, 180000, 230000, 180000,100000,270000,40000],
            // this dataset is drawn below
            order: 1,backgroundColor: 'rgb(137 137 137)'
        },{
            label: 'מאומתים חדשים',
            data: [350000, 350000, 350000, 350000,20000,350000,80000],
            // this dataset is drawn below
            order: 1,backgroundColor:'rgb(28, 125, 126)'
        }, {
            label: 'מאומתים מצטבר ',
            data: [355200, 355800, 355260, 355700,355200,355200,355200],
            type: 'line',
            // this dataset is drawn on top
            order: 2,backgroundColor:'rgb(72, 202, 255)'
        }],
        labels: ['15.12', '16.12', '17.12', '18.12', '19.12', '20.12', '21.12']
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               },
               barThickness: 6
            }],
            yAxes: [{
               gridLines: {
                  display: false
               },
               ticks:{
                   beginAtZero:true
               }
            }]
         }
        //     legend:
        //  {
        //      display: false
        //  }
    }
});
// 
var ctx5 = document.getElementById('myChart5').getContext('2d');

var chart5 = new Chart(ctx5, {
    // The type of chart we want to create
    type: 'bar',
    
    // The data for our dataset
    data: {
        datasets: [{
            label: 'מאומתים חדשים',
            data: [384, 390, 420, 450,430,470,480],
            type: 'line',
            // this dataset is drawn below
            order: 1,
            borderColor: 'rgb(182, 202, 81)',
            backgroundColor:'rgb(28, 125, 126,0.1)'
        }, {
            label: 'מאומתים מצטבר ',
            data: [96, 96, 100, 96,97,96,96],
            type: 'line',
            // this dataset is drawn on top
            order: 2,
            
            borderColor: 'rgb(80, 203, 253)',
            backgroundColor:'rgb(72, 202, 255,0.0)'
        }],
        labels: ['15.12', '16.12', '17.12', '18.12', '19.12', '20.12', '21.12']
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               },
               barThickness: 6
            }],
            yAxes: [{
               gridLines: {
                  display: false
               },
               ticks:{
                   beginAtZero:true
               }
            }]
         }
        //     legend:
        //  {
        //      display: false
        //  }
    }
});

// 
