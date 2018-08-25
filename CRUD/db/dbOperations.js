const students = require('./schema/stuSchema');

const dbOperations = {
    createStudent(stuObject, res) {
        students.create(stuObject, (err, result) => {
            if (err) {
                console.log("Error in creating stuObject in DB ", err);
            } else {
                // res.send("stuObject is created in DB");
                console.log("stuObject is created in DB ", result);
                res.send("Student Added");
            }
        });
    },
    readStudentsbyID(stuID, res) {
        console.log("stuID is received in dbOperations " + stuID);
        students.findOne({
            id: stuID
        }, (err, doc) => {
            if (err) {
                console.log("Error in find student");
            } else {
                res.json(doc);
            }
        });
    },
    readAllStudents(res) {
        students.find((err, docs) => {
            if (err) {
                console.log("Error in getting all students");
            } else {
                if (docs && docs.length > 0) {
                    var students = [];
                    docs.forEach(stu => {
                        students.push(stu);
                    });
                    // res.send(students);
                    res.json(students);
                } else {
                    console.log("Nothing found in docs");
                }
            }
        });
    },
    updateStudentbyID(stuObject, res) {
        var upObject = {
            name: stuObject.name,
            roll: stuObject.roll,
            branch: stuObject.branch,
            shift: stuObject.shift
        };
        console.log("ID to be updated ", stuObject.id);
        students.findByIdAndUpdate(stuObject.id, upObject, () => {
            res.send("Student Details Updated");
            console.log("Student Details Updated");
        });
    },
    deleteStudent(key, res) {
        students.findByIdAndRemove(key, () => {
            console.log("Student Deleted");
            res.send("Student Removed");
        });
    },
    deleteAllStudents(res) {
        students.drop();
        res.send("All Students Details Removed");
    }
};


module.exports = dbOperations;