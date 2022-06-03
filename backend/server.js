const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 7000;

//Space for routes import
let student = require('./routes/students');
let user = require('./routes/users');
let marking = require('./routes/Markings');
let group = require('./routes/Groups');
let panelmember = require('./routes/panelmembers');
let groupassign = require('./routes/groupassigns');
//ashan
let TopicRegistration = require('./routes/TopicRegistrations');
let TopicApprove = require('./routes/TopicApproves');
let TopicRejected = require('./routes/TopicRejecteds');

//Space for route configuration
app.use('/student', student);
app.use('/user', user);
app.use("/group", group);
app.use("/Markings", marking);
app.use('/panelmember', panelmember);
app.use('/groupassign', groupassign);
//ashan
app.use('/TopicRegistration',TopicRegistration);
app.use('/TopicApprove',TopicApprove);
app.use('/TopicRejected',TopicRejected);

mongoose.connect("mongodb+srv://admin:admin@research-project-manage.l8uyu.mongodb.net/research_project_manage?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB Successfully Connected");
    })
    .catch((err) => {
        console.error(err);
    })


app.get(("/"), (req, res, next) => {
    res.send("<center><h1>📚 Research Project Upload System API</h1><h3>Developed by SE Project Group</h3></center>")
    next();
})

app.listen(PORT, () => {
    console.log(`📚 App is running on PORT ${PORT}`);
});