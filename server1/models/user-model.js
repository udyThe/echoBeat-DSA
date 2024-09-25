const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});
// securing password with bycrypt
userSchema.pre('save' , async function(next) {
// console.log("pre method",this);
const user = this;

if(user.isModified('password')){
    next(); // using next middleware we are storing everything into database
}
try{
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, saltRound);
user.password = hash_password;
}
catch(error){
next();
}
})


const User = new mongoose.model("Users" , userSchema);
module.exports = User;
