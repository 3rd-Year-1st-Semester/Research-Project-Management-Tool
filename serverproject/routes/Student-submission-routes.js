'use strict';
const StudentSubmission = require('../models/StudentSubmissions');
const express = require('express');
const {upload} = require('../helpers/filehelper');
const {StudentSubmissionUpload, multipleFileUpload,
     getallStudentSubmissions, getallMultipleFiles} = require('../controllers/studentFileuploaderController');
const router = express.Router();


router.post('/StudentSubmission', upload.single('file'), StudentSubmissionUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getStudentSubmissions', getallStudentSubmissions);
router.get('/getMultipleFiles', getallMultipleFiles);

router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await StudentSubmission.findByIdAndDelete(accId)
    .then(()=>{
        res.status(200).send({status:" File deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})

module.exports = {
    routes: router
}