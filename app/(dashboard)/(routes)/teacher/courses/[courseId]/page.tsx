import React from "react";

const CourseIdPage = ({ params }: { params: { courseId: String } }) => {
  return <div>{params.courseId}</div>;
};

export default CourseIdPage;
