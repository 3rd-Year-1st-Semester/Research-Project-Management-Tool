const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicRegistrationSchema = new Schema({

    studentId:{
        type:String,
        required:true
    },

    fullName:{
        type:String,
        required:true
    },
    groupName: {
        type:String,
        required:true
    },

    faculty:{
        type:String,
        required:true
    },

    academicYear:{
        type:String,
        required:true,
    },

    semester:{
        type:String,
        required:true
    },
   
    subjectName : {
        type:String,
        required:true
    },
   
    researchName : {
        type:String,
        required:true
    },

    contact_number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const TopicRegistration= mongoose.model("Topic" ,topicRegistrationSchema );

module.exports=TopicRegistration;