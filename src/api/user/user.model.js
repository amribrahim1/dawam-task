import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    email: { type: String, required: [true, 'Email is required'] },
    firstName: { type: String,default: null },
    lastName: { type: String,default: null },
    password: { type: String, required: [true, 'Password is required'] },
    phone: { type: String },
    token: { type: String, default: null},
    active: { default: true, type: Boolean },
    salt : String,
    type: { type: String, default: 'user'},
},{ timestamps: true });


UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({
        id: this._id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        type: this.type,
    }, "AmrEraky");     // I can Replace 'AmrEraky' with any app key
    this.token === token; 
    return token;
};

// Method to set salt and hash the password for a user 
UserSchema.methods.setPassword = function() {    
    // Creating a unique salt for a particular user 
    this.salt = crypto.randomBytes(16).toString('hex'); 
    
    // Hashing user's salt and password with 1000 iterations, 
    
    this.password = crypto.pbkdf2Sync(this.password, this.salt,  
    1000, 64, `sha512`).toString(`hex`); 
}; 
     
// Method to check the entered password is correct or not 
UserSchema.methods.validPassword = function(password) { 
    const hash = crypto.pbkdf2Sync(password,  
    this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return this.password === hash; 
};

export default mongoose.model('User', UserSchema);