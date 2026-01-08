import {User} from "../models/user.js"

exports.register = async (req , res) => {
    try {
        const {firstName, lastName, DOB, email, Password} = req.body;

        // validate here
        if(!firstName || !lastName || !DOB || !email || !Password) {
            return res.status(400).json({message:"all field are required"});
        }
    } catch (error) {
        
    }
}