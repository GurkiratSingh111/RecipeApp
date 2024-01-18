import './App.css';
import Header from './components/Header';
import Input from './components/Input';

function App() {
  return (
    <div className="h-full w-full text-white">
      <div className='py-4 text-white px-10 text-2xl bg-yellow-950'>Recipe App</div>
      <div className='flex flex-col items-center min-h-screen min-w-screen px-10 opacity-90' style={{backgroundImage: `url('bgImage.jpg')`,backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <div className='my-8 pb-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 '>
          <Header mainHeading={true}>Add New Recipe</Header>
          <div className='flex flex-col w-4/5 items-center'>
          <Header>Recipe Name</Header>
          <Input/>
          <Header>Ingredients</Header>
          <Input textarea={true}/>
          <Header>Directions</Header>
          <Input textarea={true}/>
          </div>
        </div>
      </div>
      </div>
 
  );
}

export default App;
