/*
If you want to use the script, type the send_email() function name into the
Chrome console. The script will run and you will have to do nothing.

The 'cas'-variable can be set to zero/0 by default because of the 'recent'-preset in the sequences list. If your list is filtered to 
'all', you can change the 'cas'-variable.
*/

function send_email() {
  var cas = 1;
  cas - 1;

  setTimeout(function(){
    var j = document.getElementsByClassName('private-tabs__list');
    var je = j[0].getElementsByTagName('a');
    je[1].click();

    setTimeout(function(){
      var s = document.getElementsByClassName('editor-body');
      var se = s[0].getElementsByTagName('li');
      se[1].childNodes[0].childNodes[0].click();

      setTimeout(function(){
        var p = document.getElementsByClassName('sales-modal-content')[0].getElementsByTagName('tbody')[0].childNodes[cas].getElementsByTagName('button')[0].click();
        // p.getElementsByTagName('tbody')[0].childNodes[cas].click();

        setTimeout(function() {
          var c = document.getElementsByClassName('btn uiButton private-button private-button--default private-button--primary btn-primary m-right-3');
          c[0].click();

          setTimeout(function() {
            var b = document.getElementsByClassName('private-button__link')[document.getElementsByClassName('private-button__link').length - 1].click();

            setTimeout(function() {
              document.getElementsByClassName('uiLinkWithoutUnderline')[0].click();
              send_email ();
            }, 2000)
          }, 2000);
        }, 2000);
      }, 2000);
    }, 1000);
  }, 1000);
}
