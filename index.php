<?php
include('backend/session.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
    <title>Mapaish Hospital</title>
	<link rel="stylesheet" href="assets/node_modules/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/node_modules/bootstrap-select/dist/css/bootstrap-select.min.css">
	<link rel="stylesheet" href="assets/css/main.css">
</head>

<body>

	<!--1st Section-->
	<header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
		<?php
		if($_SESSION['user_type'] == 'admin') {
		?>
		<h1>Admin</h1>
		<div class="navbar-nav-scroll">
			<ul class="navbar-nav bd-navbar-nav flex-row">
				<li class="nav-item">
					<a class="nav-link active" id="doctorTab">Doctor</a>
				</li>
				<li class="nav-item ">
					<a class="nav-link" id="patientTab">Patient</a>
				</li>
				<li class="nav-item ">
					<a class="nav-link" id="appointmentTab">Appointment</a>
				</li>
				<li class="nav-item ">
					<a class="nav-link" href="backend/login/logout.php">Log Out</a>
				</li>
			</ul>
		</div>
		<?php
		} else {
		?>
		<h1>Doctor</h1>
		<div class="navbar-nav-scroll">
			<ul class="navbar-nav bd-navbar-nav flex-row">
				<li class="nav-item ">
					<a class="nav-link" id="doctorAppointmentTab">Appointment</a>
				</li>
				<li class="nav-item ">
					<a class="nav-link" href="backend/login/logout.php">Log Out</a>
				</li>
			</ul>
		</div>
		<?php
		}
		?>
	</header>

	<!--2nd Section-->
	<div class="jumbotron" id="jumbotron"></div>

	<!--3rd Section-->
	<div class="container-fluid" id="table"></div>

	<!-- Modal -->
	<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="formModalLabel"></h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body" id="formModalBody">

				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<div id="saveModal"></div>
				</div>
			</div>
		</div>
	</div>

	<script src="assets/node_modules/jquery/dist/jquery.min.js"></script>
	<script src="assets/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
	<script src="assets/node_modules/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
	<script src="assets/js/admin/admin.js"></script>
	<script src="assets/js/admin/modal.js"></script>
	<script src="assets/js/doctor/doctor.js"></script>
	<script src="assets/js/doctor/modal.js"></script>

</body>

</html>