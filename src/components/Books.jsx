import React from 'react';
import Book from './Book';
import { useSelector } from 'react-redux';

const Books = () => {
    const books = useSelector(state => state.books);
    return (
        <table class="booking-table">
            {
                books.length > 0 && <thead class="bg-gray-100/50">
                    <tr class="text-black text-left">
                        <th>Destination From</th>
                        <th>Destination To</th>
                        <th class="text-center">Journey Date</th>
                        <th class="text-center">Guests</th>
                        <th class="text-center">Class</th>
                        <th class="text-center">Delete</th>
                    </tr>
                </thead>
            }
            <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
                {
                    books.map(book => <Book book={book} key={book.id}></Book>)
                }

            </tbody>
        </table>
    );
};

export default Books;