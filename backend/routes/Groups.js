const router = require('express').Router();
const Group = require('../models/Group');

router.route('/insert').post(async (req, res) => {

    const group = req.body;

    Group.findOne(
        {
            $or: [
                { student_1: group.student_1[0] },
                { student_2: group.student_2[0] },
                { student_3: group.student_3[0] },
                { student_4: group.student_4[0] }
            ]
        })
        .then((data) => {
            if (data) {
                return res.json("Some students already in the groups.");
            }
            else {
                Group.create(group)
                    .then(() => {
                        res.json("Student List Inserted");
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        })
        .catch((err) => {
            console.log(err);
        })

});

router.route('/').get((req, res) => {

    Group.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err.message);
        })

})

router.route('/:id').get((req, res) => {

    Group.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err.message);
        })

})

router.route("/delete/:id").delete((req, res) => {

    Group.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.json(data.group_name + " Group Deleted");
        })

})

router.route("/update/:id").put((req, res) => {

    const group = req.body;

    Group.findByIdAndUpdate(req.params.id, group)
        .then((data) => {
            res.json(data.group_name + " Updated");
        })
        .catch((err) => {
            console.log(err);
        })

})

module.exports = router;