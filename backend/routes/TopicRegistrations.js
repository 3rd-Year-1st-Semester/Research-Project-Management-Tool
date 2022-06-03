const router= require("express").Router();
let TopicRegistration =require("../models/TopicRegistration");

router.route("/register").post((req,res)=>{
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
    
  
   
    const newtopicRegistration = new TopicRegistration({
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
    newtopicRegistration.save().then(()=>{
        res.json("Successfully Registered the Topic")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    TopicRegistration.find().then((TopicRegistration)=>{
        res.json(TopicRegistration)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/update/:id").put(async(req,res)=>{
    let topicId = req.params.id;
    const{studentId,fullName,groupName,faculty,academicYear,semester,subjectName,researchName,contact_number,email }=req.body;

    const updateTopic ={

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
    }

    const update = await TopicRegistration.findByIdAndUpdate(topicId,updateTopic)
    .then(()=>{
        res.status(200).send({status:"Topic Updates " })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
     
    })
})

 

router.route("/delete/:id").delete(async(req, res)=>{
    let topicId=req.params.id;

    await TopicRegistration.findByIdAndDelete(topicId)
    .then(()=>{
        res.status(200).send({status:" Deleted Registered Topic"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/:id').get((req, res) => {

    let id = req.params.id;

    TopicRegistration.findById(id)
        .then((data) => {
            res.json(data);
            //console.error(data);
        })
        .catch((err) => {
            res.json(err);
        })

})
module.exports=router;