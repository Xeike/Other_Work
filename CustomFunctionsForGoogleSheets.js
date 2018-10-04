function ACTIVEDATEDURATION(lookupDate, range, firstDateColumnNumber, lastDateColumnNumber, durationIDColumnNumber, includesHeaders ) {
  var count = 0;
  var fdci = firstDateColumnNumber - 1;
  var ldci = lastDateColumnNumber - 1;
  var didci = durationIDColumnNumber - 1;
  var arr = range;
  for (var rows = includesHeaders ; rows < arr.length; rows++) {
    if (arr[rows][didci] == 1) {
      if (lookupDate >= arr[rows][fdci]) {
        if (lookupDate <= arr[rows][ldci]) {
          count = count + 1;
        }}}
  };
  return count;
}

function SEVENREMAINE(dateToLookup, range, firstDateColumnNumber, lastDateColumnNumber ) {
  var count = 0;
  var lookupDate = dateToLookup;
  var arr = range;
  var fdci = firstDateColumnNumber - 1;
  var ldci = lastDateColumnNumber - 1;
  var millisPerDay = 86400000;
  for (var rows = 1; rows < arr.length; rows++) {
    var startDate = arr[rows][fdci];
    var endDate = arr[rows][ldci];
    var durMS = endDate - lookupDate + millisPerDay;
    var duration = durMS / millisPerDay;
    if (lookupDate >= startDate && lookupDate <= endDate && duration <= 7) {
      count = count + 1;
    }
  };
  return count;
}

function EIGHTREMAINE(dateToLookup, range, firstDateColumnNumber, lastDateColumnNumber ) {
  var count = 0;
  var lookupDate = dateToLookup;
  var arr = range;
  var fdci = firstDateColumnNumber - 1;
  var ldci = lastDateColumnNumber - 1;
  var millisPerDay = 86400000;
  for (var rows = 1; rows < arr.length; rows++) {
    var startDate = arr[rows][fdci];
    var endDate = arr[rows][ldci];
    var durMS = endDate - lookupDate + millisPerDay;
    var duration = durMS / millisPerDay;
    if (lookupDate >= startDate && lookupDate <= endDate && duration >= 8) {
      count = count + 1;
    }
  };
  return count;
}