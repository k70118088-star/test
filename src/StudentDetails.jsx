import React from "react";
import { useParams, Link } from "react-router-dom";

const students = [
  {
    id: 1,
    name: "Krish",
    age: 20,
    course: "BCA",
    email: "krish@example.com",
    phone: "9876543210",
    address: "Panipat, Haryana",
    about:"Krish is a dedicated BCA student with strong interest in web development and modern JavaScript frameworks. He enjoys building React applications and learning new technologies.",
  },
  {
    id: 2,
    name: "Rahul",
    age: 22,
    course: "BTech",
    email: "rahul@example.com",
    phone: "9123456780",
    address: "Delhi, India",
    about:"Rahul is a passionate engineering student focused on software development and problem solving. He actively participates in coding competitions and hackathons.",
  },
  {
    id: 3,
    name: "Priya",
    age: 21,
    course: "BBA",
    email: "priya@example.com",
    phone: "9988776655",
    address: "Chandigarh, India",
    about:"Priya is a motivated BBA student with strong communication and leadership skills. She is interested in business management and entrepreneurship.",
  },
];

const StudentDetails = () => {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-red-500">
          Student Not Found
        </h2>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">

        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
            {student.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-3xl font-bold">{student.name}</h2>
            <p className="text-gray-600">{student.course} Student</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <p><span className="font-semibold">Student ID:</span> STU{student.id}00{student.id}</p>
          <p><span className="font-semibold">Age:</span> {student.age}</p>
          <p><span className="font-semibold">Email:</span> {student.email}</p>
          <p><span className="font-semibold">Phone:</span> {student.phone}</p>
          <p className="md:col-span-2">
            <span className="font-semibold">Address:</span> {student.address}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-gray-600 leading-relaxed">
            {student.about}
          </p>
        </div>
        </div>
      </div>
    
  );
};

export default StudentDetails;
