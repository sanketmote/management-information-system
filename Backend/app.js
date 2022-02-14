const Express = require('./ServiceHost').Express;
var expressApp = require('./ServiceHost').expressApp;


expressApp.get('/', (req, res) => {
    res.statuscode(200).send("Hello World");

})

// Import Routes  
var  RegisterRoute = require('./Routes/AddClassRoom');

expressApp.use('/api/classrooms',RegisterRoute);

expressApp.listen(8000,function(){
    console.log("server has started on port 8000");
})
