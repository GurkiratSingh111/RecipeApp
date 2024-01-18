function Input({textarea}){
    if(textarea){
        return  <div className='w-full text-white'>
        <textarea type="text"  className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-8 pt-2 resize-y bg-yellow-950'/>
      </div>
        
    }
    return <div className='w-full h-10 text-white'>
        <input type="text" className='w-full rounded-3xl h-full color-blue pl-5 bg-yellow-950'/>
      </div>
   
   
}

export default Input;