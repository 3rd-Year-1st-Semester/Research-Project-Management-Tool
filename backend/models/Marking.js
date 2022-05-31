const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const MarkingSchema = new Schema({

subject_name:{

    type:String,
    required:true
}, 
   
assignment_name:{
     type:String,
     required:true

},

criteria:{

    type:String,
    required:true
},

poor_marks:{

    type:String,
    required:true
},

average_marks:{

    type:String,
    required:true
},

good_marks:{
    type:String,
    required:true
},

excellent_marks:{
    type:String,
    required:true
},

total_marks:{
    type:String,
    required:true
},
criteria1:{

    type:String,
    required:true
},

poor_marks1:{

    type:String,
    required:true
},

average_marks1:{

    type:String,
    required:true
},

good_marks1:{
    type:String,
    required:true
},

excellent_marks1:{
    type:String,
    required:true
},

total_marks1:{
    type:String,
    required:true
},

criteria2:{

    type:String,
    required:true
},

poor_marks2:{

    type:String,
    required:true
},

average_marks2:{

    type:String,
    required:true
},

good_marks2:{
    type:String,
    required:true
},

excellent_marks2:{
    type:String,
    required:true
},

total_marks2:{
    type:String,
    required:true
},

criteria3:{

    type:String,
    required:true
},

poor_marks3:{

    type:String,
    required:true
},

average_marks3:{

    type:String,
    required:true
},

good_marks3:{
    type:String,
    required:true
},

excellent_marks3:{
    type:String,
    required:true
},

total_marks3:{
    type:String,
    required:true
},

criteria4:{

    type:String,
    required:true
},

poor_marks4:{

    type:String,
    required:true
},

average_marks4:{

    type:String,
    required:true
},

good_marks4:{
    type:String,
    required:true
},

excellent_marks4:{
    type:String,
    required:true
},

total_marks4:{
    type:String,
    required:true
},

criteria5:{

    type:String,
    required:true
},

poor_marks5:{

    type:String,
    required:true
},

average_marks5:{

    type:String,
    required:true
},

good_marks5:{
    type:String,
    required:true
},

excellent_marks5:{
    type:String,
    required:true
},

total_marks5:{
    type:String,
    required:true
},

criteria6:{

    type:String,
    required:true
},

poor_marks6:{

    type:String,
    required:true
},

average_marks6:{

    type:String,
    required:true
},

good_marks6:{
    type:String,
    required:true
},

excellent_marks6:{
    type:String,
    required:true
},

total_marks6:{
    type:String,
    required:true
},

criteria7:{

    type:String,
    required:true
},

poor_marks7:{

    type:String,
    required:true
},

average_marks7:{

    type:String,
    required:true
},

good_marks7:{
    type:String,
    required:true
},

excellent_marks7:{
    type:String,
    required:true
},

total_marks7:{
    type:String,
    required:true
},
criteria8:{
    type:String,
    required:true
}

});
const Marking = mongoose.model("MarkingScheme",MarkingSchema);
module.exports = Marking;