const ActionBtn = () => {
  return (
    <div className='inline-flex rounded-md shadow-sm' role='group'>
      <button
        type='button'
        className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
      >
        Edit
      </button>
      <button
        type='button'
        className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
      >
        Delete
      </button>
    </div>
  );
};

export default ActionBtn;
