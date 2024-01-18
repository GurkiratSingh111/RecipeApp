function Button({children}){
    return <button 
    className="bg-yellow-950 h-10 
    w-20 border-solid border-4 
    border-yellow-950 rounded-3xl m-3
     hover:bg-yellow-800
      hover:border-yellow-800"
      >{children}</button>
}

export default Button;