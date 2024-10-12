import { useRouter } from "next/router";
const Course = () => {
  const router = useRouter();
  const { courseId, studentId } = router.query;
  console.log("CourseId: ", courseId, " |", "StudentId :", studentId);
  return <h1>one of the student's course</h1>;
};

export default Course;
