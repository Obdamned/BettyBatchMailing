/*
If you want to use the script, type the send_email() function name into the
Chrome console and the script will run automatically. Be aware that sometimes
that Hubspot loads to slow, and that you need to reactivate the script.
*/

function send_email() {

  //Click the Email button.
  setTimeout(function(){
    var j = document.getElementsByClassName('private-tabs__list');
    var je = j[0].getElementsByTagName('a');
    je[1].click();

    //Click the Sequences button.
    setTimeout(function(){
      var s = document.getElementsByClassName('editor-body');
      var se = s[0].getElementsByTagName('li');
      se[1].childNodes[0].childNodes[0].click();

      //Click the first email sequence.
      setTimeout(function(){
        var p = document.getElementsByClassName('sales-modal-content')[0]
        .getElementsByTagName('tbody')[0].childNodes[0].getElementsByTagName('button')[0].click();

        //Click the 'Start sequence'-button.
        setTimeout(function() {
          var c = document.getElementsByClassName('uiButton private-button private-button--default private-button--primary m-right-3 private-hoverable private-button--non-link');
          c[0].click();

          //Click the 'Start anyway'-button.
          setTimeout(function() {
            var b = document.getElementsByClassName('private-button__link')
            [document.getElementsByClassName('private-button__link').length - 1].click();

            //Click 'Next'-button on the Queue-page.
            setTimeout(function() {
              document.getElementsByClassName('uiLinkWithoutUnderline')[0].click();
              send_email ();
            }, 2000)
          }, 3000);
        }, 2000);
      }, 6000);
    }, 4000);
  }, 1000);
}
