const jwt = require('jsonwebtoken');

// Check if user authorizated
export async function authUser (req, res, next){
    try {
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader) {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            const user = await jwt.verify(bearerToken, 'AmrEraky');
            if(user.type) {
                req.userId = user.id;
                next();
            } else {
                res.status(401).send({
                    ok: false,
                    error: 'Not authorized to access this resource'
                })
                return;
            }

            
        } else {
            res.status(401).send({
                ok: false,
                error: 'Not authorized to access this resource'
            })
            return;
        } 
    }
    catch(error) {
        res.status(401).send({
            ok: false,
            error
        })
        return;
    }
}

// Check if admin authorizated
export async function authAdmin (req, res, next){
    try {
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader) {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            const user = await jwt.verify(bearerToken, 'AmrEraky');
            if(user.type) {
                if (user.type === 'admin') {
                    req.userId = user.id;
                    req.userType = 'admin';
                    next();
                } else {
                    res.status(401).send({
                        ok: false,
                        error: 'Not authorized to access this resource'
                    })
                    return;
                }
            } else {
                res.status(401).send({
                    ok: false,
                    error: 'Not authorized to access this resource'
                })
                return;
            }

            
        } else {
            res.status(401).send({
                ok: false,
                error: 'Not authorized to access this resource'
            })
            return;
        } 
    }
    catch(error) {
        res.status(401).send({
            ok: false,
            error
        })
        return;
    }
}