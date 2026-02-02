import User from "../models/user.model.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success:false,
                message: "User not found",
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                success:false,
                message: "Invalid credentials",
            });
        }

        res.status(200).json({
            message: "Login successful",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error",
            error:error.message
        });
    }
};

export const register = async (req, res) => {
    res.json({ message: "Register works" });
};
