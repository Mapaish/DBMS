
# MAPAISH Hospital

## ABSTRACT:
This project “Hospital Management System” includes Admin, doctor & patient login, storing/fetching their details into/from the system. The software has the facility to give a unique id for every patient & doctor; stores the clinical details of every patient. It includes a search facility to know the current status of each patient. One can login into Mapaish Hospital using an email and a password. It is accessible by an administrator, and only they can add data/delete into/from the database. The data can be retrieved easily. The interface is very user-friendly.

## PROBLEM DEFINITION:
In a Mapaish Hospital a database is to be designed to store following requirements. Permanent doctors get fixed salaries. Personal information like name, address, date of birth, contact number, specialization, and salary are required. Consulting doctors visits at a fixed time every day. Personal information like name, address, date of birth, contact number, specialization, and charges are required. Patients are admitted to the hospital. Personal information like name, address, date of birth, contact number, blood group. relative's name & address, reasons for admission are required. Patients are admitted to rooms of different types, per day charges depends on room type. Various labs in hospitals, where several tests are conducted on patients, each test has fixed charge. GUI should allow recording details of Doctors, Patients and rooms also modifying current details etc. Only the administrator is allowed to do these operations. Doctors can see information of patients if and only if the patient is under treatment of the doctor. Administrator is allowed to generate various reports based on data, patient, room types, doctors etc.

Query 1: Given any reason for admission, list the number of patients having that same reason. 
 
Query 2: Find permanent doctors having a salary in a range of salaries.

### HARDWARE AND SOFTWARE REQUIREMENTS:
#### Hardware Interface: 
● Personal Computer ● 128 MB minimum RAM Required ● Internet or LAN Connections

#### Software Requirement:
● Modern Browser ● PHP server ● Database Server(MariaDB/ MySQL)

### DESIGN:
#### The application follows a 3-tier architecture
1. Presentation layer (your PC, Tablet, Mobile, etc.)
2. Application layer (PHP server)
3. Database Server (MySQL, MariaDB)
![image](https://user-images.githubusercontent.com/73554415/134275717-28986bd9-0ecc-41d1-af54-a17193778e7a.png)

#### Technology Stack:
![image](https://user-images.githubusercontent.com/73554415/134275734-59036ef5-802c-4545-bdc9-6c0b35bb8362.png)

#### Client:
The user then needs to login to access the system, where they can view the data present in the hospital database. Only the admin can edit the data present in the database. The login form validation is done using jQuery library for Javascript , PHP and Database . Duplicate E-Mail IDs are validated against the database using AJAX and PHP. When the user logins, the user session is created to uniquely identify the user. The admin sends requests to the PHP server for addition/updation/deletion of data, which then updates the database as per the assigned query. In similar fashion other users view and sort the database.

#### Modules:
##### 1. Login Validation (Login Page)
a. Client side validation is done using jQuery and server side validation is done using AJAX, PHP and database.
##### 2. Header
a. If the user is logged in as a doctor then the patient page will be inactive.  
b. Same goes for the patient who won’t be able to access the doctor page .
##### 3. JumboTron
a. It greets every user that logs on the system.  
b. It performs Sorting query for the doctor and Search query for the patient.  
c. And an add button only available for admin.
##### 4. Container
a. It displays the data in the form of a table.

#### Database Schema:
The SQL file in the project needs to be imported in MySQL/MariaDB Database server. The Database contains the following tables.  

Login: It has 3 attributes: password, email and user_type.

Patient: It has 7 attributes: patient_ID, name, dob, gender, blood_group, email and mobile number.  

Doctor: It has 9 attributes: doctor_ID, Name, dob, gender, salary, email, mobile number, specialization and type.  

Assigned to: It is a relationship table containing the following attributes: treatment_ID, patient_OD, doctor_ID, room_type, treatment_type, fees, startTime, days.  

Room: It has 2 attributes: room_type and charge.  

Test: It has 2 attributes: name and charge.  

Test Conducted: It is a relationship table containing the following attributes: treament_ID, test_name and count.

![image](https://user-images.githubusercontent.com/73554415/134277077-e03e4f2e-04d0-4d94-a48a-ca760f97509e.png)

#### ER Diagram:
![DBMS_Mini_Project drawio](https://user-images.githubusercontent.com/73554415/134277019-56d9799b-b9e6-4573-8876-d137f7d52f53.png)

### SCREEN SHOTS:
![image](https://user-images.githubusercontent.com/73554415/134277222-f6852354-9cff-48d1-9b6d-e5530d0deca6.png)  

![image](https://user-images.githubusercontent.com/73554415/134277250-8caf8695-6f42-4c07-88b7-dd15021c39b2.png)  

![image](https://user-images.githubusercontent.com/73554415/134277272-b3e956ef-1cd8-44bc-ac1b-2f75360b85b2.png)  

![image](https://user-images.githubusercontent.com/73554415/134277311-adb77c48-b4d7-46fc-aeef-d3527c5b9755.png)  
![image](https://user-images.githubusercontent.com/73554415/134277338-7aec4f06-3beb-40a0-9da4-b197da580767.png)
