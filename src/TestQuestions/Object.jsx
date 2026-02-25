import React from 'react'

const Object = () => {

    const student = {
      name: "John Doe",
      age: 20,
      course: "Computer Science",
      isEnrolled: "Yes"
    };

    console.log("Student's name:", student.name);

    student.grade = "A";

    return (
      <div>
        <h2>Student Object Example</h2>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        <p>Enrolled: {student.isEnrolled }</p>
        <p>Grade: {student.grade}</p>
      </div>
    );
}

export default Object