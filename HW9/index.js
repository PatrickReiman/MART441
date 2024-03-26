$(document).ready(function() { 
    $("#button").click(function(event){
       $.getJSON('test.json', function(jd) {
          $('#container').html('<p> Name: ' + jd.name + '</p>');
          $('#container').append('<p>Age : ' + jd.age+ '</p>');
          $('#container').append('<p> Sex: ' + jd.sex+ '</p>');
       });
    });  
 });