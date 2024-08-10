const User = require("../models/User");


exports.updateUser = async (req, res) => {
    try{
        const {name, email, title, department, role} = req.body;
        const {id} = req.params;

        const user = await User.findById(id);
        if(name){
            user.name = name.trim();
            user.image = `https://api.dicebear.com/5.x/initials/svg?seed=${name}`
        }
        if(email){
            user.email = email;
        }
        if(title){
            user.title = title;
        }
        if(department){
            user.department = department
        }
        if(role){
            user.role = role;
        }
        await user.save();

        return res.status(200).json({
            success: true,
            message: "User data updated successfully"
        })
    } catch(e){
        return res.status(500).json({
            success: false,
            message: "Could not update data, Internal server error",
            error: e.message
        })
    }
}