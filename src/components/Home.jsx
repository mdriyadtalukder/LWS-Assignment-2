import React from 'react';
import Form from './Form';
import Books from './Books';

const Home = () => {
    return (
        <section>
            <Form></Form>

            <div class="table-container">
                <Books></Books>
            </div>
        </section>
    );
};

export default Home;