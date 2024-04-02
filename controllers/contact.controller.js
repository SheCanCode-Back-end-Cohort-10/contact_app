// Contact controllers here
// Contact controllers here
import contactModel from "../models/contact.model.js"
// import errorHandler from "../errorHandler/contactErrorHandler.js"

const contactController={

//create new contact
createContact:async(req,res)=>{
try{
    const addContact=await contactModel.create(req.body)
    res.status(201).json({
        message:"Contact created successfully",
        contact:addContact
    })

}
catch(eror){

console.log(eror.message);
}
},

//get all contacts
getAllContact:async(req,res)=>{
    try{
        const getContact=await contactModel.find()
        res.status(201).json({
            message:"list of contacts you have",
            contact:getContact
        })
    
    }
    catch(eror){
    
    console.log(eror.message);
    }
    },

    //get contact by id
    getContactById:async(req,res)=>{
        try{
            
            const idContact=await contactModel.findById(req.params.id)
            res.status(201).json({
                message:"get contact by id",
                contact:idContact
            })
        
        }
        catch(eror){
    
        console.log(eror.message);
        }
        },

        //get contact by email

        getContactByEmail:async(req,res)=>{
            try{
                
                const emailContact=await contactModel.findOne({email:req.params.email})
                res.status(201).json({
                    message:"get contact by email",
                    contact:emailContact
                })
            
            }
            catch(eror){
           
            console.log(eror.message);
            }
            },

            //get contact by firstname

            getContactByFirstname:async(req,res)=>{
                try{
                    
                    const firstNameContact=await contactModel.findOne({firstName:req.params.firstName})
                    res.status(201).json({
                        message:"get contact by firstname",
                        contact:firstNameContact
                    })
                
                }
                catch(eror){
               
                console.log(eror.message);
                }
                },

//get contact by lastname

 //get by firstname
 getContactByLastname:async(req,res)=>{
    try{
        
        const firstNameContact=await contactModel.findOne({lastName:req.params.lastName})
        res.status(201).json({
            message:"get contact by lastname",
            contact:firstNameContact
        })
    
    }
    catch(eror){
   
    console.log(eror.message);
    }
    },

    //get contact by phone

    getContactByPhone:async(req,res)=>{
        try{
            
            const phoneContact=await contactModel.findOne({phone:req.params.phone})
            res.status(201).json({
                message:"get contact by phone",
                contact:phoneContact
            })
        
        }
        catch(eror){
       
        console.log(eror.message);
        }
        },

   
        //delete contact 

        deleteContact:async(req,res)=>{
            try{
                
                const deleteContact=await contactModel.findOneAndDelete(req.params.id)
                res.status(200).json({
                    message:`contact deleted successfuly`,
                    contact:deleteContact
                })
            
            }
            catch(eror){
            
            console.log(eror.message);
            }
            },

//update contact

            updateContact: async (req, res) => {
                try {
                    
                    const updatedContact = await contactModel.findByIdAndUpdate(
                        req.params.id, 
                        req.body, 
                        { new: true } 
                    );
        
                    
                    if (!updatedContact) {
                        return res.status(404).json({ message: "Contact not found" });
                    }
        
                   
                    res.status(200).json({
                        message: "Contact updated successfully",
                        contact: updatedContact
                    });
                } catch (error) {
                    // Handle any errors that occur during the update process
                    res.status(500).json({ error: error.message });
                }
            }
    
}

export default contactController
