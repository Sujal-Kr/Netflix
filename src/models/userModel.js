import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
},{
    timestamps:true
})

const user = mongoose.models.user || mongoose.model('user', schema)
export default user