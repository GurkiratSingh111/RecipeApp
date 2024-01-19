function Button({children}){
  
    function onClickHandler(){
        console.log("Button clicked")

    }
    return <button onClick={onClickHandler}
    className="bg-yellow-950 h-10 
    w-20 border-solid border-4 
    border-yellow-950 rounded-3xl m-3
     hover:bg-yellow-800
      hover:border-yellow-800"
      >{children}</button>
}

export default Button;