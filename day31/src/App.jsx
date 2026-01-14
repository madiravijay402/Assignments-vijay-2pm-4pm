
import './App.css'
import Usercard from './Usercard';
import Button from './Button';
import Card from './Card';
import Footer from './day32/Footer';
function App() {
  const name="I am Vijay Madira";
  const handleclick=()=>{
    alert("neu vachesaaa")
  }
  return (
    <>
      <button onClick={handleclick}>clcik</button>
      <h1>Hello,{name}</h1>
      <h1>React</h1>
      <p>react is a library for creating an webpage used for buliding ui,especialy single page applications fast update using virtual DOM  component based, like sperate jsx files and combined itinto single jsx file of app </p>
      <h2>MADIRA VIJAY</h2>
      <Usercard name="LeoDass" courses={["fullstack","devops","dataanalyst"]} nokku={handleclick} />
      <Button brs={handleclick}/>
      <Card>
        <h1>hello every one i'm vijay</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
      </Card>
      <h1>day32 assignment</h1>
      <Footer year={2003}/>
    </>
  )
}

export default App
