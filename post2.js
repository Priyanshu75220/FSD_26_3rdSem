const express = require('express');

const app = express();

app.use(express.json());
let students=[
    {   
        id:1,
        name:"Rahul",
        branch:"CSE"
    
    },
    {   
        id:2,
        name:"Aman",
        branch:"IT"
    
    },
    {   
        id:3,
        name:"Prakhar kumar Sahu",
        branch:"CSE"
    
    }
];
app.get('/',(req,res)=>{
    res.send("Student API is running");
});
app.get('/students',(req,res)=>{
    res.json(students);
});
app.post('/students',(req,res)=>{
    const newStudent = req.body;
    students.push(newStudent);
    res.json({
        message:"Students added sucessfully",
        student:newStudent
    });
});
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(studentIndex, 1);

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});
app.listen(3005,()=>{
    console.log("server running at http:/localhost:3005");
})