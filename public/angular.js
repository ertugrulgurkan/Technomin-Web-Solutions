var app = angular.module('ContactForm',[]);

app.controller("cfController",function($scope){
	$scope.submitForm = function(isValid) {
		this.formInput = {
        name: $("input[name='name']").val(),
        email: $("input[name='email']").val(),
        message: $("textarea[name='message']").val()
   };
		if (isValid) {
			console.log('Message sent successfully');
			console.log(this.formInput);
			var json = JSON.stringify(this.formInput); 

            $.ajax({
				type: "POST",
				url: "/post-message",
				data: json,
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: function(msg) {
				}
			   });
			   alert("Mesajınız gönderildi.Teşekkürler...");
		} else {
			alert("Hata - Mesajınız gönderilemedi.");
			console.log('Failed to send message')
		}
	};
});