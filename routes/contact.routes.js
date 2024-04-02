// Contact routes hereconst express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/createContact', contactController.createContact);
router.put('/updateContact/:id', contactController.updateContact);
router.delete('/deleteContact/:id', contactController.deleteContact);
router.get('/:id', contactController.findContactById);

module.exports = router;
