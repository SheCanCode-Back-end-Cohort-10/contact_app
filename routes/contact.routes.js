// Contact routes here
import expresss from'express';

import {
    createContact, 
    deleteByEmail, 
    deleteById, 
    listContacts, 
    updateByEmail, 
    updateById} from '../controllers/contact.controller'


const router = expresss.Router();


router.route('/').push(createContact()).get(listContacts());



export default router;