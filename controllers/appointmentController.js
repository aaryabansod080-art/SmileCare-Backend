import Appointment from "../models/Appointment.js";


// Create Appointment
export const createAppointment = async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            doctor,
            date,
            time,
            message
        } = req.body;


        const appointment = new Appointment({

            user: req.user ? req.user.id : null,
            name,
            email,
            phone,
            doctor,
            date,
            time,
            message

        });


        await appointment.save();


        res.status(201).json({
            message: "Appointment booked successfully",
            appointment
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// Get All Appointments (Admin)
export const getAppointments = async (req,res)=>{

    try{

        const appointments = await Appointment.find()
        .populate("user","name email");


        res.json(appointments);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// Get Single User Appointment

export const getUserAppointments = async(req,res)=>{

    try{

        const appointments = await Appointment.find({
            user:req.user.id
        });


        res.json(appointments);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// Update Appointment Status

export const updateAppointmentStatus = async(req,res)=>{

    try{


        const appointment = await Appointment.findById(
            req.params.id
        );


        if(!appointment){

            return res.status(404).json({
                message:"Appointment not found"
            });

        }


        appointment.status = req.body.status;


        await appointment.save();


        res.json({
            message:"Status updated",
            appointment
        });



    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// Delete Appointment

export const deleteAppointment = async(req,res)=>{

    try{

        const appointment = await Appointment.findByIdAndDelete(
            req.params.id
        );


        if(!appointment){

            return res.status(404).json({
                message:"Appointment not found"
            });

        }


        res.json({
            message:"Appointment deleted"
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};