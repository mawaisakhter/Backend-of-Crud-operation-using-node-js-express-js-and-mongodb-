import mongoees from "mongoose";

const userSchema = new mongoees.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
})

export default mongoees.model("User", userSchema);