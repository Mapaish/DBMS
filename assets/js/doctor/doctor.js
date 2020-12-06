$(function () {
	setTimeout(function () {
		$("#doctorAppointmentTab").trigger('click');
	}, 10);

	// Doctor Appointment
	$('#doctorAppointmentTab').on('click', function () {
		// Jumbotron
		var jumbotron = `
		<h1>My Schedule</h1>
        <button type="button" class="btn btn-success float-right" id="editDoctor" data-toggle="modal"
            data-target="#formModal">EDIT</button>`;
		$('#jumbotron').html(jumbotron);

		$.ajax({
			method: "POST",
			url: 'backend/doctor/loadAppointment.php',
			success: function (data) {
				// Table
				var table = `
				<table class="table">
					<thead class="thead-dark">
						<tr>
							<th scope="col">SR</th>
							<th scope="col">ID</th>
							<th scope="col">PATIENT</th>
							<th scope="col">ROOM</th>
							<th scope="col">TREATMENT</th>
							<th scope="col">FEES</th>
							<th scope="col">FROM</th>
							<th scope="col">DAYS</th>
						</tr>
					</thead>
					<tbody>`;
				if (data) {
					data = JSON.parse(data);
					data.forEach((element, index) => {
						table += `
						<tr>
							<th scope="row">`+ (index + 1) + `</th>
							<th>`+ element.treatment_ID + `</th>
							<td>`+ element.patient_name + `</td>
							<td>`+ element.room_type + `</td>
							<td>`+ element.treatment_type + `</td>
							<td>`+ element.fees + `</td>
							<td>`+ element.startTime + `</td>
							<td>`+ element.days + `</td>
						</tr>`;
					})
				}
				table += `</tbody>
				</table>`;
				$('#table').html(table);
			}
		});
	});
})
