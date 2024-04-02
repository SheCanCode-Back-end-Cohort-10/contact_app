
const error={
    serverError:async(req,res)=>{
        res.status(500).json({
            message:"Internal server error"
        })
    },

    notFound:async(req,res)=>{
        res.status(404).json({
            message:"Router not found"
        })
    }
}

export default error