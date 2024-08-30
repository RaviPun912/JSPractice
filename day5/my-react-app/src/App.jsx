import "./App.css" 
import { MyButton } from "./Components/MyButton"
function App(){
  return (
    <div>
      <h1> Hey hello</h1>
      <MyButton title="Submit data" height="100px"></MyButton>
      <MyButton title="Next" height="50px"></MyButton>
    </div>
  )
}
export default App