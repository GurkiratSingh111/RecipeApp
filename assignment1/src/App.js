import './App.css';

function App() {
  return (
    <div className="h-full w-full text-white">
      <div className='py-4 text-white px-10 text-2xl bg-blue-950'>Recipe App</div>
      <div className='flex flex-col items-center min-h-screen min-w-screen bg-blue-200 px-10'>
        <div className='my-8 flex flex-col items-center border-solid border-4 border-blue-950 rounded-3xl w-4/5 h-full ml-10 mr-10'>
          <div className='bg-blue-950 border-solid border-4 border-blue-950 rounded-3xl w-4/5 flex items-center my-3 justify-center' >
            <div className='h-6'>Add New Recipe </div>
          </div>
          <div className='flex flex-col w-4/5 items-center'>
          <div className='bg-blue-950 border-solid border-4 border-blue-950 rounded-3xl w-full flex items-center my-3 justify-center' >
            <div className='h-6'>Recipe Name </div>
          </div>
          <div className='w-full h-10 text-blue-950'>
            <input type="text" id="name" className='w-full rounded-3xl h-full color-blue pl-5'/>
          </div>
          <div className='bg-blue-950 border-solid border-4 border-blue-950 rounded-3xl w-full flex items-center my-3 justify-center' >
            <div className='h-6'>Ingredients </div>
          </div>
          <div className='w-full text-blue-950'>
            <textarea type="text" id="name" className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-5 resize-y'/>
          </div>
          <div className='bg-blue-950 border-solid border-4 border-blue-950 rounded-3xl w-full flex items-center my-3 justify-center' >
            <div className='h-6'>Ingredients </div>
          </div>
          <div className='w-full text-blue-950'>
            <textarea type="text" id="name" className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-5 resize-y'/>
          </div>
          </div>
        </div>
      </div>
      </div>
 
  );
}

export default App;
