import { format } from 'date-fns';
import React from 'react'

const BookingModal = ({ date, setTreatment, treatment }) => {
    const { _id, name, slots } = treatment;
    const handleBooking = (e) => {
        e.preventDefault();
        const time = e.target.slot.value;
        const treatment = name;
        const patientName = e.target.name.value;
        const phone = e.target.number.value;
        const email = e.target.email.value;
        console.log(_id, time, treatment, patientName, phone, email);
        setTreatment(null)
    }
    return (
        <div>
            < input type="checkbox" id="booked-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booked-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking For : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-4'>
                        <input type="text" defaultValue={format(date, 'PP')} disabled className="input w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" placeholder="Your Name" required name='name' className="input w-full max-w-xs" />
                        <input type="text" name='number' required placeholder="Your Phone Number" className="input w-full max-w-xs" />
                        <input type="email" name='email' required placeholder="Your Email" className="input w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default BookingModal