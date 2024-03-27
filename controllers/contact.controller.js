// Contact controllers here

const contactModel= require('../models/contact.model')


    const createContact = async(req, res)=>{
        try {
            const newContact = await contactModel.create(req.body);
            res.status(200).json({msg:"Contact created successfully",contactModel: newContact});
        } catch (error) {
            res.status(500).send({error: error});
        }
    }
    const listContacts = async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    }
    const updateByEmail = async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    }
    const updateById = async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    }
    const deleteById= async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    }
    const deleteByEmail = async(req, res)=>{
        try {
            
        } catch (error) {
            
        }
    }

export default {
    createContact, 
    deleteByEmail, 
    deleteById, 
    listContacts, 
    updateByEmail, 
    updateById};