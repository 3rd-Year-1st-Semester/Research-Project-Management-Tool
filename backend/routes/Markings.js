const router = require("express").Router();
const Marking = require("../models/Marking");

//insert
router.route("/add").post((req, res) => {

    let subject_name = req.body.subject_name;
    let assignment_name = req.body.assignment_name;
    let criteria = req.body.criteria;
    let Poor_marks = req.body.Poor_marks;
    let average_marks = req.body.average_marks;
    let good_marks = req.body.good_marks;
    let excellent_marks = req.body.excellent_marks;
    let total_marks = req.body.total_marks;

    const markingobj = new Marking({

        subject_name, assignment_name, criteria, Poor_marks, average_marks, good_marks, excellent_marks, total_marks

    });

    markingobj.save().then(() => {

        res.json("Insert Successfully");

    }).catch((err) => {
        console.log(err);
    });

});

//view
router.route("/").get((req, res) => {

    Marking.find().
        then((marking) => {

            res.json(marking);

        }).catch((err) => {

            console.log(err);
        });

});

//view by id
router.route("/:id").get((req, res) => {

    let id = req.params.id;

    Marking.findById(id).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })

});

//delete
router.route("/delete/:id").delete((req, res) => {

    let mid = req.params.id;

    Marking.findByIdAndDelete(mid).then(() => {

        res.json("Delete Successfully");
    }).catch((err) => {

        console.log(err);
    });
});

//update
router.route("/update/:id").put((req, res) => {

    const mid = req.params.id;

    let subject_name = req.body.subject_name;
    let assignment_name = req.body.assignment_name;
    let criteria = req.body.criteria;
    let Poor_marks = req.body.Poor_marks;
    let average_marks = req.body.average_marks;
    let good_marks = req.body.good_marks;
    let excellent_marks = req.body.excellent_marks;
    let total_marks = req.body.total_marks;

    const markingobj = ({

        subject_name, assignment_name, criteria, Poor_marks, average_marks, good_marks, excellent_marks, total_marks

    })

    Marking.findByIdAndUpdate(mid, markingobj).then((data) => {

        res.json("Update Successfully");
    }).catch((err) => {

        console.log(err);
    });


});

module.exports = router;