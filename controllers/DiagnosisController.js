/*jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: true*/

/* globals require, module, console */

var moment = require("moment"),
    DiagnosisService = require("../services/DiagnosisService");

var DiagnosisController = {};

DiagnosisController.getDiagnosisMedications = function (req, res) {
    "use strict";

    var diagnosisId = req.params.id;
    DiagnosisService.getDiagnosisMedications(diagnosisId).then(function (medications) {
        res.status(200).jsonp(medications);
    }, function (err) {
        return res.status(500).send(err.message);
    });
};

DiagnosisController.addDiagnosisMedication = function (req, res){
    "use strict";

    var diagnosisId = req.params.id;
    var newMedication = req.body;

    console.log(newMedication, diagnosisId);

    DiagnosisService.addDiagnosisMedications(diagnosisId, newMedication).then(function(medication) {

        console.log("return",medication);
        res.status(200).jsonp(medication);

    }, function (err) {
        return res.status(500).send(err.message);
    });
};

module.exports = DiagnosisController;