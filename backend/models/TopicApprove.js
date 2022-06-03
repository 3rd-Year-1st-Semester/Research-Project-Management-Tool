const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicApproveSchema = new Schema({

    // studentId:{
    //     type:String,
    //     required:true
    // },

    // fullName:{
    //     type:String,
    //     required:true
    // },
    // groupName: {
    //     type:String,
    //     required:true
    // },

    // faculty:{
    //     type:String,
    //     required:true
    // },

    // academicYear:{
    //     type:String,
    //     required:true,
    // },

    // semester:{
    //     type:String,
    //     required:true
    // },
   
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

const TopicApprove= mongoose.model("TopicApprove" ,topicApproveSchema );

module.exports=TopicApprove ;