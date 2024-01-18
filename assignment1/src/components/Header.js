function Header ({children, mainHeading}){

    if (mainHeading){
        return (<div className='bg-yellow-950 border-solid border-4 h-10 border-yellow-950 rounded-3xl w-4/5 flex items-center my-2 justify-center' >
        <div className='h-6 text-xl'>Add New Recipe </div>
      </div>)
    }



    return (<div className='bg-yellow-950 border-solid border-4 border-yellow-950 rounded-3xl w-full flex items-center my-3 justify-center' >
    <div className='h-6'>{children}</div>
  </div>

    )
}
export default Header;

