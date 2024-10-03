import { booking } from "../models/booking-model.js";


export const getAllbookings = async (req, res,) => {
   const book = await booking.find();

   res.status(200).json(book);
}

export const getOneBooking = (req, res) => {
   res.status(200).json('This is the booking');
}

export const postBooking = async (req, res, next) => {
   try {
      const newBooking = new booking(req.body)
      // console.log('request', req)

      const bookings = await newBooking.save(req.body)

      res.status(201).json('booking added successfully')
   } catch (error) {
      next(error);

   };
}

export const updateBooking = (req, res) => {
   res.status(200).json('patch all booking');
}

export const deleteBooking = (req, res) => {
   res.status(200).json('delete all booking');
}




