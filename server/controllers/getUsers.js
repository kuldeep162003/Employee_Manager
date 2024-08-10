const User = require("../models/User")

exports.getUsers = async (req, res) => {
    try{
        const userData = await User.find({});

        if(userData.length === 0){
            return res.status(200).json({
                success: true,
                message: "No Current Users"
            })
        }

        res.status(200).json({
            success: true,
            data: userData,
            message: "User Data Retrived Successfully"
        })
    }
    catch(e){
        console.log(e.message);
        console.error(e);
        res.status(500).json({
            success: false,
            message: "Error Occured in Fetching Data"
        })
    }
}