function getProjects() {
    //get input from server
    var apiUrl = "../api/Projects";
    $.getJSON(apiUrl).done(function (JSuser) {
        var table = document.getElementById("myProjects");
        //add rows to projects table
        JSuser.forEach(function (project) {
            $("#myProjects").append("<tr>" + project.PName + "</tr>");
        });
    });
    this.RegBtn = function () {
        //move to add project page
        location.replace("../View/AddProjectS.html");
    }
}