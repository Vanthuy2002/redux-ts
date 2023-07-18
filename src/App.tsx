function App() {
  return (
    <main className='main'>
      <div className='p-5'>
        <form>
          <div className='mb-6'>
            <label
              htmlFor='title'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
              placeholder='Title'
              value=''
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='featuredImage'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Featured Image
            </label>
            <input
              type='text'
              id='featuredImage'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
              placeholder='Url image'
              value=''
            />
          </div>
          <div className='mb-6'>
            <div>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Description
              </label>
              <textarea
                id='description'
                rows={3}
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
                placeholder='Your description...'
              ></textarea>
            </div>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='publishDate'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Publish Date
            </label>
            <input
              type='datetime-local'
              id='publishDate'
              className='block w-56 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
              placeholder='Title'
              value=''
            />
          </div>
          <div className='flex items-center mb-6'>
            <input
              id='publish'
              type='checkbox'
              className='w-4 h-4 focus:ring-2 focus:ring-blue-500'
            />
            <label
              htmlFor='publish'
              className='ml-2 text-sm font-medium text-gray-900'
            >
              Publish
            </label>
          </div>
          <div>
            <button
              className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
              type='submit'
            >
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                Publish Post
              </span>
            </button>
            <button
              type='submit'
              className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800'
            >
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                Update Post
              </span>
            </button>
            <button
              type='reset'
              className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
            >
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                Cancel
              </span>
            </button>
          </div>
        </form>
        <div>
          <div className='py-6 bg-white sm:py-8 lg:py-12'>
            <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
              <div className='mb-10 md:mb-16'>
                <h2 className='mb-4 text-2xl font-bold text-center text-gray-800 md:mb-6 lg:text-3xl'>
                  Được Dev Blog
                </h2>
                <p className='max-w-screen-md mx-auto text-center text-gray-500 md:text-lg'>
                  Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi
                  tệ. Nhưng ngày mốt sẽ có nắng
                </p>
              </div>
              <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
                <div className='flex flex-col items-center overflow-hidden border rounded-lg md:flex-row'>
                  <div className='relative self-start block w-full h-48 overflow-hidden bg-gray-100 group shrink-0 md:h-full md:w-32 lg:w-48'>
                    <img
                      src='https://images.unsplash.com/photo-1665412019489-1928d5afa5cc?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=765&amp;q=80'
                      loading='lazy'
                      alt='Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.'
                      className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
                    />
                  </div>
                  <div className='flex flex-col gap-2 p-4 lg:p-6'>
                    <span className='text-sm text-gray-400'>
                      2022-10-13T11:32
                    </span>
                    <h2 className='text-xl font-bold text-gray-800'>
                      Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say
                      mê.
                    </h2>
                    <p className='text-gray-500'>
                      Nghịch cảnh là một phần của cuộc sống. Nó không thể bị
                      kiểm soát. Cái có thể kiểm soát chính là cách chúng ta
                      phản ứng trước nghịch cảnh.
                    </p>
                    <div>
                      <div
                        className='inline-flex rounded-md shadow-sm'
                        role='group'
                      >
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
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-center overflow-hidden border rounded-lg md:flex-row'>
                  <div className='relative self-start block w-full h-48 overflow-hidden bg-gray-100 group shrink-0 md:h-full md:w-32 lg:w-48'>
                    <img
                      src='https://images.unsplash.com/photo-1656333422687-6830f720c38f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=764&amp;q=80'
                      loading='lazy'
                      alt='Muốn thành công thì khao khát thành công phải lớn hơn nỗi sợ bị thất bại.'
                      className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
                    />
                  </div>
                  <div className='flex flex-col gap-2 p-4 lg:p-6'>
                    <span className='text-sm text-gray-400'>
                      2022-10-14T11:33
                    </span>
                    <h2 className='text-xl font-bold text-gray-800'>
                      Muốn thành công thì khao khát thành công phải lớn hơn nỗi
                      sợ bị thất bại.
                    </h2>
                    <p className='text-gray-500'>
                      Bạn chớ nên bỏ cuộc khi bạn vẫn còn điều gì đó để cho đi.
                      Không có gì là hoàn toàn bế tắc, sự việc chỉ thật sự trở
                      nên bế tắc khi bạn thôi không cố gắng nữa.
                    </p>
                    <div>
                      <div
                        className='inline-flex rounded-md shadow-sm'
                        role='group'
                      >
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
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-center overflow-hidden border rounded-lg md:flex-row'>
                  <div className='relative self-start block w-full h-48 overflow-hidden bg-gray-100 group shrink-0 md:h-full md:w-32 lg:w-48'>
                    <img
                      src='https://images.unsplash.com/photo-1656105544318-1cca8c4d9878?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80'
                      loading='lazy'
                      alt='Mất niềm tin vào bản thân, cũng như bạn đánh mất thành công đang đợi mình'
                      className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
                    />
                  </div>
                  <div className='flex flex-col gap-2 p-4 lg:p-6'>
                    <span className='text-sm text-gray-400'>
                      2022-10-15T11:33
                    </span>
                    <h2 className='text-xl font-bold text-gray-800'>
                      Mất niềm tin vào bản thân, cũng như bạn đánh mất thành
                      công đang đợi mình
                    </h2>
                    <p className='text-gray-500'>
                      Ai cũng nói tương lai chúng ta luôn rộng mở, nhưng nếu
                      không nắm bắt được hiện tại thì tương lai sẽ chẳng có gì.
                    </p>
                    <div>
                      <div
                        className='inline-flex rounded-md shadow-sm'
                        role='group'
                      >
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
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-center overflow-hidden border rounded-lg md:flex-row'>
                  <div className='relative self-start block w-full h-48 overflow-hidden bg-gray-100 group shrink-0 md:h-full md:w-32 lg:w-48'>
                    <img
                      src='https://images.unsplash.com/photo-1648184217069-34f0a57791bc?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80'
                      loading='lazy'
                      alt='Nơi nào có ý chí, nơi đó có con đường.'
                      className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
                    />
                  </div>
                  <div className='flex flex-col gap-2 p-4 lg:p-6'>
                    <span className='text-sm text-gray-400'>
                      2022-10-16T11:35
                    </span>
                    <h2 className='text-xl font-bold text-gray-800'>
                      Nơi nào có ý chí, nơi đó có con đường.
                    </h2>
                    <p className='text-gray-500'>
                      Tôi có thể chấp nhận thất bại, mọi người đều thất bại ở
                      một việc gì đó. Nhưng tôi không chấp nhận việc không cố
                      gắng.
                    </p>
                    <div>
                      <div
                        className='inline-flex rounded-md shadow-sm'
                        role='group'
                      >
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
