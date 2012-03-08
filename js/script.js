var baseUrl = false;

function postJSON(url, data, success) {
   $.ajax({
      url: url,
      type: "POST",
      data: data,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: success
   });
}

$(function() {
   if (baseUrl === false) {
      window.alert("Couldn't find your locker, you might need to add a config.js (see https://singly.com/Me/devdocs/)");
   }

   $('#birth-year').hinty();

   $('#save').click(function() {
      postJSON(baseUrl + '/push/meta-me', {
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
