/*jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: true*/

/* globals require, module */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
    
    name: { type: String, required: true },
    DNI: { type: String, required: true },
    address: String,
    birthDate: { type: Date, required: true },
    picture: String,
    generalDescription: String,
    phoneNumber: String,
    diagnosis: [{ type: Schema.Types.ObjectId, ref : "Diagnosis" }],
    profiles: [{ type: Schema.Types.ObjectId, ref : "Profile" }],
    treatment: [{ type: Schema.Types.ObjectId, ref : "Treatment" }],
    closestPeople: [
        {
            personId: { type: String, required: true },
            name: { type: String, required: true },
            phone: { type: String, required: true },
            picture: { type: String, required: true },
            priority: { type: Number, required: true }
        }
    ]

});

/*PatientSchema.prototype.getPatients = function(){

    PatientSchema.find().populate('diagnoses').exec()
};*/

module.exports = mongoose.model("Patient", PatientSchema);

