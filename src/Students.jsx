import React from "react";
import { Link } from "react-router-dom";

const students = [
  { id: 1, name: "Krish", age: 20, course: "BCA" },
  { id: 2, name: "Rahul", age: 22, course: "BTech" },
  { id: 3, name: "Priya", age: 21, course: "BBA" },
];

const Students = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Student List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                {student.name.charAt(0)}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-center">
              {student.name}
            </h3>

            <p className="text-gray-600 text-center mt-2">
              Age: {student.age}
            </p>

            <p className="text-gray-600 text-center">
              Course: {student.course}
            </p>

            <div className="text-center mt-4">
              <Link
                to={`/student/${student.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;

