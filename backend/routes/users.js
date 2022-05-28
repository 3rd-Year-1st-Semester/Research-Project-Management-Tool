const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {

    try {
        const user = await User.findOne({ user_id: req.body.user_id });
        if (user) {
            return res.status(409)
                .send({ message: "User with given User ID already exist" })
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10);

        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201)
            .send({ message: "User Registered Successfully" });
    }
    catch (error) {
        res.status(500)
            .send({ message: "Internal Server Error" });
    }
})

router.post('/login', async (req, res) => {

    try {
        const user = await User.findOne({ user_id: req.body.user_id });
        if (!user) {
            return res.status(401).send({ message: "Invalid User ID or Password" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );

        if (!validPassword)
            return res.status(401).send({ message: "Invalid Student ID or Password" });

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "Logged in successfully" });
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }

})

router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log(err);
        })
})


router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        })
})


router.put('/update/:id',async (req,res)=>{
    const user = req.body;
    
    User.findByIdAndUpdate(req.params.id,user)
    .then(()=>{
        res.json("User update successfully");
    })
    .catch((err)=>{
        res.json(err);
    })

})

router.delete('/delete/:id',(req,res)=>{
    User.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.json("User Deleted Successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = router;