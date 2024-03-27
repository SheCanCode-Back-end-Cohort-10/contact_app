// Contact controllers here

import contactModel from '../models/contact.model.js'

const contactControllers={
    createContact: async(req, res)=>{
        try {
            const newContact = await contactModel.create(req.body);
            res.status(200).json({msg:"Contact created successfully",contactModel: newContact});
        } catch (error) {
            res.status(500).send({error: error});
        }
    },
    listContacts: async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    },
    updateByEmail: async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    },
    updateById: async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    },
    deleteById: async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    },
    deleteByEmail: async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    }
}
export default contactControllers;