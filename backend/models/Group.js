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
    student_1: {
        type: Array,
        required: true
    },
    student_2: {
        type: Array,
        required: true
    },
    student_3: {
        type: Array,
        required: true
    },
    student_4: {
        type: Array,
        required: true
    }

})

const group = mongoose.model('groups', Group);
module.exports = group;