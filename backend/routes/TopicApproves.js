const router= require("express").Router();
let TopicApprove =require("../models/TopicApprove");

router.route("/send").post((req,res)=>{
    const studentId= req.body.studentId;
    const fullName= req.body.fullName;
    const groupName= req.body.groupName;
    const faculty = req.body.faculty;
    const academicYear= req.body.academicYear;
    const semester = req.body.semester;
    const subjectName=req.body.subjectName;
    const researchName=req.body.researchName;
    const contact_number=Number(req.body.contact_number);
    const email=req.body.email;
    
  
   
    const newtopicApprove = new TopicApprove({
        studentId,
        fullName,
        groupName,
        faculty,
        academicYear,
        semester,
        subjectName,
        researchName,
        contact_number,
        email       
    })
    newtopicApprove.save().then(()=>{
        res.json("Successfully Approved the Topic")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    TopicApprove.find().then((TopicApprove)=>{
        res.json(TopicApprove)
    }).catch((err)=>{
        console.log(err)
    })
})
 
router.route("/delete/:id").delete(async(req, res)=>{
    let topicId=req.params.id;

    await TopicApprove.findByIdAndDelete(topicId)
    .then(()=>{
        res.status(200).send({status:" Deleted Registered Topic"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})

router.route('/:id').get((req, res) => {

    let id = req.params.id;

    TopicApprove.findById(id)
        .then((data) => {
            res.json(data);
            //console.error(data);
        })
        .catch((err) => {
            res.json(err);
        })

})
module.exports=router;