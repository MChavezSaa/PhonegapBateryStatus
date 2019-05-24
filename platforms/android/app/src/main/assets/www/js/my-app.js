// Initialize app
var myApp = new Framework7();
  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    console.log("Tipo de red: "+navigator.connection.type);

    window.addEventListener('batterystatus', function(status){
      console.log("Battery Level Low " + status.level + "%");
    
    },false);
});

// Init top demo gauge
var demoGauge = app.gauge.create({
  el: '.demo-gauge',
  type: 'circle',
  value: 0.5,
  size: 250,
  borderColor: '#7c00b2',
  borderWidth: 30,
  valueText: '50%',
  valueFontSize: 41,
  valueTextColor: '#7c00b2',
  labelText: 'amount of something',
});

// Change demo gauge on button click
$$('.button').on('click', function () {
  var value = $$(this).attr('data-value');
  demoGauge.update({
    value: value / 100,
    valueText: value + '%'
  });
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
})