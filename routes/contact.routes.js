// Contact routes here



// Contact routes here
import expresss from'express';

import contactControllers from '../controllers/contact.controller.js';


const router = expresss.Router();


router.route('/').post(contactControllers.createContact).get(contactControllers.listContacts);

router.route('/id/:id').patch(contactControllers.updateById).delete(contactControllers.deleteById).get(contactControllers.showById);

router.route('/email/:email').patch(contactControllers.updateByEmail).delete(contactControllers.deleteByEmail).get(contactControllers.showByEmail);

export default router;