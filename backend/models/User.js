const { default: mongoose } = require('mongoose');
const Schema = require('mongoose').Schema;
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
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
    },
    contact_number:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true
    },
    user_role:{
        type:String,
        required:true
    },
    user_type:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

userSchema.methods.generateAuthToken = function () {
    const user_token = jwt.sign({ _id: this._id,user_type:this.user_type}, process.env.JWTPRIVATEKEY, {
        expiresIn: "1440"
    });
    return user_token;
}

const user = mongoose.model("users",userSchema);
module.exports = user;