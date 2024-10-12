import { useRouter } from "next/router";
const Course = () => {
  const router = useRouter();
  const { courseId, studentId } = router.query;
  return (
    <h1>
      details of courses #{courseId} for student #{studentId}
    </h1>
  );
};

export default Course;
