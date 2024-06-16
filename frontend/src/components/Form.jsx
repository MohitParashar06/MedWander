import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ formType }) => {
    const [name, setName] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { formType, name, countryCode, phoneNumber };

        try {
            const response = await axios.post('http://localhost:5000/api/forms/save', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error saving form');
        }
    };

    return (
        <div>
            <h2>{formType === 'A' ? 'Form A' : 'Form B'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required pattern="[A-Za-z]+" />
                </div>
                <div>
                    <label>Country Code:</label>
                    <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required>
                        <option value="">Select Country Code</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        {/* <!-- Add more country codes as needed --> */}
                    </select>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required pattern="\d+" />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Form;
