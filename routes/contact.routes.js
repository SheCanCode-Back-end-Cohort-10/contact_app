// Contact routes here
import contactController from "../controllers/contact.controller.js";
import  Router  from "express";
const router = Router()

router.post('/add',contactController.creating)
router.get('/all',contactController.getAll)
router.get('/contact/:id',contactController.getbyId)
router.get('/contact/email/:email',contactController.getbyemail)
router.get('/contact/phone/:phone',contactController.getbyphone)
router.put('/contact/update/:id',contactController.updating)
router.delete('/contact/delete/:id',contactController.removingContact)

export default router