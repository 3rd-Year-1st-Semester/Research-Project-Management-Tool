const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupAssign = new Schema({

    full_name:{
        type:String,
        required:true
    },

    group_name:{
        type:String,
        required:true
    }

})

const assign = mongoose.model("Groups with Assign panel Members",GroupAssign);
module.exports = assign;