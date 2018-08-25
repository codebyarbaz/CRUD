app.factory('myfactory', ($http, $q) => {
    console.log("myfactory is loaded");
    var object = {
        createStudent(stuObject) {
            console.log("stuObject is received in factory from controller ", stuObject);
            $http.post('/create', stuObject).then(data => {
                console.log("stuObject successfully posted ", data);
            }, (err) => {
                console.log("Error in posting stuObject ", err);
            });
        },
        readAllStudents() {
            var defer = $q.defer();
            $http.get('http://localhost:1234/readall').then(data => {
                defer.resolve(data);
            }, (err) => {
                defer.reject(err);
            });
            return defer.promise;
        },
        readStudentsbyID() {
            var defer = $q.defer();
            $http.get('http://localhost:1234/readall').then(data => {
                defer.resolve(data);
            }, (err) => {
                defer.reject(err);
            });
            return defer.promise;
        },
        updateStudentbyID(stuObject) {
            $http.post('/update', stuObject).then(data => {
                console.log("stuObject is posted ", stuObject);
            }, (err) => {
                console.log("Error in posting stuObject ", err);;
            });
        },
        deleteStudent(del) {
            $http.post('/delete', del).then(data => {
                console.log("delKey is posted");
            }, (err) => {
                console.log("Error in posting delKey");
            });
        },
        deleteAllStudents() {
            $http.get('/deleteall').then(data => {
                console.log("Data is ", data);
            }, (err) => {
                console.log("Error found ", err);
            });
        }
    };
    return object;
});