import mongoose from 'mongoose';

const contactSchema =new mongoose.Schema({
    firstName:{
        type: String,
        required:[true, "First name is required"]
    },
    lastName:{
        type: String,
        required:[true, "Last name is required"]
    },
    email:{
        type: String,
        required:[true, "Email is required"]
    },
    phone: {
        type: String,
        required:[true, "Phone number is required"],
        unique:true
    },
    workPhone: {
        type: String,
        required:[true, "Work phone number is required"],
    },
    address: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    },
    profilePicture: {
        type: String,
        required: false
    }
},{
    timestamps:true
});

const contactModel = mongoose.model('contact',contactSchema);

export default contactModel;