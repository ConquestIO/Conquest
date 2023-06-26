import AuthContainer from "./Auth/AuthContainer";

const Navbar = () => {
  return (
    <div className='header fixed right-0 z-50 mx-auto flex h-16 w-full flex-row justify-between border-b bg-blue sm:px-[max((100vw-1500px)/2,0px)]'>
      <div id='header-right' className='flex items-center'>
        <div className=''>
          <AuthContainer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
