$(document).ready(function() {

  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });

  $('#code-show').hide();

  $('form').submit(function() {
    var to = $('#emailto').val();
    var from = $('#youremail').val();
    var modCode = insertCode(to, from);

    if(modCode) {

      $('#code-show').fadeIn();
      $('#absent-btn').attr('href', modCode.absent);
      $('#late-btn').attr('href', modCode.late);

      $('#absent pre').text(modCode.absent);
      $('#late pre').text(modCode.late);

    }
    return false;
  })

  function insertCode(to, from) {
    if(to && from) {
      var absentCode = 'javascript:(function(){for(var subjectLine="Absent Students from " + document.querySelector("#reactApplication > div > div > header > div > div:nth-child(2) > div").innerHTML, absents = document.querySelectorAll("img[src=\'/be0f7a34ef27e82a28e9005115e57754.png\']"), bodyLine = [ "Todays date is " + new Date().toDateString()+" and these students are absent today:" ], i = 0; i < absents.length - 1; i++) {var fname = absents[i].parentElement.parentElement.previousSibling.firstChild.firstChild.innerHTML, lname=absents[i].parentElement.parentElement.previousSibling.lastChild.firstChild.innerHTML;bodyLine.push(fname+" "+lname);}if(bodyLine.length===1){bodyLine.push("No absent students.")}window.location.href="mailto:'+to+'?bcc='+from+'&subject="+subjectLine+"&body="+ bodyLine.join(", ");})()';


      var lateCode = 'javascript:(function(){for(var subjectLine="Absent Students from " + document.querySelector("#reactApplication > div > div > header > div > div:nth-child(2) > div").innerHTML, absents = document.querySelectorAll("img[src=\'/a88b6d72d410a8cea1d8ab18a04c44d4.png\']"), bodyLine = [ "Todays date is " + new Date().toDateString()+" and these students are late today:" ], i = 0; i < absents.length - 1; i++) {var fname = absents[i].parentElement.parentElement.previousSibling.firstChild.firstChild.innerHTML, lname=absents[i].parentElement.parentElement.previousSibling.lastChild.firstChild.innerHTML;bodyLine.push(fname+" "+lname);}if(bodyLine.length===1){bodyLine.push("No late students.")}window.location.href="mailto:'+to+'?bcc='+from+'&subject="+subjectLine+"&body="+ bodyLine.join(", ");})()';

      return {absent: absentCode, late: lateCode};

    } else {
      return null;
    }
  }

});