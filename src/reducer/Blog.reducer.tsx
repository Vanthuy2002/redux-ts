import { createReducer, createAction } from '@reduxjs/toolkit';
import { Post } from 'src/types/blog.type';
import { initPostList } from 'src/utils/contant';

interface blogState {
  postList: Post[];
  editPost: Post | null;
}

const initial: blogState = {
  postList: initPostList,
  editPost: null,
};

// create post
const addPost = createAction<Post>('blog/addPost');
// delete post
const deletePost = createAction<string>('blog/deletePost');
// start edit post
const startEditBlog = createAction<string>('blog/editPost');

const blogReducer = createReducer(initial, (builder) => {
  builder
    .addCase(addPost, (state, actions) => {
      state.postList.push(actions.payload);
    })
    .addCase(deletePost, (state, actions) => {
      const postId = actions.payload;
      const foundIndex = state.postList.findIndex((post) => post.id === postId);
      if (foundIndex !== -1) {
        state.postList.splice(foundIndex, 1);
      }
    })
    .addCase(startEditBlog, (state, actions) => {
      const postId = actions.payload;
      const postWantEdit =
        state.postList.find((post) => post.id === postId) || null;
      state.editPost = postWantEdit;
    });
});

export { addPost, deletePost, startEditBlog };

export default blogReducer;
