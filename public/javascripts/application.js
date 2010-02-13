//copyright 2010 Robert J Whitney
$(document).ready(function(){
  var i = 1;
  //select the first Col, and its text
    var firstCol = $("#col");
    var firstColText = $("#col .text");
  //find the Col height
    var colHeight = 1050;
  //find the text height
    var textHeight = firstColText.height();
  //calculate their difference
    var heightDiff = - (textHeight + (colHeight - textHeight) + 1);
  //calculate a page count
    var pageCount = (Math.ceil(textHeight/colHeight));
  //while i is greater than the page count
    for ( i = 1; i < pageCount; i++) {
      //create a new div id of Col + i
      var newCol = "col" + i;
      //create page
      var page = "<div class='page-break'></div><div id='page" + i + "' class='page'> </div>"
      //declare a new page
      var newPage = "";
      //figure out which newPage to place column in
      if (isEven(i) == true) {
          $("#content").append(page);
          newPage = "#page" + i;
        } else {
          newPage = "#page" + (i - 1);
        };
      //select the text
      var newColText = "#" + newCol + " .text";
      //create the Col
      firstCol.clone().appendTo($(newPage)).attr("id", newCol);
      //calculate how much to move text
      var textMove = heightDiff * (i);
      //move the text
      $(newColText).css("margin-top", textMove);
    }
      function isEven(num) {
        return !(num % 2);
      }
});