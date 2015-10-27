/*jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: true*/

/* globals require, module */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    
    description: String,
    tags: [String],
    //attachmentFiles:[{type : Schema.Types.ObjectId, ref : 'AttachmentFile'}]
});

module.exports = mongoose.model("Note", NoteSchema);

           
    