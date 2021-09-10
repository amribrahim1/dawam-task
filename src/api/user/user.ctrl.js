import _ from "lodash";

import User from './user.model';

async function register(req, res) {
    try {
        const { email, firstName, lastName, password, phone } = req.body;

        let user = await User.findOne({ email });
        if (!_.isEmpty(user)) {
            return res.status(400)
                .send({
                    ok: false,
                    message : `A user with '${email}' Email is exists.`,
                });
        }

        let newUser = new User();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.email = email;
        newUser.phone = phone;
        newUser.password=password;
        newUser.setPassword(req.body.password); 
        const token = await newUser.generateAuthToken();
        newUser.token = token;

        await newUser.save((err, user) => { 
            if (err) { 
                return res.status(400).send({ 
                    ok: false,
                    error: err.message
                }); 
            } 
            else { 
                return res.status(200).send({ 
                    ok: true,
                    user: {
                        id: user._id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        phone: user.phone,
                        token: user.token,
                        active: user.active,
                        type: user.type
                    }
                }); 
            } 
        });
    } catch (e) {
        res.status(400).send(e.message);
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    
    // Find user with requested email 
    User.findOne({ email }, function(err, user) { 
        if (err) {
            res.status(400).send({
                ok: false,
                error: err.message
            })
        }
        
        if (user === null) { 
            return res.status(400).send({ 
                ok: false,
                message : "User not found."
            }); 
        } 
        else { 
            if (user.validPassword(password)) { 
                return res.status(200).send({ 
                    ok: true,
                    user: {
                        id: user._id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        phone: user.phone,
                        token: user.generateAuthToken(),
                        active: user.active,
                        type: user.type
                    }                   
                }) 
            } 
            else { 
                return res.status(400).send({ 
                    ok: false,
                    message : "Wrong Password"
                }); 
            } 
        } 
    }); 
}

export default {
    register,
    login
};