import { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";
import { Link, Route, useSearchParams, useNavigate } from "react-router-dom";

// import { getAllPosts } from '../../../service/api';
import { API } from "../../../service/api";

//components
import Post from "./Post";

const Posts = () => {
  const navigate = useNavigate();

  const [posts, getPosts] = useState([]);
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  function handleClick(routeTo) {
    navigate(routeTo);
  }

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({ category: category || "" });
      debugger;
      if (response.isSuccess) {
        getPosts(response.data);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      {posts?.length ? (
        posts.map((post) => (
          <Grid item lg={3} sm={4} xs={12}>
            <div
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => handleClick(`details/${post._id}`)}
            >
              <Post post={post} />
            </div>
          </Grid>
        ))
      ) : (
        <Box style={{ color: "878787", margin: "30px 80px", fontSize: 18 }}>
          No data is available for selected category
        </Box>
      )}
    </>
  );
};

export default Posts;
