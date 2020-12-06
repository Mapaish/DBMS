$(function () {
	// Add Doctor Modal
	$(document).on('click', '#addDoctorModal', function () {
		$('#formModalLabel').text('Add Doctor');
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
			<div class="form-group">
				<label>SALARY:</label>
				<input type="number" class="form-control" id="salary">
			</div>
			<div class="form-row align-items-center">
				<div class="col-auto my-1">
					<label class="mr-sm-2" for="inlineFormCustomSelect">TYPE:</label>
					<select class="custom-select mr-sm-2" id="type">
						<option value="Permanent" selected>Permanent</option>
						<option value="Visiting">Visiting</option>
					</select>
				</div>
			</div>
			<div class="form-row my-2">
				<div class="form-group col-md-6">
					<label for="inputEmail4">EMAIL:</label>
					<input type="email" class="form-control" id="email">
				</div>
				<div class="form-group">
					<label>PHONE NUMBER:</label>
					<input type="tel" class="form-control" id="phone"
						pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
				</div>
			</div>
		</form>`;
		$('#formModalBody').html(html);
		html = `<button type="button" class="btn btn-primary"
			id="addDoctor" data-dismiss="modal">Save changes</button>`;
		$('#saveModal').html(html);
	});
	// Add Doctor
	$(document).on('click', '#addDoctor', function () {
		$.ajax({
			method: "POST",
			url: 'backend/admin/doctor/addDoctor.php',
			data: {
				name: $('#name').val(),
				dob: $('#dob').val(),
				gender: $('#gender').val(),
				specialisation: $('#specialisation').val(),
				salary: $('#salary').val(),
				type: $('#type').val(),
				email: $('#email').val(),
				mobile: $('#phone').val()
			},
			success: function (data) {
				console.log(data);
				$('#doctorTab').trigger('click');
			}
		});
	});

	// Add Patient Modal
	$(document).on('click', '#addPatientModal', function () {
		$('#formModalLabel').text('Add Patient');
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
			<div class="form-row align-items-center my-2">
				<div class="col-auto my-1">
					<label class="mr-sm-2">BLOOD GROUP:</label>
					<select class="custom-select mr-sm-2" id="blood_group">
						<option value="A+" selected>A+</option>
						<option value="A-">A-</option>
						<option value="B+">B+</option>
						<option value="B-">B-</option>
						<option value="AB+">AB+</option>
						<option value="AB-">AB-</option>
						<option value="O+">O+</option>
						<option value="O-">O-</option>
					</select>
				</div>
			</div>
			<div class="form-row my-2">
				<div class="form-group col-md-6">
					<label for="inputEmail4">EMAIL:</label>
					<input type="email" class="form-control" id="email">
				</div>
				<div class="form-group">
					<label>PHONE NUMBER:</label>
					<input type="tel" class="form-control" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
				</div>
			</div>
		</form>`;
		$('#formModalBody').html(html);
		html = `<button type="button" class="btn btn-primary"
			id="addPatient" data-dismiss="modal">Save changes</button>`;
		$('#saveModal').html(html);
	});
	// Add Patient
	$(document).on('click', '#addPatient', function () {
		$.ajax({
			method: "POST",
			url: 'backend/admin/patient/addPatient.php',
			data: {
				name: $('#name').val(),
				dob: $('#dob').val(),
				gender: $('#gender').val(),
				blood_group: $('#blood_group').val(),
				email: $('#email').val(),
				mobile: $('#phone').val()
			},
			success: function (data) {
				console.log(data);
				$('#patientTab').trigger('click');
			}
		});
	});

	// Add Appointment Modal
	$(document).on('click', '#addAppointmentModal', function () {
		$('#formModalLabel').text('Add Appointment');
		var html = `
		<form>
			<div class="form-row align-items-center">
				<div class="col-auto my-1">
					<label class="mr-sm-2">PATIENT:</label>
					<select class="selectpicker w-100" id="patientID" data-live-search="true"></select>
				</div>
			</div>
			<div class="form-row align-items-center my-1">
				<div class="col-auto my-1">
					<label class="mr-sm-2">DOCTOR:</label>
					<select class="selectpicker w-100" id="doctorID" data-live-search="true"></select>
				</div>
			</div>
			<div class="form-row align-items-center my-1">
				<div class="col-auto my-1">
					<label class="mr-sm-2">ROOM:</label>
					<select class="selectpicker w-100" id="room_type" data-live-search="true"></select>
				</div>
			</div>
			<div class="form-group">
				<label>TREATMENT:</label>
				<input class="form-control" id="treatment">
			</div>
			<div class="form-group my-2">
				<label>DATE:</label>
				<input type="datetime-local" class="form-control" id="date">
			</div>
			<div class="form-row my-2">
				<div class="form-group col-md-6">
					<label>FEES:</label>
					<input type="number" class="form-control" id="fees">
				</div>
				<div class="form-group">
					<label>DAYS:</label>
					<input type="number" class="form-control" id="days">
				</div>
			</div>
		</form>`;
		$('#formModalBody').html(html);
		html = `<button type="button" class="btn btn-primary"
			id="addAppointment" data-dismiss="modal">Save changes</button>`;
		$('#saveModal').html(html);
		$(".selectpicker").selectpicker("refresh");
		// Patient Select Menu
		$.ajax({
			method: "POST",
			url: 'backend/admin/patient/loadPatient.php',
			success: function (data) {
				if (data) {
					data = JSON.parse(data);
					data.forEach(element => {
						$('#patientID').append(new Option(element.name, element.patient_ID));
					});
				}
				$(".selectpicker").selectpicker("refresh");
			}
		});
		// Doctor Select Menu
		$.ajax({
			method: "POST",
			url: 'backend/admin/doctor/loadDoctor.php',
			success: function (data) {
				if (data) {
					data = JSON.parse(data);
					data.forEach(element => {
						$('#doctorID').append(new Option(element.name, element.doctor_ID));
					});
				}
				$(".selectpicker").selectpicker("refresh");
			}
		});
		// Room Select Menu
		$.ajax({
			method: "POST",
			url: 'backend/admin/loadRooms.php',
			success: function (data) {
				if (data) {
					data = JSON.parse(data);
					data.forEach(element => {
						$('#room_type').append(new Option(element.room_type, element.room_type));
					});
				}
				$(".selectpicker").selectpicker("refresh");
			}
		});
	});
	// Add Appointment
	$(document).on('click', '#addAppointment', function () {
		$.ajax({
			method: "POST",
			url: 'backend/admin/appointment/addAppointment.php',
			data: {
				patient_ID: $('#patientID').val(),
				doctor_ID: $('#doctorID').val(),
				room_type: $('#room_type').val(),
				treatment_type: $('#treatment').val(),
				fees: $('#fees').val(),
				startTime: new Date($('#date').val()).getTime() / 1000,
				days: $('#days').val()
			},
			success: function (data) {
				console.log(data);
				$('#appointmentTab').trigger('click');
			}
		});
	});
});

// Update Doctor Modal
function updateDoctorModal(id) {
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
			<label>SALARY:</label>
			<input type="number" class="form-control" id="salary">
		</div>
		<div class="form-row my-2">
			<div class="col-auto">
				<label>TYPE:</label>
				<select class="custom-select mr-sm-2" id="type">
					<option value="Permanent" selected>Permanent</option>
					<option value="Visiting">Visiting</option>
				</select>
			</div>
			<div class="form-group">
				<label>PHONE NUMBER:</label>
				<input type="tel" class="form-control" id="phone"
					pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
			</div>
		</div>
	</form>`;
	$('#formModalBody').html(html);
	$.ajax({
		method: "POST",
		url: 'backend/admin/doctor/doctorDetails.php',
		data: { doctor_ID: id },
		success: function (data) {
			if (data) {
				data = JSON.parse(data);
				$('#name').val(data.Name);
				$('#dob').val(data.dob);
				$('#gender').val(data.gender);
				$('#specialisation').val(data.specialisation);
				$('#salary').val(data.Salary);
				$('#type').val(data.type);
				$('#email').val(data.email);
				$('#phone').val(data.mobile);
				html = `<button type="button" class="btn btn-primary"
					onclick="updateDoctor(`+ data.doctor_ID + `)" data-dismiss="modal">Save changes</button>`;
				$('#saveModal').html(html);
			}
		}
	});
}
// Update Doctor
function updateDoctor(id) {
	$.ajax({
		method: "POST",
		url: 'backend/admin/doctor/updateDoctor.php',
		data: {
			doctor_ID: id,
			name: $('#name').val(),
			dob: $('#dob').val(),
			gender: $('#gender').val(),
			specialisation: $('#specialisation').val(),
			salary: $('#salary').val(),
			type: $('#type').val(),
			mobile: $('#phone').val()
		},
		success: function (data) {
			console.log(data);
			$('#doctorTab').trigger('click');
		}
	});
}
// Delete Doctor
function deleteDoctor(id) {
	$.ajax({
		method: "POST",
		url: 'backend/admin/doctor/deleteDoctor.php',
		data: { doctor_ID: id },
		success: function (data) {
			console.log(data);
			$('#doctorTab').trigger('click');
		}
	});
};

// Update Patient Modal
function updatePatientModal(id) {
	$('#formModalLabel').text('Update Patient');
	var html = `<form>
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
		<div class="form-row align-items-center my-2">
			<div class="col-auto my-1">
				<label class="mr-sm-2">BLOOD GROUP:</label>
				<select class="custom-select mr-sm-2" id="blood_group">
					<option value="A+" selected>A+</option>
					<option value="A-">A-</option>
					<option value="B+">B+</option>
					<option value="B-">B-</option>
					<option value="AB+">AB+</option>
					<option value="AB-">AB-</option>
					<option value="O+">O+</option>
					<option value="O-">O-</option>
				</select>
			</div>
		</div>
		<div class="form-row my-2">
			<div class="form-group col-md-6">
				<label for="inputEmail4">EMAIL:</label>
				<input type="email" class="form-control" id="email">
			</div>
			<div class="form-group">
				<label>PHONE NUMBER:</label>
				<input type="tel" class="form-control" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
			</div>
		</div>
	</form>`;
	$.ajax({
		method: "POST",
		url: 'backend/admin/patient/patientDetails.php',
		data: { patient_ID: id },
		success: function (data) {
			if (data) {
				data = JSON.parse(data);
				$('#name').val(data.name);
				$('#dob').val(data.dob);
				$('#gender').val(data.gender);
				$('#blood_group').val(data.blood_group);
				$('#email').val(data.email);
				$('#phone').val(data.mobile);
				html = `<button type="button" class="btn btn-primary"
					onclick="updatePatient(`+ data.patient_ID + `)" data-dismiss="modal">Save changes</button>`;
				$('#saveModal').html(html);
			}
		}
	});
	$('#formModalBody').html(html);
}
// Update Patient
function updatePatient(id) {
	$.ajax({
		method: "POST",
		url: 'backend/admin/patient/updatePatient.php',
		data: {
			patient_ID: id,
			name: $('#name').val(),
			dob: $('#dob').val(),
			gender: $('#gender').val(),
			blood_group: $('#blood_group').val(),
			email: $('#email').val(),
			mobile: $('#phone').val()
		},
		success: function (data) {
			console.log(data);
			$('#patientTab').trigger('click');
		}
	});
}
// Delete Patient
function deletePatient(id) {
	$.ajax({
		method: "POST",
		url: 'backend/admin/patient/deletePatient.php',
		data: { patient_ID: id },
		success: function (data) {
			console.log(data);
			$('#patientTab').trigger('click');
		}
	});
};

// Update Appointment Modal
function updateAppointmentModal(id) {
	$('#formModalLabel').text('Update Appointment');
	var html = `
	<form>
		<div class="form-row align-items-center">
			<div class="col-auto my-1">
				<label class="mr-sm-2">PATIENT:</label>
				<select class="selectpicker w-100" id="patientID" data-live-search="true"></select>
			</div>
		</div>
		<div class="form-row align-items-center my-1">
			<div class="col-auto my-1">
				<label class="mr-sm-2">DOCTOR:</label>
				<select class="selectpicker w-100" id="doctorID" data-live-search="true"></select>
			</div>
		</div>
		<div class="form-row align-items-center my-1">
			<div class="col-auto my-1">
				<label class="mr-sm-2">ROOM:</label>
				<select class="selectpicker w-100" id="room_type" data-live-search="true"></select>
			</div>
		</div>
		<div class="form-group">
			<label>TREATMENT:</label>
			<input class="form-control" id="treatment">
		</div>
		<div class="form-group my-2">
			<label>DATE:</label>
			<input type="datetime-local" class="form-control" id="date">
		</div>
		<div class="form-row my-2">
			<div class="form-group col-md-6">
				<label>FEES:</label>
				<input type="number" class="form-control" id="fees">
			</div>
			<div class="form-group">
				<label>DAYS:</label>
				<input type="number" class="form-control" id="days">
			</div>
		</div>
	</form>`;
	$('#formModalBody').html(html);
	$(".selectpicker").selectpicker("refresh");
	// Patient Select Menu
	$.ajax({
		method: "POST",
		url: 'backend/admin/patient/loadPatient.php',
		success: function (data) {
			if (data) {
				data = JSON.parse(data);
				data.forEach(element => {
					$('#patientID').append(new Option(element.name, element.patient_ID));
				});
			}
			$(".selectpicker").selectpicker("refresh");
		}
	});
	// Doctor Select Menu
	$.ajax({
		method: "POST",
		url: 'backend/admin/doctor/loadDoctor.php',
		success: function (data) {
			if (data) {
				data = JSON.parse(data);
				data.forEach(element => {
					$('#doctorID').append(new Option(element.name, element.doctor_ID));
				});
			}
			$(".selectpicker").selectpicker("refresh");
		}
	});
	// Room Select Menu
	$.ajax({
		method: "POST",
		url: 'backend/admin/loadRooms.php',
		success: function (data) {
			if (data) {
				data = JSON.parse(data);
				data.forEach(element => {
					$('#room_type').append(new Option(element.room_type, element.room_type));
				});
			}
			$(".selectpicker").selectpicker("refresh");
		}
	});
	$.ajax({
		method: "POST",
		url: 'backend/admin/appointment/appointmentDetails.php',
		data: { treatment_ID: id },
		success: function (data) {
			if (data) {
				data = JSON.parse(data);
				$('#patientID').val(data.patient_ID);
				$('#doctorID').val(data.doctor_ID);
				$('#room_type').val(data.room_type);
				$('#treatment').val(data.treatment_type);
				$('#fees').val(data.fees);
				$('#date').val(new Date(parseInt(data.startTime) * 1000).toLocaleString("sv-SE", {
					year: "numeric",
					month: "2-digit",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit"
				}).replace(" ", "T"));
				$('#days').val(data.days);
				html = `<button type="button" class="btn btn-primary"
					onclick="updateAppointment(`+ data.treatment_ID + `)" data-dismiss="modal">Save changes</button>`;
				$('#saveModal').html(html);
			}
		}
	});
}
// Update Appointment
function updateAppointment(id) {
	$.ajax({
		method: "POST",
		url: 'backend/admin/appointment/updateAppointment.php',
		data: {
			treatment_ID: id,
			patient_ID: $('#patientID').val(),
			doctor_ID: $('#doctorID').val(),
			room_type: $('#room_type').val(),
			treatment_type: $('#treatment').val(),
			fees: $('#fees').val(),
			startTime: new Date($('#date').val()).getTime() / 1000,
			days: $('#days').val()
		},
		success: function (data) {
			console.log(data);
			$('#appointmentTab').trigger('click');
		}
	});
}
// Delete Appointment
function deleteAppointment(id) {
	$.ajax({
		method: "POST",
		url: 'backend/admin/appointment/deleteAppointment.php',
		data: { treatment_ID: id },
		success: function (data) {
			console.log(data);
			$('#appointmentTab').trigger('click');
		}
	});
};