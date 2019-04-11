// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require activestorage
//= require turbolinks
//= require_tree
//= require jquery
//= require jquery_ujs

//= require_tree ./channels
// require_tree .

var counter = 1;
function addInput(divName){
  var newdiv = document.createElement('div');
  newdiv.innerHTML = "Phone Number" + `<br><input type='text' name='ph_number${counter}' >`;
  document.getElementById(divName).appendChild(newdiv);
  window.scrollTo(0,document.body.scrollHeight);
  counter++;
}

function myFunction() {
  var myForm = document.getElementById('endParty');
 var result = confirm("Are you sure you want to kick all party animals out of this party?");
   if (result) {
      myForm.submit();
   }else {
     event.preventDefault();
   }

}



$(document).ready(function() {
  $('.testclass').click(function(event) {
    event.preventDefault();

    var value = $('.phone_input').val()
    fetch(`/invite?ph_number=${value}`, {
      method: 'post',
      body: JSON.stringify({
        ph_number: '7206832645'
      })
    })
  });
});












//     var myForm = $('#endParty');
//     confirm("Are you sure you want to kick all party animals out of this party?");
//     if (result) {
//        myForm.submit();
//     }else {
//       event.preventDefault();
//       window.location="/dashboard";
//     }
