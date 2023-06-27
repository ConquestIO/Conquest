import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='absolute top-16 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll'>Main display</main>
    </>
  );
};

export default Home;
