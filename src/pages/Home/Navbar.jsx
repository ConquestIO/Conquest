import AuthContainer from './Auth/AuthContainer';

const Navbar = () => {
  return (
    <div className='header fixed right-0 z-50 mx-auto flex h-16 w-full flex-row justify-between border-b bg-blue sm:px-[max((100vw-1500px)/2,0px)]'>
      <div className='mx-3 flex flex-row items-center justify-between gap-4 text-sm'>NavBar.jsx</div>
      <div id='header-right' className='flex items-center'>
          <AuthContainer />
      </div>
    </div>
  );
};

export default Navbar;
