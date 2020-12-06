$(function () {
	setTimeout(function () {
		$("#doctorTab").trigger('click');
	}, 10);

	// Doctor
	$('#doctorTab').on('click', function () {
		// Jumbotron
		var jumbotron = `
		<h1>Doctor</h1>
		<div class="row">
			<input type="text" class="form-control col-sm-1" id="minSal" placeholder="Min">
			<input type="text" class="form-control col-sm-1" id="maxSal" placeholder="Max">

			<select class="custom-select col-sm-2" id="doctorType">
				<option value="" selected>All</option>
				<option value="Permanent">Permanent</option>
				<option value="Visiting">Visiting</option>
			</select>
		</div>
		<button type="button" class="btn btn-success float-right" id="addDoctorModal" data-toggle="modal"
			data-target="#formModal">ADD</button>`;
		$('#jumbotron').html(jumbotron);
		showDoctors();
	});
	// Min Salary for Doctor
	$(document).on('keyup', '#minSal', function () {
		showDoctors();
	});
	// Max Salary for Doctor
	$(document).on('keyup', '#maxSal', function () {
		showDoctors();
	});
	// Doctor Type
	$(document).on('change', '#doctorType', function () {
		showDoctors();
	});

	// Patient
	$('#patientTab').on('click', function () {
		// Jumbotron
		var jumbotron = `
		<h1>Patient</h1>
        <button type="button" class="btn btn-success float-right" id="addPatientModal" data-toggle="modal"
            data-target="#formModal">ADD</button>`;
		$('#jumbotron').html(jumbotron);

		$.ajax({
			method: "POST",
			url: 'backend/admin/patient/loadPatient.php',
			success: function (data) {
				// Table
				var table = `
				<table class="table">
					<thead class="thead-dark">
						<tr>
							<th scope="col">SR</th>
							<th scope="col">ID</th>
							<th scope="col">NAME</th>
							<th scope="col">DOB</th>
							<th scope="col">GENDER</th>
							<th scope="col">BLOOD GROUP</th>
							<th scope="col">EMAIL</th>
							<th scope="col">MOBILE</th>
							<th scope="col">UPDATE</th>
							<th scope="col">DELETE</th>
						</tr>
					</thead>
					<tbody>`;
				if (data) {
					data = JSON.parse(data);
					data.forEach((element, index) => {
						table += `
						<tr>
							<th scope="row">`+ (index + 1) + `</th>
							<td>`+ element.patient_ID + `</th>
							<td>`+ element.name + `</td>
							<td>`+ element.dob + `</td>
							<th>`+ element.gender + `</th>
							<td>`+ element.blood_group + `</td>
							<th>`+ element.email + `</th>
							<td>`+ element.mobile + `</td>
							<td><button type="button" class="btn btn-warning" onclick="updatePatientModal(`+ element.patient_ID + `)"
								data-toggle="modal" data-target="#formModal">UPDATE</button></td>
							<td><button type="button" class="btn btn-danger"
								onclick="deletePatient(`+ element.patient_ID + `)">DELETE</button></td>
						</tr>`;
					})
				}
				table += `</tbody>
				</table>`;
				$('#table').html(table);
			}
		});
	});

	// Appointment
	$('#appointmentTab').on('click', function () {
		// Jumbotron
		var jumbotron = `
		<h1>Appointment</h1>
        <div class="row">
			<label>Treatment</label>
            <input type="text" class="form-control col-sm-4" id="treatment_type" placeholder="Treatment Type">
            <button type="button" class="btn btn-success float-right" id="search_treatment">Search</button>
        </div>
        <button type="button" class="btn btn-success float-right" id="addAppointmentModal" data-toggle="modal"
            data-target="#formModal">ADD</button>`;
		$('#jumbotron').html(jumbotron);

		showAppoinment();
	});
	// Search by Treatment Type
	$(document).on('click', '#search_treatment', function () {
		showAppoinment();
	});
})

function showDoctors() {
	var minSal = $('#minSal').val();
	var maxSal = $('#maxSal').val();
	var doctorType = $('#doctorType').val();
	$.ajax({
		method: "POST",
		url: 'backend/admin/doctor/loadDoctor.php',
		data: {
			minSal: minSal,
			maxSal: maxSal,
			doctorType: doctorType
		},
		success: function (data) {
			// Table
			var table = `
			<table class="table">
				<thead class="thead-dark">
					<tr>
						<th scope="col">SR</th>
						<th scope="col">ID</th>
						<th scope="col">NAME</th>
						<th scope="col">DOB</th>
						<th scope="col">GENDER</th>
						<th scope="col">SALARY</th>
						<th scope="col">EMAIL</th>
						<th scope="col">MOBILE</th>
						<th scope="col">SPECIALISATION</th>
						<th scope="col">TYPE</th>
						<th scope="col">UPDATE</th>
						<th scope="col">DELETE</th>
					</tr>
				</thead>
				<tbody>`;
			if (data) {
				data = JSON.parse(data);
				data.forEach((element, index) => {
					table += `
					<tr>
						<th scope="row">`+ (index + 1) + `</th>
						<td>`+ element.doctor_ID + `</th>
						<td>`+ element.name + `</td>
						<td>`+ element.dob + `</td>
						<th>`+ element.gender + `</th>
						<td>`+ element.salary + `</td>
						<th>`+ element.email + `</th>
						<td>`+ element.mobile + `</td>
						<th>`+ element.specialisation + `</th>
						<td>`+ element.type + `</td>
						<td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#formModal"
							onclick="updateDoctorModal(`+ element.doctor_ID + `)">UPDATE</button></td>
						<td><button type="button" class="btn btn-danger"
							onclick="deleteDoctor(`+ element.doctor_ID + `)">DELETE</button></td>
					</tr>`;
				});
			}
			table += `</tbody>
			</table>`;
			$('#table').html(table);
		}
	});
}

function showAppoinment() {
	var treatment_type = $('#treatment_type').val();
	$.ajax({
		method: "POST",
		url: 'backend/admin/appointment/loadAppointment.php',
		data: {treatment_type: treatment_type},
		success: function (data) {
			// Table
			var table = `
			<table class="table">
				<thead class="thead-dark">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">PATIENT</th>
						<th scope="col">DOCTOR</th>
						<th scope="col">ROOM</th>
						<th scope="col">TREATMENT</th>
						<th scope="col">FEES</th>
						<th scope="col">FROM</th>
						<th scope="col">DAYS</th>
						<th scope="col">UPDATE</th>
						<th scope="col">DELETE</th>
					</tr>
				</thead>
				<tbody>`;
			if (data) {
				data = JSON.parse(data);
				data.forEach(element => {
					table += `
					<tr>
						<th scope="row">`+ element.treatment_ID + `</th>
						<td>`+ element.patient_ID + `</td>
						<td>`+ element.doctor_ID + `</td>
						<td>`+ element.room_type + `</td>
						<td>`+ element.treatment_type + `</td>
						<td>`+ element.fees + `</td>
						<td>`+ element.startTime + `</td>
						<td>`+ element.days + `</td>
						<td><button type="button" class="btn btn-warning" onclick="updateAppointmentModal(`+ element.treatment_ID + `)"
							data-toggle="modal" data-target="#formModal">UPDATE</button></td>
						<td><button type="button" class="btn btn-danger"
							onclick="deleteAppointment(`+ element.treatment_ID + `)">DELETE</button></td>
					</tr>`;
				})
			}
			table += `</tbody>
			</table>`;
			$('#table').html(table);
		}
	});
}