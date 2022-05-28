const router = require("express").Router();
const Marking = require("../models/Marking");

//insert
router.route("/add").post((req, res) => {

    let subject_name = req.body.subject_name;
    let assignment_name = req.body.assignment_name;
    let criteria = req.body.criteria;
    let poor_marks = req.body.poor_marks;
    let average_marks = req.body.average_marks;
    let good_marks = req.body.good_marks;
    let excellent_marks = req.body.excellent_marks;
    let total_marks = req.body.total_marks;


    let criteria1 = req.body.criteria1;
    let poor_marks1 = req.body.poor_marks1;
    let average_marks1 = req.body.average_marks1;
    let good_marks1 = req.body.good_marks1;
    let excellent_marks1 = req.body.excellent_marks1;
    let total_marks1 = req.body.total_marks1;

    let criteria2 = req.body.criteria2;
    let poor_marks2 = req.body.poor_marks2;
    let average_marks2 = req.body.average_marks2;
    let good_marks2 = req.body.good_marks2;
    let excellent_marks2 = req.body.excellent_marks2;
    let total_marks2 = req.body.total_marks2;

    let criteria3 = req.body.criteria3;
    let poor_marks3 = req.body.poor_marks3;
    let average_marks3 = req.body.average_marks3;
    let good_marks3 = req.body.good_marks3;
    let excellent_marks3 = req.body.excellent_marks3;
    let total_marks3 = req.body.total_marks3;

    let criteria4 = req.body.criteria4;
    let poor_marks4 = req.body.poor_marks4;
    let average_marks4 = req.body.average_marks4;
    let good_marks4 = req.body.good_marks4;
    let excellent_marks4 = req.body.excellent_marks4;
    let total_marks4 = req.body.total_marks4;

    let criteria5 = req.body.criteria5;
    let poor_marks5 = req.body.poor_marks5;
    let average_marks5 = req.body.average_marks5;
    let good_marks5 = req.body.good_marks5;
    let excellent_marks5 = req.body.excellent_marks5;
    let total_marks5 = req.body.total_marks5;


    let criteria6 = req.body.criteria6;
    let poor_marks6 = req.body.poor_marks6;
    let average_marks6 = req.body.average_marks6;
    let good_marks6 = req.body.good_marks6;
    let excellent_marks6 = req.body.excellent_marks6;
    let total_marks6 = req.body.total_marks6;

    let criteria7 = req.body.criteria7;
    let poor_marks7 = req.body.poor_marks7;
    let average_marks7 = req.body.average_marks7;
    let good_marks7 = req.body.good_marks7;
    let excellent_marks7 = req.body.excellent_marks7;
    let total_marks7 = req.body.total_marks7;

    let criteria8 = req.body.criteria8;

    const markingobj = new Marking({

        subject_name, assignment_name, criteria, poor_marks, average_marks, good_marks, excellent_marks, total_marks
        , criteria1, poor_marks1, average_marks1, good_marks1, excellent_marks1, total_marks1
        , criteria2, poor_marks2, average_marks2, good_marks2, excellent_marks2, total_marks2
        , criteria3, poor_marks3, average_marks3, good_marks3, excellent_marks3, total_marks3
        , criteria4, poor_marks4, average_marks4, good_marks4, excellent_marks4, total_marks4
        , criteria5, poor_marks5, average_marks5, good_marks5, excellent_marks5, total_marks5
        , criteria6, poor_marks6, average_marks6, good_marks6, excellent_marks6, total_marks6
        , criteria7, poor_marks7, average_marks7, good_marks7, excellent_marks7, total_marks7
        , criteria8

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
    let poor_marks = req.body.poor_marks;
    let average_marks = req.body.average_marks;
    let good_marks = req.body.good_marks;
    let excellent_marks = req.body.excellent_marks;
    let total_marks = req.body.total_marks;


    let criteria1 = req.body.criteria1;
    let poor_marks1 = req.body.poor_marks1;
    let average_marks1 = req.body.average_marks1;
    let good_marks1 = req.body.good_marks1;
    let excellent_marks1 = req.body.excellent_marks1;
    let total_marks1 = req.body.total_marks1;

    let criteria2 = req.body.criteria2;
    let poor_marks2 = req.body.poor_marks2;
    let average_marks2 = req.body.average_marks2;
    let good_marks2 = req.body.good_marks2;
    let excellent_marks2 = req.body.excellent_marks2;
    let total_marks2 = req.body.total_marks2;

    let criteria3 = req.body.criteria3;
    let poor_marks3 = req.body.poor_marks3;
    let average_marks3 = req.body.average_marks3;
    let good_marks3 = req.body.good_marks3;
    let excellent_marks3 = req.body.excellent_marks3;
    let total_marks3 = req.body.total_marks3;

    let criteria4 = req.body.criteria4;
    let poor_marks4 = req.body.poor_marks4;
    let average_marks4 = req.body.average_marks4;
    let good_marks4 = req.body.good_marks4;
    let excellent_marks4 = req.body.excellent_marks4;
    let total_marks4 = req.body.total_marks4;

    let criteria5 = req.body.criteria5;
    let poor_marks5 = req.body.poor_marks5;
    let average_marks5 = req.body.average_marks5;
    let good_marks5 = req.body.good_marks5;
    let excellent_marks5 = req.body.excellent_marks5;
    let total_marks5 = req.body.total_marks5;


    let criteria6 = req.body.criteria6;
    let poor_marks6 = req.body.poor_marks6;
    let average_marks6 = req.body.average_marks6;
    let good_marks6 = req.body.good_marks6;
    let excellent_marks6 = req.body.excellent_marks6;
    let total_marks6 = req.body.total_marks6;

    let criteria7 = req.body.criteria7;
    let poor_marks7 = req.body.poor_marks7;
    let average_marks7 = req.body.average_marks7;
    let good_marks7 = req.body.good_marks7;
    let excellent_marks7 = req.body.excellent_marks7;
    let total_marks7 = req.body.total_marks7;

    let criteria8 = req.body.criteria8;



    const markingobj = ({


        subject_name, assignment_name, criteria, poor_marks, average_marks, good_marks, excellent_marks, total_marks
        , criteria1, poor_marks1, average_marks1, good_marks1, excellent_marks1, total_marks1
        , criteria2, poor_marks2, average_marks2, good_marks2, excellent_marks2, total_marks2
        , criteria3, poor_marks3, average_marks3, good_marks3, excellent_marks3, total_marks3
        , criteria4, poor_marks4, average_marks4, good_marks4, excellent_marks4, total_marks4
        , criteria5, poor_marks5, average_marks5, good_marks5, excellent_marks5, total_marks5
        , criteria6, poor_marks6, average_marks6, good_marks6, excellent_marks6, total_marks6
        , criteria7, poor_marks7, average_marks7, good_marks7, excellent_marks7, total_marks7
        , criteria8

    })

    Marking.findByIdAndUpdate(mid, markingobj).then((data) => {

        res.json("Update Successfully");
    }).catch((err) => {

        console.log(err);
    });


});

module.exports = router;