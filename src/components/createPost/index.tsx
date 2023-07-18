import { Post } from 'src/types/blog.type';
import Button from '../Button';
import Label from '../Label';
import Input from '../input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from 'src/reducer/Blog.reducer';

const initalValues: Post = {
  id: ' ',
  desc: '',
  imgUrl: '',
  title: '',
  publish: false,
};

const CreatePost = () => {
  const [formVal, setFormVal] = useState<Post>(initalValues);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormVal((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataWithId = { ...formVal, id: new Date().toISOString() };
    dispatch(addPost(formDataWithId));
    setFormVal(initalValues);
  };

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

      <div className='flex items-center mb-6 gap-3'>
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
        <Button>Publish</Button>
      </div>
    </form>
  );
};

export default CreatePost;
