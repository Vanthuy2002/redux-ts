import {
  AsyncThunk,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from 'src/types/blog.type';
import { https } from 'src/utils/https';
import { toast } from 'react-toastify';

interface blogState {
  postList: Post[];
  editPost: Post | null;
  loading: boolean;
  currentRequetsId: undefined | string;
}

const initialState: blogState = {
  postList: [],
  editPost: null,
  loading: false,
  currentRequetsId: undefined,
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

const getPostList = createAsyncThunk(
  'blog/getPostList',
  async (_, thunkApi) => {
    const res = await https.get<Post[]>('/blog', { signal: thunkApi.signal });
    return res.data;
  }
);

const createPost = createAsyncThunk(
  'blog/createPost',
  async (body: Post, thunkApi) => {
    const res = await https.post<Post>('/blog', body, {
      signal: thunkApi.signal,
    });
    return res.data;
  }
);

const updatePostWithApi = createAsyncThunk(
  'blog/updatePost',
  async (body: Post, thunkApi) => {
    try {
      const res = await https.put<Post>(`/blog/${body.id}`, body, {
        signal: thunkApi.signal,
      });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.warn(`${error.message}, try again late!`);
      }
    }
  }
);

const deletePostWithApi = createAsyncThunk(
  'blog/deletePost',
  async (id: string, thunkApi) => {
    const res = await https.delete<string>(`/blog/${id}`, {
      signal: thunkApi.signal,
    });
    return res.data;
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    startEditBlog: (state, actions: PayloadAction<string>) => {
      const postId = actions.payload;
      const postWantEdit =
        state.postList.find((post) => post.id === postId) || null;
      state.editPost = postWantEdit;
    },
    cancelEditPost: (state) => {
      state.editPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostList.fulfilled, (state, actions) => {
        state.postList = actions.payload;
      })
      .addCase(createPost.fulfilled, (state, actions) => {
        state.postList.push(actions.payload);
      })
      .addCase(updatePostWithApi.fulfilled, (state, actions) => {
        state.postList.find((post, index) => {
          if (post.id === actions?.payload?.id) {
            state.postList[index] = actions.payload;
            return true;
          }
          return false;
        });
        state.editPost = null;
      })
      .addCase(deletePostWithApi.fulfilled, (state, actions) => {
        const deleteIndex = state.postList.findIndex(
          (post) => post.id === actions.meta.arg
        );
        state.postList.splice(deleteIndex, 1);
      })
      .addMatcher<PendingAction>(
        (actions) => actions.type.endsWith('/pending'),
        (state, actions) => {
          state.loading = true;
          state.currentRequetsId = actions.meta.requestId;
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (actions) =>
          actions.type.endsWith('/rejected') ||
          actions.type.endsWith('/fulfilled'),
        (state, actions) => {
          if (
            state.loading &&
            state.currentRequetsId === actions.meta.requestId
          ) {
            state.loading = false;
            state.currentRequetsId = undefined;
          }
        }
      );
  },
});

export const { cancelEditPost, startEditBlog } = blogSlice.actions;

export { getPostList, createPost, updatePostWithApi, deletePostWithApi };

export default blogSlice.reducer;
