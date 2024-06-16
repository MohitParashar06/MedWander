const { createFormEntry } = require('../models/formModel');

const saveForm = (req, res) => {
    const { formType, name, countryCode, phoneNumber } = req.body;
    createFormEntry(formType, name, countryCode, phoneNumber, (err, result) => {
        console.log(err);
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: 'Form saved successfully!' });
    });
};

const refreshData = (req, res) => {
    // Implementation for data synchronization with external Excel sheet
    // This requires fetching the data from the DB and sending it to the Excel sheet
    res.send({ message: 'Data synchronized!' });
};

module.exports = { saveForm, refreshData };
