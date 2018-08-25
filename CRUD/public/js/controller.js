app.controller('myctrl', ($scope, myfactory) => {
    console.log("Controller is loaded");

    // Create Operation
    $scope.stu = {};
    $scope.createStudent = () => {
        console.log("stu is created ", $scope.stu);
        myfactory.createStudent($scope.stu);
        console.log("stu is sent to myfactory");
    };

    // Read Operation
    $scope.readAllStudents = () => {
        var promise = myfactory.readAllStudents();
        promise.then((data) => {
            $scope.data = data;
            $scope.info = "All Students Fetched";
        }, (err) => {
            $scope.err = err;
        });
    };
    $scope.readStudentsbyID = () => {
        var stuID = $scope.stuid;
        console.log("stuID is " + stuID);
        var promise = myfactory.readStudentsbyID();
        promise.then((data) => {
            $scope.student = data;
            $scope.student = $scope.student.data[(stuID - 1)];
            $scope.info = "Student ID No. " + stuID + " Fetched";
        }, (err) => {
            $scope.err = err;
        });
    };

    // Update Operation
    $scope.up = {};
    $scope.updateStudentbyID = () => {
        myfactory.updateStudentbyID($scope.up);
    };

    // Delete Operation
    $scope.del = {};
    $scope.deleteStudent = () => {
        myfactory.deleteStudent($scope.del);
    };
    $scope.deleteAllStudents = () => {
        myfactory.deleteAllStudents();
    };
});