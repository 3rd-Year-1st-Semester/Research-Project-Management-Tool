'use strict';
const SingleFile = require('../models/singlefile');
const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, multipleFileUpload,
     getallSingleFiles, getallMultipleFiles} = require('../controllers/fileuploaderController');
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);

router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await SingleFile.findByIdAndDelete(accId)
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