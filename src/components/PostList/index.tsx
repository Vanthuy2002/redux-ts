import { useEffect } from 'react';
import Header from '../Layout/Header';
import PostItem from '../PostItem';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'src/store';
import { getPostList } from 'src/reducer/Blog.slice';

const PostList = () => {
  const posts = useSelector((state: RootState) => state?.blog?.postList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(getPostList());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <div className='py-6 bg-white sm:py-8 lg:py-12'>
      <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
        <Header />

        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:gap-8'>
          {posts.length > 0 &&
            posts.map((post) => <PostItem posts={post} key={post.id} />)}
        </div>
      </div>
    </div>
  );
};

export default PostList;
