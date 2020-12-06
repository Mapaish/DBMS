$(function () {
	// Edit Doctor Modal
	$(document).on('click', '#editDoctor', function () {
		$('#formModalLabel').text('Update Doctor');
		var html = `
		<form>
			<div class="form-group">
				<label>NAME:</label>
				<input type="text" class="form-control" id="name">
			</div>
			<div class="form-group">
				<label>DOB:</label>
				<input type="date" class="form-control" id="dob">
			</div>
			<div class="form-row align-items-center">
				<div class="col-auto my-1">
					<label class="mr-sm-2" for="inlineFormCustomSelect">GENDER:</label>
					<select class="custom-select mr-sm-2" id="gender">
						<option value="M" selected>Male</option>
						<option value="F">Female</option>
						<option value="O">Other</option>
					</select>
				</div>
			</div>
			<div class="form-group my-2">
				<label>SPECIALISATION:</label>
				<input type="text" class="form-control" id="specialisation">
			</div>
			<div class="form-group my-2">
				<label>PHONE NUMBER:</label>
				<input type="tel" class="form-control" id="phone"
					pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
			</div>
		</form>`;
		$('#formModalBody').html(html);
		$.ajax({
			method: "POST",
			url: 'backend/doctor/doctorDetails.php',
			success: function (data) {
				if (data) {
					data = JSON.parse(data);
					$('#name').val(data.Name);
					$('#dob').val(data.dob);
					$('#gender').val(data.gender);
					$('#specialisation').val(data.specialisation);
					$('#phone').val(data.mobile);
					html = `<button type="button" class="btn btn-primary"
					onclick="editDoctor()" data-dismiss="modal">Save changes</button>`;
					$('#saveModal').html(html);
				}
			}
		});
	});
});

// Edit Doctor
function editDoctor() {
	$.ajax({
		method: "POST",
		url: 'backend/doctor/editDoctor.php',
		data: {
			name: $('#name').val(),
			dob: $('#dob').val(),
			gender: $('#gender').val(),
			specialisation: $('#specialisation').val(),
			type: $('#type').val(),
			mobile: $('#phone').val()
		},
		success: function (data) {
			console.log(data);
			$('#doctorTab').trigger('click');
		}
	});
}