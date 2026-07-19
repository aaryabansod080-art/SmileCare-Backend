import express from "express";

import {
    createAppointment,
    getAppointments,
    getUserAppointments,
    updateAppointmentStatus,
    deleteAppointment
} from "../controllers/appointmentController.js";

import auth from "../middleware/authMiddleware.js";


const router = express.Router();


// Book Appointment
router.post(
    "/",
    auth,
    createAppointment
);


// Admin get all appointments
router.get(
    "/",
    auth,
    getAppointments
);
// Get My Appointments
export const getMyAppointments = (token) =>
    API.get("/appointment/my", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });


// User appointments
router.get(
    "/my",
    auth,
    getUserAppointments
);


// Update status
router.put(
    "/:id",
    auth,
    updateAppointmentStatus
);


// Delete appointment
router.delete(
    "/:id",
    auth,
    deleteAppointment
);


export default router;