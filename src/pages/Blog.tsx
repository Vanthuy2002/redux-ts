import React from 'react';
import PostList from 'src/components/PostList';
import CreatePost from 'src/components/createPost';

const Blog: React.FC = () => {
  return (
    <>
      <CreatePost />
      <PostList />
    </>
  );
};

export default Blog;
