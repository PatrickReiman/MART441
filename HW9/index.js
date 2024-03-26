function jQuerytest(){
    $
      $.getJSON("test.json").success(function(result) {
          $.each(result, function(i, field) {
               $("div")
                .append("<p>" + field + "</p>");
          });
      })
      .error(function(error){
          console.log(error);
      });
}