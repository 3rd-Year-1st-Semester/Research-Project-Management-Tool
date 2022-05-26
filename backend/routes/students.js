const router = require('express').Router();
const Student = require('../models/Student');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {

    try {
        const student = await Student.findOne({ student_id: req.body.student_id });
        if (student) {
            return res.status(409)
                .send({ message: "Student with given Student ID already exist" })
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10);

        await new Student({ ...req.body, password: hashPassword }).save();
        res.status(201)
            .send({ message: "Student Registered Successfully" });
    }
    catch (error) {
        res.status(500)
            .send({ message: "Internal Server Error" });
    }
})

router.post('/login', async (req, res) => {

    try {
        const student = await Student.findOne({ student_id: req.body.student_id });
        if (!student) {
            return res.status(401).send({ message: "Invalid Student ID or Password" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password, student.password
        );

        if (!validPassword)
            return res.status(401).send({ message: "Invalid Student ID or Password" });

        const token = student.generateAuthToken();
        res.status(200).send({ data: token, message: "Logged in successfully" });
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }

})

router.get('/', (req, res) => {
    Student.find()
        .then((students) => {
            res.json(students);
        })
        .catch((err) => {
            console.log(err);
        })
})


router.get('/:id', (req, res) => {
    Student.findById(req.params.id)
        .then((student) => {
            res.json(student);
        })
        .catch((err) => {
            console.log(err);
        })
})


router.put('/update/:id',async (req,res)=>{
    const student = req.body;
    
    Student.findByIdAndUpdate(req.params.id,student)
    .then(()=>{
        res.json("Student update successfully");
    })
    .catch((err)=>{
        res.json(err);
    })

})

router.delete('/delete/:id',(req,res)=>{
    Student.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.json("User Deleted Successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = router;