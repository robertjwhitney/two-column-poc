$(document).ready(function() {
  $('.intro').editable(function(value, settings) { 
       console.log(this);
       console.log(value);
       console.log(settings);
       return(value);
    }, { 
       type      : "test",
       submit    : 'OK',
       cancel    : 'Cancel',
       tooltip   : "Click to edit...",
       onblur    : "ignore",
       markitup  : markitupHTML
   });
    $.editable.addInputType('test', {
        element : $.editable.types.textarea.element,
        plugin  : function(settings, original) {
            $('textarea', this).markItUp(settings.markitup);
        }
    });
});