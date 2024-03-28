// Contact routes here
import expresss from'express';

import contactControllers from '../controllers/contact.controller.js';


const router = expresss.Router();


router.route('/').post(contactControllers.createContact).get(contactControllers.listContacts);

router.route('/:id').put(contactControllers.updateById).delete(contactControllers.deleteById);

router.route('/:email').put(contactControllers.updateByEmail).delete(contactControllers.deleteByEmail)

export default router;