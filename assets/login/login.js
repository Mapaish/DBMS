$(function () {
	// Form validation
	$('#loginEmail').on('keyup', function () {
		validLoginEmail();
	});
	$('#loginPassword').on('keyup', function () {
		validLoginPassword();
	});

	$('#loginSubmit').on('click', function (e) {
		e.preventDefault();
		validLoginEmail();
		validLoginPassword();
		var emailValid = parseInt($('#loginEmailValid').val());
		var passwordValid = parseInt($('#loginPasswordValid').val());
		if (emailValid && passwordValid) {
			var email = $('#loginEmail').val();
			var password = $('#loginPassword').val();
			$.ajax({
				method: "POST",
				url: "backend/login/login.php",
				data: {
					email: email,
					password: password
				},
				success: function (data) {
					console.log(data);
					if (data != "success") {
						alert("invalid id or password");
					} else {
						window.location.href = "../dbms";
					}
				}
			});
		}
	})
});

function validLoginEmail() {
	var email = $('#loginEmail').val();
	var html = '';
	if (email) {
		var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		$('#loginEmail').removeClass('is-valid');
		$('#loginEmail').addClass('is-invalid');
		$('#loginEmailValid').val(0);
		if (email.match(emailFormat)) {
			$('#loginEmail').removeClass('is-invalid');
			$('#loginEmail').addClass('is-valid');
			$('#loginEmailValid').val(1);
		} else {
			html = `<strong>Invalid E-Mail.</strong>`;
		}
	} else {
		html = `<strong>This field is required.</strong>`;
	}
	$('#loginEmailError').html(html);
}
function validLoginPassword() {
	var email = $('#loginPassword').val();
	var html = '';
	if (email) {
		$('#loginPassword').removeClass('is-invalid');
		$('#loginPassword').addClass('is-valid');
		$('#loginPasswordError').html(html);
		$('#loginPasswordValid').val(1);
	} else {
		$('#loginPassword').removeClass('is-valid');
		$('#loginPassword').addClass('is-invalid');
		html = `<strong>This field is required.</strong>`;
		$('#loginPasswordError').html(html);
		$('#loginPasswordValid').val(0);
	}
}
