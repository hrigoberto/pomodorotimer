$(document).ready(function() {
  var $start = $('#start');
  var $minutes = $('#minutes');
  var $seconds = $('#seconds');
  var $breakBtn = $('#break');

  $start.on('click',startCountdown);
  $breakBtn.on('click',startBreak);

    function startBreak(){
      $minutes.text('05');
      $seconds.text('00');
      startCountdown();
    }

  function startCountdown(){
  var countdown =  setInterval(function(){
      var secondsVal = +$seconds.text();
      var minutesVal = +$minutes.text();
        if(secondsVal === 0 && minutesVal === 0){
          $breakBtn.removeClass('disabled');
          $breakBtn.removeAttr('disabled');
          clearInterval(countdown);
          return;
        }
      // plus sign makes it behave like a number
        if(secondsVal === 0) {
          $minutes.text(minutesVal - 1);
          $seconds.text(59);
        } else {
          if(secondsVal <= 10){
            $seconds.text('0' + (secondsVal-1));
          }else {
            $seconds.text(secondsVal - 1);
          }
        }
    }, 1000);
  }


});
