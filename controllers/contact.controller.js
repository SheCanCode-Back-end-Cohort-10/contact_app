// Contact controllers here

import contactModel from '../models/contact.model.js'

const contactControllers={
    createContact: async(req, res)=>{
        try {
            const alreadyExist=await contactModel.findOne({phone: req.body.phone})
            if(alreadyExist) {
                res.status(200).send({message: "Contact already exists"});
            }
            else{
                const newContact = await contactModel.create(req.body);
                res.status(201).json({msg:"Contact created successfully", newContact: newContact});    
            }
        } catch (error) {
            res.status(500).send({error: error.message});
        }
    },
    listContacts: async(req, res)=>{
        try {
            const allContacts = await contactModel.find(req.body);
            res.status(200).json({msg:"All contacts found", allContacts})
        } catch (error) {
            res.status(500).send({error: error.message});
        }
    },
    updateByEmail: async(req, res)=>{
        try {
            const findContactByEmail = await contactModel.findOne({email:req.params.email});
            res.status(200).json({msg:"Contact updated", findContactByEmail})
        } catch (error) {
            res.status(500).send({error: error.message});
        }
    },
    updateById: async(req, res)=>{
        try {
            const ContactId=req.params.id;
            if(!ContactId){
                res.status(404).send({error: "Contact not found"});
            }
            else {
                const updateContactById = await contactModel.findByIdAndUpdate({ContactIdId});
                res.status(200).json({msg:"Contact updated", updateContactById});
            }
        } catch (error) {
            res.status(500).send({error: error.message});
        }
    },
    deleteById: async(req, res)=>{
        try {
            const newId=req.params.id;
            if(!newId){
                res.status(200).send({error: "Contact not found thus the contact did not exist"});
            }
            else {
                const deleteContactById = await contactModel.findByIdAndDelete({newId});
                res.status(200).json({msg:"Contact deleted", deleteContactById});
            }
        } catch (error) {
            res.status(500).send({error: error.message});
        }
    },
    deleteByEmail: async(req, res)=>{
        try {
            const emailAddress = req.params.email;
            if(!emailAddress){
                res.status(200).send({msg: "There is no contact with the email address provided"})
            }
            else {
                const deleteContactByEmail = await contactModel.findOneAndDelete({emailAddress});
                res.status(200).json({msg:"Contact deleted", deleteContactBy});
            }
        } catch (error) {
            
        }
    }
}
export default contactControllers;