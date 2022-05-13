import { format } from 'date-fns';
import React from 'react'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ClipLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const BookingModal = ({ date, setTreatment, treatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <div className='h-max flex justify-center items-center'>
            <ClipLoader loading={loading} size={150} />
        </div>
    }
    const handleBooking = (e) => {
        e.preventDefault();
        const time = e.target.slot.value;
        const phone = e.target.number.value;
        const bookingDate = format(date, 'PP');
        const info = {
            _id: _id,
            date: bookingDate,
            time: time,
            treatmentName: name,
            patientName: user?.displayName,
            phone: phone,
            email: user?.email,
        };
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(`Appointment is set on ${bookingDate} at ${time}`)
                } else {
                    toast.error(`Alredy have an appointment on ${bookingDate} at ${time}`)
                }
            })
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
                            {slots.map((slot, index) => <option
                                key={index}
                                value={slot}
                            >{slot}</option>)}
                        </select>
                        <input
                            defaultValue={user.displayName}
                            disabled
                            type="text"
                            name='name'
                            className="input w-full max-w-xs" />
                        <input
                            defaultValue={user.email}
                            disabled
                            type="email"
                            name='email'
                            className="input w-full max-w-xs" />
                        <input type="text" name='number' required placeholder="Your Phone Number" className="input w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default BookingModal