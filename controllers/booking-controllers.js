import { booking } from "../models/booking-model.js";


export const getAllbookings = (req, res,) => {
   res.status(200).json('These are all bookings');
}

export const getOneBooking = (req, res) => {
   res.status(200).json('This is the booking');
}

export const postBooking = async (req, res) => {
   const newBooking =  new booking()
   // console.log('request', req)

   const bookings = await newBooking.save(req.body)


   res.status(201).json(booking);
}

export const updateBooking = (req, res) => {
   res.status(200).json('patch all booking');
}

export const deleteBooking = (req, res) => {
   res.status(200).json('delete all booking');
}




