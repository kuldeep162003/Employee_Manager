const User = require("../models/User");

exports.removeUser = async (req, res) => {
    try{
        const {id} = req.params;

        const deletedData = await User.findByIdAndDelete(id);

        if (!deletedData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        res.status(200).json({
            success: true,
            data: deletedData,
            message: `User Data with name: ${deletedData.name} and email: ${deletedData.email} is Successfully Deleted`
        })
    }
    catch(e){
        console.error(e.message);
        res.status(500).json({
            success: false,
            message: "Error Occured in Deleting Data"
        })
    }
}