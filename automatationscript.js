setTimeout(function(){
  var j = document.getElementsByClassName('private-tabs__list');
  var je = j[0].getElementsByTagName('a');
  je[1].click();

  setTimeout(function(){
    var s = document.getElementsByClassName('editor-body');
    var se = s[0].getElementsByTagName('li');
    se[1].childNodes[0].childNodes[0].click();

    setTimeout(function(){
      var p = document.getElementsByClassName('private-typeahead-results');
      p[0].getElementsByTagName('li')[15].childNodes[0].click();

      setTimeout(function() {
        var c = document.getElementsByClassName('btn uiButton private-button private-button--default private-button--primary btn-primary m-right-3');
        c[0].click();

        setTimeout(function() {
          var b = document.getElementsByClassName('private-button__link')[14].click();

          setTimeout(function() {
            document.getElementsByClassName('uiLinkWithoutUnderline')[0].click()
          }, 2000)
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 3000);
