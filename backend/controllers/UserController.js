import Users from "../models/UserModel.js";

export const RegisterController = async (req, res) => {
    try {
        const { name, email, password, repassword } = req.body;
        if (!name || !password || !email || !repassword) {
            return res.status(400).json({ msg: 'Please provide all fields' });
        }
        if (password !== repassword) {
            return res.status(400).json({ msg: 'Passwords do not match' });
        }
        const existingEmai= await Users.findOne({email})
        if(existingEmai){
            return res.status(500).send({success: false, msg:"Email already exist."})
        }
        // Creating a new user
        const user = await Users.create({
            name,
            email,
            password,
        });
        return res.status(201).json({ msg: "Registration successful, please login" });
    } catch (err) {
        console.error("Error registering user:", err);
        return res.status(500).json({ msg: "Internal server error" });
    }
};



// Login

export const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).json({ success: false, msg: "Write password and email of login" });
        }

        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).send({ success: false, msg: "No user found with this email" });
        }
        // Check password
        const isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
            return res.status(500).send({ success: false, msg: "Invalid password" });
        }

        // json web token 
        const token = user.generateToken();
        res.status(201).cookie("token", token,{
            expires: new  Date(Date.now()+15*24*60*60*1000)
        })
            .send({
            success: true,
            message:"login succesfull",
            token,
            user

        })

    } catch (err) { // Add 'err' parameter here to capture error
        console.log(err);
        res.status(500).send({
            success: false,
            msg: "Error in login API"
        });
    }


};



// Get user Proifle 

export const getUserProfileController = async(req,res)=>{
    try{
        res.status(201).send({
            success:true,
            msg:"User profile fetched succesfullsy"
        })

    }catch(error){
        console.log(error)
        res.status(404).send({
            success:false,
            message:"Error in profile api"
        })
    }

}