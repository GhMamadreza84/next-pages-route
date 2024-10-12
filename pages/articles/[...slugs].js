import { useRouter } from "next/router";
const Article = () => {
  const router = useRouter();
  const slugs = router.query.slugs || [];
  console.log(slugs);
  return (
    <h1>
      this article written by {slugs[0]} at {slugs[1]}/{slugs[2]}/{slugs[3]}.
      and the name of article is {slugs[5]}
    </h1>
  );
};

export default Article;
