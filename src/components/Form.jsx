import React, { useRef, useState } from 'react';
import img from '../assets/icons/Frame.svg';
import img2 from '../assets/icons/Vector (1).svg';
import img3 from '../assets/icons/Vector (3).svg';
import { useDispatch, useSelector } from 'react-redux';
import { added } from '../redux/books/action';

const Form = () => {
    const dates = useRef('')
    const [des, setDes] = useState('');
    const [desTo, setDesTo] = useState('');
    const [guest, setGuest] = useState('');
    const [classes, setClasses] = useState('');
    const dispatch = useDispatch();
    const books = useSelector(state => state.books)
    const adding = (e) => {
        if (des === desTo  ) {
            e.preventDefault();
            alert("Please try again!!")
        }
        else {
            e.preventDefault();
            dispatch(added(des, desTo, dates.current.value, guest, classes));
            e.target.reset();
        }
    }

    return (
        <div class="mt-[160px] mx-4 md:mt-[160px] relative">
            <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form onSubmit={adding} class="first-hero lws-inputform">
                    <div class="des-from">
                        <p>Destination From</p>
                        <div class="flex flex-row">
                            <img src={img} alt="" />
                            <select onChange={(e) => setDes(e.target.value)} class="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    <div class="des-from">
                        <p>Destination To</p>
                        <div class="flex flex-row">
                            <img src={img} alt="" />
                            <select onChange={(e) => setDesTo(e.target.value)} class="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    <div class="des-from">
                        <p>Journey Date</p>
                        <input ref={dates} type="date" class="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
                    </div>

                    <div class="des-from">
                        <p>Guests</p>
                        <div class="flex flex-row">
                            <img src={img2} alt="" />
                            <select onChange={(e) => setGuest(e.target.value)} class="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                                <option value="" hidden>Please Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    <div class="des-from !border-r-0">
                        <p>Class</p>
                        <div class="flex flex-row">
                            <img src={img3} alt="" />
                            <select onChange={(e) => setClasses(e.target.value)} class="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                                <option value="" hidden>Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button disabled={books.length === 3} class="addCity" type="submit" id="lws-addCity">
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span class="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;