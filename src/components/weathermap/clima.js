function getGeo(callback) {
    
    var latitiude=null,
        longitude=null;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        latitude= position.coords.latitude;
        longitude=position.coords.longitude;
        console.log(latitude, longitude);
        link = 'api.openweathermap.org/data/2.5/weather?lat={'+latitude+'}&lon={'+longitude+'} ';
        //this will pass link to the callback function
        callback(link);
      });
    };
  };
  
  //alertMsg recieves the link from getGeo when used as a callback
  //THIS IS THE FUNCTION I WANT TO CHANGE
  function alertMsg(data) {
    data = $.getJSON(data);
  };
  
  //callback from getGeo to alertMsg when button is clicked
  document.getElementById("action-button-id").addEventListener("click", function(){
    getGeo(alertMsg);
  });