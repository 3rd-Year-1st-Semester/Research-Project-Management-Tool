const router = require('express').Router();
const GroupAssign = require('../models/GroupAssign');

router.route('/insert').post((req, res) => {

    const assign = req.body;

    GroupAssign.findOne(
        {
            group_name: assign.group_name
        })
        .then((data) => {
            if (data) {
                return res.json("Already group has a panel member.");
            }
            else {
                GroupAssign.create(assign)
                    .then(() => {
                        res.json("Panel Member assign to the group successfully");
                    })
                    .catch((err) => {
                        console.log(err);
                    })

            }
        })
        .catch((err) => {
            console.log(err);
        }
        )
})

router.route('/').get((req, res) => {

    GroupAssign.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        })

})

module.exports = router;