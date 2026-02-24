function ShowCourses()
{
    
    fetch("http://localhost:8080/courses")
    .then((response) => response.json())
    .then((courses) =>
    {
        const datatable = document.getElementById("CourseList")
        let row = " "
        courses.forEach(course => 
            {
            row += `<tr> 
            <td>${course.courseId}</td>
            <td>${course.courseName}</td>
            <td>${course.trainer}</td>
            <td>${course.durationInWeeks}</td>
            
            </tr>`
        });
        datatable.innerHTML += row 


    })
}

function Enrolledstudents()
{
fetch("http://localhost:8080/courses/enrolled")
.then((Response) => Response.json())
.then((students) =>
{
const stulist = document.getElementById("EnrolledList");
var row1 = ""
students.forEach(student =>
{
      row1 += `<tr>
     <td>${student.id}</td>
     <td>${student.name}</td>
     <td>${student.email}</td>
     <td>${student.coursename}</td>
     </tr>`
})

stulist.innerHTML= row1

})
    


}

