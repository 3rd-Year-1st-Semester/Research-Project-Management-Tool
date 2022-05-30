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
}

});
const Marking = mongoose.model("MarkingScheme",MarkingSchema);
module.exports = Marking;