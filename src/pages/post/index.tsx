import { postApi } from "../../shared/api";
import Container from "../../widgets/container";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import ListPostCard from "../../entities/post/ui/ListPostCard";

function Post() {
  const params = useLoaderData();
  const countSkip = 20;

  useEffect(() => {
    if (params) {
      console.log(params);
    }
  }, [params]);

  const { data } = postApi.useGetPostsQuery({});
  return (
    data && (
      <Container>
        <ListPostCard data={data} countSkip={countSkip} />
      </Container>
    )
  );
}

export default Post;
