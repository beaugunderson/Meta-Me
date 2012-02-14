var baseUrl = false;

$(function() {
   if (baseUrl === false) {
      window.alert("Couldn't find your locker, you might need to add a config.js (see https://me.singly.com/Me/devdocs/)");
   }

   $('#birth-year').hinty();

   $('#save').click(function() {
      $.post(baseUrl + '/push/meta-me', {
         data: [{
            obj: {
               id: 'birth-date',
               birthMonth: $('#birth-month').val(),
               birthDay: $('#birth-day').val(),
               birthYear: $('#birth-year').val()
            }
         }]
      }, function success(data) {
         console.log('success', data);
      });
   });
});
