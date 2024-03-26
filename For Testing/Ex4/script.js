let currentLat = 0;
let tempLat = 0;
let num = 0;
let count = 0;

$(document).ready(function () {
  $('#json').click(function () {
      $.getJSON("http://api.open-notify.org/iss-now.json", function (data) {
          currentLat = data.iss_position.latitude;
          console.log(currentLat);
          target = currentLat;
        });
      $.getJSON("https://raw.githubusercontent.com/PatrickReiman/MART441/main/HW9/cities.json", function (value) {
          tempLat = value[num].Latitude
          console.log(findClosest(value, target));
          console.log("count: " + count);
      });
  });
  });


function findClosest(value, target){
    let n = value.length; // correctly working


    // Corner cases
    if (target <= value[0].Latitude)
      console.log("first");
      return value[0].Latitude;
    if (target >= value[n - 1].Latitude)
      console.log("second");
      return value[n - 1].Latitude; 

    console.log("here?");
    // Doing binary search 
    let i = 0, j = n, mid = 0;
    while (i < j) {
      count++;
        mid = (i + j) / 2;
 
        if (value[mid].Latitude == target)
            return value[mid].Latitude;
 
        // If target is less than array 
        // element,then search in left 
        if (target < value[mid].Latitude)
        {
      
            // If target is greater than previous
            // to mid, return closest of two
            if (mid > 0 && target > value[mid - 1].Latitude) 
                return getClosest(value[mid - 1].Latitude, value[mid].Latitude, target);
               
            // Repeat for left half 
            j = mid;              
        }
 
        // If target is greater than mid
        else
        {
            if (mid < n - 1 && target < value[mid + 1].Latitude) 
                return getClosest(value[mid].Latitude, value[mid + 1].Latitude, target);                
            i = mid + 1; // update i
        }
    }
 
    console.log("here?");
    // Only single element left after search
    return value[mid].Latitude;
}
 
// Method to compare which one is the more close
// We find the closest by taking the difference
//  between the target and both values. It assumes
// that val2 is greater than val1 and target lies
// between these two.
function getClosest(val1, val2, target) {
    if (target - val1 >= val2 - target) 
        return val2;        
    else
        return val1;        
}