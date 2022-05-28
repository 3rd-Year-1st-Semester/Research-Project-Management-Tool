const { default: mongoose } = require('mongoose');
const Schema = require('mongoose').Schema;
const jwt = require('jsonwebtoken');

const studentSchema = new Schema({

    student_id:{
        type:String,
        required:true
    },

    full_name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    contact_number:{
        type:String,
        required:true
    },

    faculty:{
        type:String,
        required:true
    },

    academic_year:{
        type:String,
        required:true,
    },

    semester:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }

})

studentSchema.methods.generateAuthToken = function () {
    const std_token = jwt.sign({ _id: this._id}, process.env.JWTPRIVATEKEY, {
        expiresIn: "1440"
    });
    return std_token;
}

const student = mongoose.model("students",studentSchema);
module.exports = student;