

import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'


function App() {
  
  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm></ReuseableForm>
      
     
    </>
  )
}

export default App
