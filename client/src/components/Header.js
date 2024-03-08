function Header ({children, mainHeading}){

    if (mainHeading){
        return (<div className='h-10 w-4/5 flex items-center my-1 justify-center text-black' >
        <div className='h-6 text-3xl my-8 pb-2'>{children}</div>
      </div>)
    }




    return (<div className=' w-full flex items-center my-1 justify-center text-black' >
    <div className='h-6 pb-1 pt-1'>{children}</div>
  </div>
    )
}
export default Header;

