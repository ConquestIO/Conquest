import Navbar from './Navbar';
import Intro from './Intro';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='absolute top-16 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll'>Main display
      <Intro />
      
      </main>
    </>
  );
};

export default Home;
