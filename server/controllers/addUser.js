const User = require('../models/User');

exports.addUser = async (req, res) => {
    try{
        const {name, email, title, department, role} = req.body;
        if (!name || name.trim().length === 0 || !email || !title || title.trim().length === 0 || !role || role.trim().length === 0 || !department || department.trim().length === 0) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields",
            });
        }
        
        const newUser = await User.create({name, email, title, department, role, image:`https://api.dicebear.com/5.x/initials/svg?seed=${name}`});
        
        res.status(200).json({
            success: true, 
            newUser: newUser,
            message: "User Data Submitted Successfully"
        })
    }
    catch(e){
        if(e.code === 11000){
            res.status(400).json({
                success: false,
                message: "Email already exists"
            })
        }
        else{
            res.status(500).json({
                success: false, 
                message: "Internal server Error"
            })
        }
    }
}