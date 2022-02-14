const Express = require('./ServiceHost').Express;
var expressApp = require('./ServiceHost').expressApp;

const cors = require('cors');

expressApp.get('/', (req, res) => {
    res.status(200).send("Hello World");

})

// Import Routes  
var  AddClassRoom = require('./Routes/AddClassRoom');
var  AddSection = require('./Routes/AddSection');
var  AddStudents = require('./Routes/AddStudents');
var  AddTakes = require('./Routes/AddTakes');
var  AddTeaches = require('./Routes/AddTeaches');
var  AddTimeSlot = require('./Routes/AddTimeSlot');

expressApp.use(cors({origin:'*'}));

expressApp.use('/api/classrooms',AddClassRoom);
expressApp.use('/api/classrooms',AddSection);
expressApp.use('/api/classrooms',AddStudents);
expressApp.use('/api/classrooms',AddTakes);
expressApp.use('/api/classrooms',AddTeaches);
expressApp.use('/api/classrooms',AddTimeSlot);

expressApp.listen(8000,function(){
    console.log("server has started on port 8000");
})
