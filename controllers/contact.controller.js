// Contact controllers here
const Contact = require('../models/contactModel');

exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(contact);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.send('Contact deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.findContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
  } catch (error) {
    res.status(404).send('Contact not found');
  }
};
 