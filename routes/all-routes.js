
import {Router} from 'express';
import { deleteBooking, getAllbookings, getOneBooking, postBooking, updateBooking } from '../controllers/booking-controllers.js';


// create a router
export const bookingRouter = Router();


bookingRouter.get('/booking', getAllbookings);
bookingRouter.get('/booking/:id', getOneBooking);
bookingRouter.post('/booking', postBooking);
bookingRouter.patch('/booking/:id', updateBooking);
bookingRouter.delete('/booking/:id', deleteBooking);


