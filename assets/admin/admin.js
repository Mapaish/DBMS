$(function () {
    // Add Doctor
    $('#addDoctor').on('click', function (event) {
        $('#formModalLabel').text('Add Doctor');
         var html = `<form>
                        <div class="form-group">
                            <label>NAME:</label>
                            <input type="text" class="form-control" id="name">
                        </div>

                        <div class="form-group">
                            <label>AGE:</label>
                            <input type="number" class="form-control col-sm-4" id="age">
                        </div>

                        <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                                <label class="mr-sm-5" for="inlineFormCustomSelect">GENDER:</label>
                                <select class="custom-select mr-sm-5" id="gender">
                                    <option selected></option>
                                    <option value="1">M</option>
                                    <option value="2">F</option>
                                    <option value="3">Other</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>SPECIALIZATION:</label>
                            <input type="text" class="form-control col-sm-7" id="specialization">
                        </div>

                        <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                                <label class="mr-sm-5" for="inlineFormCustomSelect">TYPE:</label>
                                <select class="custom-select mr-sm-5" id="type">
                                    <option selected></option>
                                    <option value="1">Full time</option>
                                    <option value="2">Part time</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>SALARY:</label>
                            <input type="number" class="form-control col-sm-4" id="salary">
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">EMAIL:</label>
                                <input type="email" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                                <label>PHONE NUMBER:</label>
                                <input type="tel" class="form-control" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
                            </div>
                    </form>`;
        $('#formModalBody').html(html); 
    });

    // Add Patient
    $('#addPatient').on('click', function (event) {
        $('#formModalLabel').text('Add Patient');
        var html = `       <form>
        <div class="form-group">
            <label>NAME:</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label>AGE:</label>
            <input type="number" class="form-control" id="age">
        </div>

        <div class="form-row align-items-center">
            <div class="col-auto my-1">
                <label class="mr-sm-2" for="inlineFormCustomSelect">GENDER:</label>
                <select class="custom-select mr-sm-2" id="gender">
                    <option selected></option>
                    <option value="1">male</option>
                    <option value="2">female</option>
                    <option value="3">other</option>
                </select>
            </div>
        </div>

        <div class="form-row align-items-center">
            <div class="col-auto my-1">
                <label class="mr-sm-2" for="inlineFormCustomSelect">BLOOD TYPE:</label>
                <select class="custom-select mr-sm-2" id="bloodtype">

                    <option selected></option>
                    <option value="1">O+</option>
                    <option value="2">O-</option>
                    <option value="3">A+</option>
                    <option value="4">A-</option>
                    <option value="5">B+</option>
                    <option value="6">B-</option>
                    <option value="7">AB+</option>
                    <option value="8">AB-</option>

                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail4">EMAIL:</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label>PHONE NUMBER:</label>
                <input type="tel" class="form-control" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
            </div>
    </form>`;
        $('#formModalBody').html(html);
    });
});

// Update Doctor
function updateDoctor(id) {
    $('#formModalLabel').text('Update Doctor');
     var html = `<form>
     <div class="form-group">
         <label>NAME:</label>
         <input type="text" class="form-control" id="name">
     </div>
     <div class="form-group">
         <label>AGE:</label>
         <input type="number" class="form-control" id="age">
     </div>

     <div class="form-row align-items-center">
         <div class="col-auto my-1">
             <label class="mr-sm-2" for="inlineFormCustomSelect">GENDER:</label>
             <select class="custom-select mr-sm-2" id="gender">
                 <option selected></option>
                 <option value="1">male</option>
                 <option value="2">female</option>
                 <option value="3">other</option>
             </select>
         </div>
     </div>
     <div class="form-group">
         <label>SPECIALIZATION:</label>
         <input type="text" class="form-control" id="specialization">
     </div>
     <div class="form-group">
         <label>SALARY:</label>
         <input type="number" class="form-control" id="salary">
     </div>
     <div class="form-row align-items-center">
         <div class="col-auto my-1">
             <label class="mr-sm-2" for="inlineFormCustomSelect">TYPE:</label>
             <select class="custom-select mr-sm-2" id="type">

                 <option selected></option>
                 <option value="1">full time</option>
                 <option value="2">part time</option>

             </select>
         </div>
     </div>
     <div class="form-row">
         <div class="form-group col-md-6">
             <label for="inputEmail4">EMAIL:</label>
             <input type="email" class="form-control" id="email">
         </div>
         <div class="form-group">
             <label>PHONE NUMBER:</label>
             <input type="tel" class="form-control" id="phone"
                 pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
         </div>
 </form>`;
    $('#formModalBody').html(html); 
};

// Delete Doctor
function deleteDoctor(id) {
};

// Update Patient
function updatePatient(id) {
    $('#formModalLabel').text('Update Patient');
    var html = `       <form>
    <div class="form-group">
        <label>NAME:</label>
        <input type="text" class="form-control" id="name">
    </div>
    <div class="form-group">
        <label>AGE:</label>
        <input type="number" class="form-control" id="age">
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputEmail4">EMAIL:</label>
            <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
            <label>PHONE NUMBER:</label>
            <input type="tel" class="form-control" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
        </div>
</form>`;
    $('#formModalBody').html(html);
};

// Delete Patient
function deletePatient(id) {
};