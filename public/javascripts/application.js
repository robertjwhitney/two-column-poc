$(document).ready(function() {
  $('.intro').editable(function(value, settings) { 
       console.log(this);
       console.log(value);
       console.log(settings);
       return(value);
    }, { 
       type    : 'textarea',
       cssclass : 'intro',
       submit  : 'OK',
   });
 $('h1').editable(function(value, settings) { 
      console.log(this);
      console.log(value);
      console.log(settings);
      return(value);
   }, { 
      type    : 'textarea',
      cssclass : 'title',
      submit  : 'OK',
  });
  $('p').editable(function(value, settings) { 
       console.log(this);
       console.log(value);
       console.log(settings);
       return(value);
    }, { 
       type    : 'textarea',
       cssclass : 'paragraph',
       submit  : 'OK',
   });
});