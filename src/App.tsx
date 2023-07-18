import PostList from './components/PostList';
import CreatePost from './components/createPost';

function App() {
  return (
    <main className='main p-5'>
      <CreatePost />
      <PostList />
    </main>
  );
}

export default App;
