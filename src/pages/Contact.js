import React, { useState } from 'react';

import style from '../module.css/contact.module.css';

const Contact = () => {

    const [contactDetails, setContactDetails] = useState({
        name: '',
        dob: '',
        email: '',
        phoneNr: '',
        reasonForContact: ''
    });

    return (
        <section>
            <h2>Contact Form</h2>
            <form>
                <label>Name :</label>
                <input type='text' />
                <label>Date Of Birth :</label>
                <input type='date' />
                <label>Email :</label>
                <input type='text' />
                <label>Phone Nr. :</label>
                <input type='tel' />
                <label>Reason For Contact :</label>
                <textarea rows={5} />
                <br />
                <div className={style.form_controls}>
                    <button>Review</button>
                    <button>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;