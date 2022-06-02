const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema({

    subject_name: {
        type: String,
        required: true
    },
    group_name: {
        type: String,
        required: true
    },
    academic_year: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    student_1_reg: {
        type: String,
        required: true
    },
    student_1_name: {
        type: String,
        required: true
    },
    student_1_contact: {
        type: String,
        required: true
    },
    student_1_email: {
        type: String,
        required: true
    },
    student_2_reg: {
        type: String,
        required: true
    },
    student_2_name: {
        type: String,
        required: true
    },
    student_2_contact: {
        type: String,
        required: true
    },
    student_2_email: {
        type: String,
        required: true
    },
    student_3_reg: {
        type: String,
        required: true
    },
    student_3_name: {
        type: String,
        required: true
    },
    student_3_contact: {
        type: String,
        required: true
    },
    student_3_email: {
        type: String,
        required: true
    },
    student_4_reg: {
        type: String,
        required: true
    },
    student_4_name: {
        type: String,
        required: true
    },
    student_4_contact: {
        type: String,
        required: true
    },
    student_4_email: {
        type: String,
        required: true
    },
    created_by:{
        type:String,
        required:true
    }

})

const group = mongoose.model('groups', Group);
module.exports = group;