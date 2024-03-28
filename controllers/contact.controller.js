// Contact controllers here
import contactModel from "../models/contact.model.js";

const contactController = {
    creating:async(req,res)=>{
        
        try{
            const newcontact = await contactModel.create(req.body)
            res.status(201).json({
                message:'new contact created',
                constact:newcontact
            })
        }
        catch(err){
            console.log(err)
        }

    },
    getAll:async(req,res)=>{
        try{
        const allContacts = await contactModel.find()
         res.status(200).json({
            message:'list of contacts',
            contacts:allContacts
         })

        }
        catch(err){
            console.log(err)
        }

    },
    getbyId:async(req,res)=>{
        try{
     const contactbyId = await contactModel.findById({_id:req.params.id})
     res.status(201).json({
        message:"Coding by Id",
        contact:contactbyId
     })
        }
        catch(err){
            console.log(err)
        }
    },
    getbyemail:async(req,res)=>{
        try{
     const contactbyEmail = await contactModel.findOne({email:req.params.email})
     res.status(201).json({
        message:"Coding by Id",
        contact:contactbyEmail
     })
        }
        catch(err){
            console.log(err)
        }
    },
    getbyphone:async(req,res)=>{
        try{
     const contactbyphone = await contactModel.findOne({phone:req.params.phone})
     res.status(201).json({
        message:"Contact by phone",
        contact:contactbyphone
     })
        }
        catch(err){
            console.log(err)
        }
    },
    updating:async(req,res)=>{
        try{
            const updatedContact = await contactModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(201).json({
                message:'updated contact',
                contact:updatedContact
            })

        }
        catch(err){
            console.log(err)
        }
    },
    removingContact:async(req,res)=>{
        try{
       const removing = await contactModel.findByIdAndDelete(req.params.id,req.body)
       res.status(201).json({
        message:'contact was deleted',
        contact:removing

       })

        }
        catch(err){
            console.log(err)
        }
    }
}
export default contactController
