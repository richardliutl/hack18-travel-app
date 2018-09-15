var updateGraph = function() {
    var xmlHttp = new XMLHttpRequest(); // object to make GET request
    xmlHttp.onreadystatechange = function() { // function that is called once we get the response
      var price_data = JSON.parse(xmlHttp.responseText);
    //   var price_data = xmlHttp.responseText.slice(1, -1);
      console.log(price_data)
      console.log(price_data[0])
      console.log(price_data[1])
    //   document.getElementById('fun-fact').innerHTML = response;
      var data = {
        labels: price_data[0],
        datasets: [{
            label: "Dataset #1",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: price_data[1],
        }]
        };

        var options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
            stacked: true,
            gridLines: {
                display: true,
                color: "rgba(255,99,132,0.2)"
            }
            }],
            xAxes: [{
            gridLines: {
                display: false
            }
            }]
        }
        };

        Chart.Line('chart', {
        options: options,
        data: data
        });
    };
    xmlHttp.open('GET', 'api/places', true);
    xmlHttp.send(null);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('graph').addEventListener('click', function() {
        updateGraph();
    });
  });

  var updateGraph = function() {
    var xmlHttp = new XMLHttpRequest(); // object to make GET request
    xmlHttp.onreadystatechange = function() { // function that is called once we get the response
      var price_data = JSON.parse(xmlHttp.responseText);
    //   var price_data = xmlHttp.responseText.slice(1, -1);
      console.log(price_data)
      console.log(price_data[0])
      console.log(price_data[1])
    //   document.getElementById('fun-fact').innerHTML = response;
    };
    xmlHttp.open('GET', 'api/places', true);
    xmlHttp.send(null);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function() {
        submitPlaces();
    });
  });
  

// /*
//  * JavaScript file for the application to demonstrate
//  * using the API
//  */

// // Create the namespace instance
// let ns = {};

// // Create the model instance
// ns.model = (function() {
//     'use strict';

//     let $event_pump = $('body');

//     // Return the API
//     return {
//         'read': function() {
//             let ajax_options = {
//                 type: 'GET',
//                 url: 'api/places',
//                 accepts: 'application/json',
//                 dataType: 'json'
//             };
//             $.ajax(ajax_options)
//             .done(function(data) {
//                 $event_pump.trigger('model_read_success', [data]);
//             })
//             .fail(function(xhr, textStatus, errorThrown) {
//                 $event_pump.trigger('model_error', [xhr, textStatus, errorThrown]);
//             })
//         },
//         submit: function(from_place, to_place) {
//             let ajax_options = {
//                 type: 'POST',
//                 url: 'api/people',
//                 accepts: 'application/json',
//                 contentType: 'application/json',
//                 dataType: 'json',
//                 data: JSON.stringify({
//                     'from_place': from_place,
//                     'to_place': to_place
//                 })
//             };
//             $.ajax(ajax_options)
//             .done(function(data) {
//                 $event_pump.trigger('model_create_success', [data]);
//             })
//             .fail(function(xhr, textStatus, errorThrown) {
//                 $event_pump.trigger('model_error', [xhr, textStatus, errorThrown]);
//             })
//         }
//     };
// }());

// // Create the view instance
// ns.view = (function() {
//     'use strict';

//     let $from_place = $('#from_place'),
//         $to_place = $('#to_place');

//     // return the API
//     return {
//         reset: function() {
//             $lname.val('');
//             $fname.val('').focus();
//         },
//         build_table: function(people) {
//             let rows = ''

//             // clear the table
//             $('.people table > tbody').empty();

//             // did we get a people array?
//             if (price_data) {
//                 var data = {
//                     labels: price_data[0],
//                     datasets: [{
//                       label: "Dataset #1",
//                       backgroundColor: "rgba(255,99,132,0.2)",
//                       borderColor: "rgba(255,99,132,1)",
//                       borderWidth: 2,
//                       hoverBackgroundColor: "rgba(255,99,132,0.4)",
//                       hoverBorderColor: "rgba(255,99,132,1)",
//                       data: price_data[1],
//                     }]
//                   };
                  
//                   var options = {
//                     maintainAspectRatio: false,
//                     scales: {
//                       yAxes: [{
//                         stacked: true,
//                         gridLines: {
//                           display: true,
//                           color: "rgba(255,99,132,0.2)"
//                         }
//                       }],
//                       xAxes: [{
//                         gridLines: {
//                           display: false
//                         }
//                       }]
//                     }
//                   };
                  
//                   Chart.Line('chart', {
//                     options: options,
//                     data: data
//                   });
//             }
//         },
//         error: function(error_msg) {
//             $('.error')
//                 .text(error_msg)
//                 .css('visibility', 'visible');
//             setTimeout(function() {
//                 $('.error').css('visibility', 'hidden');
//             }, 3000)
//         }
//     };
// }());

// // Create the controller
// ns.controller = (function(m, v) {
//     'use strict';

//     let model = m,
//         view = v,
//         $event_pump = $('body'),
//         $from_place = $('#from_place'),
//         $to_place = $('#to_place');

//     // Get the data from the model after the controller is done initializing
//     setTimeout(function() {
//         model.read();
//     }, 100)

//     // Validate input
//     function validate(from_place, to_place) {
//         return from_place !== "" && to_place !== "";
//     }

//     // Create our event handlers
//     $('#submit').click(function(e) {
//         let from_place = $from_place.val(),
//             to_place = $to_place.val();

//         e.preventDefault();

//         if (validate(from_place, to_place)) {
//             model.create(from_place, to_place)
//         } else {
//             alert('Problem with first or last name input');
//         }
//     });

//     // $('#update').click(function(e) {
//     //     let from_place = $from_place.val(),
//     //         to_place = $to_place.val();

//     //     e.preventDefault();

//     //     if (validate(from_place, to_place)) {
//     //         model.update(from_place, to_place)
//     //     } else {
//     //         alert('Problem with first or last name input');
//     //     }
//     //     e.preventDefault();
//     // });

//     $('#reset').click(function() {
//         view.reset();
//     })

//     // $('table > tbody').on('dblclick', 'tr', function(e) {
//     //     let $target = $(e.target),
//     //         from_place,
//     //         to_place;

//     //     from_place = $target
//     //         .parent()
//     //         .find('td.from_place')
//     //         .text();

//     //     to_place = $target
//     //         .parent()
//     //         .find('td.to_place')
//     //         .text();

//     //     view.update_editor(from_place, to_place);
//     // });

//     // Handle the model events
//     $event_pump.on('model_read_success', function(e, data) {
//         view.build_table(data);
//         view.reset();
//     });

//     $event_pump.on('model_create_success', function(e, data) {
//         model.read();
//     });

//     $event_pump.on('model_update_success', function(e, data) {
//         model.read();
//     });

//     $event_pump.on('model_delete_success', function(e, data) {
//         model.read();
//     });

//     $event_pump.on('model_error', function(e, xhr, textStatus, errorThrown) {
//         let error_msg = textStatus + ': ' + errorThrown + ' - ' + xhr.responseJSON.detail;
//         view.error(error_msg);
//         console.log(error_msg);
//     })
// }(ns.model, ns.view));