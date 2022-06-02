const router = require('express').Router();
const PanleMember = require('../models/PanelMember');

router.route('/insert').post((req, res) => {

    const pm = req.body;

    PanleMember.findOne(
        {
            user_id: pm.user_id
        })
        .then((data) => {
            if (data) {
                return res.json("This Staff Member already in the list.");
            }
            else {
                PanleMember.create(pm)
                    .then(() => {
                        res.json("Panel Member Inserted");
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

    PanleMember.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        })

})


router.route('/delete/:id').delete((req, res) => {

    PanleMember.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json("Panel Member deleted");
        })
        .catch((err) => {
            console.log(err);
        })

})


router.route('/update/:id').put((req, res) => {

    const updateObj = req.body;

    PanleMember.findByIdAndUpdate(req.params.id, updateObj)
        .then(() => {
            res.json("Panel member updated");
        })
        .catch((err) => {
            console.log(err);
        })

})

module.exports = router;