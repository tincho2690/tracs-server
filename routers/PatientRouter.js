/*jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: true*/

/* globals require, module */

var express = require("express"),
    router = express.Router(),
    PatientController = require("../controllers/PatientController");

router.get("/detail/:id", PatientController.getPatientDetail);
router.get("/user/:id", PatientController.findUserPatients);
router.get("/profiles/:id", PatientController.getPatientProfiles);
router.get("/selectableUsers/:id", PatientController.getSelectableUsers);
router.get("/patientOpinions/:id", PatientController.getPatientOpinions);
router.get("/notifications/:id", PatientController.getNotifications);
router.get("/patientNotes/:idPatient/:idUser", PatientController.getPatientNotes);
router.get("/patientNote/:noteId", PatientController.getPatientNote);

router.put("/updatePatientGeneralInfo/:id", PatientController.updatePatientGeneralInfo);
router.put("/updatePatientContactInfo/:id", PatientController.updatePatientContactInfo);
router.put("/updatePatientClosestPeople/:id", PatientController.updateClosestPeople);
router.put("/updatePatientHistory/:id", PatientController.updatePatientHistory);

router.put("/addProfileToPatient/:id", PatientController.addProfileToPatient);
router.put("/addPatientOpinion/:id", PatientController.addPatientOpinion);
router.put("/addPatientNote/:id", PatientController.addPatientNote);
router.put("/addPatientDiagnosis/:id", PatientController.addPatientDiagnosis);

router.post("/", PatientController.add);

//router.delete("/:patientId/:profileId", PatientController.deleteProfile);

//Borrador para carga masiva de datos. Me los guarda pero tira un error por el .exec(). Despues lo termino de analizar
router.post("/bulkInsert", PatientController.bulkInsert);

module.exports = router;
