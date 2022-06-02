const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PanelMember = new Schema({

    user_id:{
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
    }
    
})

const panlemember = mongoose.model('panel members',PanelMember);
module.exports = panlemember;