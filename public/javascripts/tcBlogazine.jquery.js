(function($){
  $.fn.tcBlogazine = function(options) {
    var defaults = {
      pageHeight : 1050
    }
    settings = $.extend({}, defaults, options);
    
    makeColumns();
    
    function makeColumns() {            
      var i = 1;
      var firstCol = $("#col");
      var firstColText = $("#col .text");
      var colHeight = settings.pageHeight;
      var textHeight = firstColText.height();
      var heightDiff = - (textHeight + (colHeight - textHeight) + 1);
      var pageCount = (Math.ceil(textHeight/colHeight));
      
      for ( i = 1; i < pageCount; i++) {
        var newCol = "col" + i;
        var page = "<div class='page-break'></div><div id='page" + i + "' class='page'> </div>"
        var newPage = "";
        var newColText = "#" + newCol + " .text";
        var textMove = heightDiff * (i);
        
        if (isEven(i) == true) {
          $("#content").append(page);
          newPage = "#page" + i;
        } else {
          newPage = "#page" + (i - 1);
        };
        
        firstCol.clone().appendTo($(newPage)).attr("id", newCol);
        $(newColText).css("margin-top", textMove);
      }
    }
    
    function isEven(num) {
      return !(num % 2);
    }   
  }
})(jQuery);
