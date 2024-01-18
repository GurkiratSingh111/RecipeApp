import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="h-full w-full text-white">
      <div className='py-4 text-white px-10 text-2xl bg-yellow-950'>Recipe App</div>
      <div className='flex flex-col items-center min-h-screen min-w-screen px-10 opacity-90' style={{backgroundImage: `url('bgImage.jpg')`,backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <div className='my-8 pb-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 '>
          <Header mainHeading={true}>Add New Recipe</Header>
          <div className='flex flex-col w-4/5 items-center'>
          <Header>Recipe Name</Header>
          <div className='w-full h-10 text-white'>
            <input type="text" className='w-full rounded-3xl h-full color-blue pl-5 bg-yellow-950'/>
          </div>
          <Header>Ingredients</Header>
          <div className='w-full text-white'>
            <textarea type="text"  className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-8 pt-2 resize-y bg-yellow-950'/>
          </div>
          <Header>Directions</Header>
          <div className='w-full text-white'>
            <textarea type="text"  className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-8 pt-2 resize-y bg-yellow-950'/>
          </div>
          </div>
        </div>
      </div>
      </div>
 
  );
}

export default App;
