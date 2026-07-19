import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

user: {
    type:
mongoose.Schema.Types.ObjectId,
ref:"User",
},

name:String,

email:String,

phone:String,

doctor:String,

date:String,

time:String,

message:String,

status:{
type:String,
default:"Pending"
}

},
{
timestamps:true
});


export default mongoose.model("Appointment",appointmentSchema);