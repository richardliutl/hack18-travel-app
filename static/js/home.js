var submitPlaces = function(from_place, to_place) {
  var xmlHttp = new XMLHttpRequest(); // object to make GET request
  xmlHttp.onreadystatechange = function() { // function that is called once we get the response
    responseText = xmlHttp.responseText;
    if(responseText.substring(0,5) == "Error") {
      console.log(responseText);
    }
    else {
      var price_data = JSON.parse(this.responseText);
      console.log(price_data)
      if(updateGraph(price_data)) {
        window.scrollTo(0,document.body.scrollHeight);
      }
    }
  };
  var requestUrl = `api/places?from_place=${from_place}&to_place=${to_place}`;
  xmlHttp.open('GET', requestUrl, true);
  xmlHttp.send(null);
  if(from_place.length>0 && to_place.length>0) {
    updateGraph([[0,0,0],[0,0,0]]);
  }
}

var updateGraph = function(price_data) {
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

  return 1;
};
  
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();

    var from_place = document.getElementById("from_place").value;
    var to_place = document.getElementById("to_place").value;
    submitPlaces(from_place, to_place);
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('graph').addEventListener('click', function() {
//     updateGraph([[0,0], [0,0]]);
//   });
// });