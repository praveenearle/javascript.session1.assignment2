function showTime() {
  var timeNow = new Date();
  var hours   = timeNow.getHours();
  var minutes = timeNow.getMinutes();
  
  var timeString = "" + ((hours > 12) ? hours - 12 : hours);
  timeString  += ((minutes < 10) ? ":0" : ":") + minutes;
  document.htmlClock.timeField.value = timeString;
  timerID = setTimeout("showTime()", 1000);
}