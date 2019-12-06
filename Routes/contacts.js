const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');

router.get('/contacts', (req, res) => {
  Contact.find().then(contacts => {
    res.send(contacts);
  });
});

router.post('/addcontact', (req, res) => {
  const newContact = new Contact(req.body);

  newContact
    .save()
    .then(contact => res.send(contact))
    .catch(e => res.send(e));
});

router.put('/modifycontact/:id', (req, res) => {
  Contact.updateOne({ _id: req.params.id }, req.body)
    .then(result => res.send('contact updated'))
    .catch(e => res.send(e));
});

router.delete('/deletecontact/:id', (req, res) => {
  Contact.deleteOne({ _id: req.params.id })
    .then(result => res.send('contact deleted'))
    .catch(e => res.send(e));
});

module.exports = router;
