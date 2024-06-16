import React, { useState } from 'react';
import Form from './components/Form';
import axios from 'axios';

const App = () => {
    const [formType, setFormType] = useState(null);
    const [syncMessage, setSyncMessage] = useState('');

    const handleFormClick = (type) => {
        setFormType(type);
    };

    const handleRefresh = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/forms/refresh');
            setSyncMessage(response.data.message);
        } catch (error) {
            setSyncMessage('Error syncing data');
        }
    };

    return (
        <div>
            <button onClick={() => handleFormClick('A')}>Form A</button>
            <button onClick={() => handleFormClick('B')}>Form B</button>
            {formType && <Form formType={formType} />}
            <button onClick={handleRefresh}>Refresh</button>
            {syncMessage && <p>{syncMessage}</p>}
        </div>
    );
};

export default App;
