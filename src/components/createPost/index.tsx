import Button from '../Button';
import Label from '../Label';
import Input from '../input';

const CreatePost = () => {
  return (
    <form>
      <div className='mb-6'>
        <Label name='title'>Title</Label>
        <Input name='title' placeholder='Enter your title ...' />
      </div>

      <div className='mb-6'>
        <Label name='image'>Image Slug</Label>
        <Input name='image' placeholder='Enter your image slug ...' />
      </div>

      <div className='mb-6'>
        <Label name='description'>Description</Label>
        <textarea
          id='description'
          rows={3}
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
          placeholder='Your description...'
        ></textarea>
      </div>

      <div className='mb-6'>
        <Label name='date'>PushLish Date</Label>
        <input
          type='datetime-local'
          id='date'
          className='block w-56 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
          placeholder='Title'
        />
      </div>
      <div className='flex items-center mb-6 gap-3'>
        <input
          id='publish'
          type='checkbox'
          className='w-4 h-4 mb-2 focus:ring-2 focus:ring-blue-500'
        />
        <Label name='publish'>Publish</Label>
      </div>

      <div className='flex items-center gap-3'>
        <Button>Publish</Button>
        <Button>Update</Button>
        <Button>Cancel</Button>
      </div>
    </form>
  );
};

export default CreatePost;
