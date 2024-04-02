// Contact routes here

import express from 'express';
import contactController from '../controllers/contact.controller.js';
const router=express.Router();

//create account route
router.route('/create').post(contactController.createContact);
router.route('/list').get(contactController.getAllContact);
router.route('/list/:id').get(contactController.getContactById);
router.route('/email/:email').get(contactController.getContactByEmail);
router.route('/phone/:phone').get(contactController.getContactByPhone);
router.route('/firstname/:firstName').get(contactController.getContactByFirstname);
router.route('/lastname/:lastName').get(contactController.getContactByLastname);
router.route('/list/:id').delete(contactController.deleteContact);
router.route('/update/:id').put(contactController.updateContact);

export default router



