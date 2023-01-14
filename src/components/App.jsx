import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useAxiosFetch from '../hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import EditPost from './EditPost';

const App = () => {
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const API_URL = 'http://localhost:3500/posts';
  const { data, fetchError, isLoading } = useAxiosFetch(API_URL);

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home isLoading={isLoading} fetchError={fetchError} />}
        />
        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="edit/:id" element={<EditPost />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
