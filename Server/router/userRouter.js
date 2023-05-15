const express = require('express')
const router = express.Router()
const User = require('../models/User')
//Registration API
/*
API URK:  localhost:8080/user/add
METHOD Type:POST
Require fieilds: name, email, mobile, password
access Type:public
*/

router.post("/add", async (req, resp) => {
    try {
        console.log("Test Case 123")
        let { name, email, mobile, password } = req.body
        // user already exists or not
        /*  let user = await User.findOne({ email: email });
         if (user) {
             return response.status(401).json({ errors: [{ msg: 'User already exists' }] });
         }
         console.log(user) */
        // insert into database
        let user = new User({ name, email, password, mobile });
        user = await user.save();

        response.status(200).json({
            result: 'success',
            user: user
        });
    }
    catch (err) {

    }


});
//Login API

module.exports = router 