import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is requried'],

    },
    profilePic: {

    }




}, { timestamps: true })

//hash function for bcrypt
userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);

})
// compare functiyon 
userSchema.methods.comparePassword = async function (plainPassword) {
    return await bcrypt.compare(plainPassword, this.password)
}


// JWT Token function 

userSchema.methods.generateToken = function () {
    return JWT.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '7' })
}




const Users = mongoose.model('Users', userSchema);


export default Users;