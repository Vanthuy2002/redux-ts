import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { Post } from 'src/types/blog.type';
import { initPostList } from 'src/utils/contant';

interface blogState {
  postList: Post[];
  editPost: Post | null;
}

const initialState: blogState = {
  postList: initPostList,
  editPost: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, actions: PayloadAction<Post>) => {
      state.postList.push(actions.payload);
    },
    deletePost: (state, actions: PayloadAction<string>) => {
      const postId = actions.payload;
      const foundIndex = state.postList.findIndex((post) => post.id === postId);
      if (foundIndex !== -1) {
        state.postList.splice(foundIndex, 1);
      }
    },
    startEditBlog: (state, actions: PayloadAction<string>) => {
      const postId = actions.payload;
      const postWantEdit =
        state.postList.find((post) => post.id === postId) || null;
      state.editPost = postWantEdit;
    },
    cancelEditPost: (state) => {
      state.editPost = null;
    },
    updatePost: (state, actions: PayloadAction<Post>) => {
      const postId = actions.payload?.id;
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = actions.payload;
          return true;
        }
        return false;
      });
      state.editPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.includes('cancel'),
        (state) => {
          console.log(current(state.postList));
        }
      )
      .addDefaultCase((state, actions) => {
        console.log(`action : ${actions.type}`, state.postList);
      });
  },
});

export const {
  addPost,
  cancelEditPost,
  deletePost,
  startEditBlog,
  updatePost,
} = blogSlice.actions;

export default blogSlice.reducer;
