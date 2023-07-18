import { Post } from 'src/types/blog.type';
import Button from '../Button';
import Label from '../Label';
import Input from '../input';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'src/store';
import {
  cancelEditPost,
  createPost,
  updatePostWithApi,
} from 'src/reducer/Blog.slice';

const initalValues: Post = {
  id: '',
  desc: '',
  imgUrl: '',
  title: '',
  publish: false,
};

const CreatePost = () => {
  const [formVal, setFormVal] = useState<Post>(initalValues);
  const dispatch = useAppDispatch();
  const editPost = useSelector((state: RootState) => state?.blog.editPost);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormVal((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editPost) {
      dispatch(updatePostWithApi(formVal));
    } else {
      dispatch(createPost(formVal));
      setFormVal(initalValues);
    }
  };
  // cancel update
  const handleCancelActions = () => {
    dispatch(cancelEditPost());
  };

  // nếu có edit post => đổ data ra form , không thì lấy value khởi tạo
  useEffect(() => {
    setFormVal(editPost || initalValues);
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [editPost]);

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-6'>
        <Label name='title'>Title</Label>
        <Input
          name='title'
          placeholder='Enter your title ...'
          value={formVal.title}
          onChange={handleChange}
        />
      </div>

      <div className='mb-6'>
        <Label name='imgUrl'>Image Slug</Label>
        <Input
          name='imgUrl'
          placeholder='Enter your image slug ...'
          value={formVal.imgUrl}
          onChange={handleChange}
        />
      </div>

      <div className='mb-6'>
        <Label name='desc'>Description</Label>
        <textarea
          id='desc'
          rows={3}
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
          placeholder='Your description...'
          value={formVal.desc}
          onChange={(e) => setFormVal({ ...formVal, desc: e.target.value })}
        ></textarea>
      </div>

      <div className='flex items-center gap-3 mb-6'>
        <input
          id='publish'
          type='checkbox'
          name='pushlish'
          className='w-4 h-4 mb-2 focus:ring-2 focus:ring-blue-500'
          checked={formVal.publish}
          onChange={(e) =>
            setFormVal({ ...formVal, publish: e.target.checked })
          }
        />
        <Label name='publish'>Publish</Label>
      </div>

      <div className='flex items-center gap-3'>
        {editPost ? (
          <>
            <Button type='submit'>Update</Button>
            <Button onClick={handleCancelActions}>Cancel</Button>
          </>
        ) : (
          <Button type='submit'>Publish</Button>
        )}
      </div>
    </form>
  );
};

export default CreatePost;
