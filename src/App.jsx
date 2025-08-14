import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log('Sign up data:', data);
  // };

  // const handleProfileUpdateSubmit = (data) => {
  //   console.log('Profile updated', data);
  // };

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>


      {/* Uncomment if you want to see these forms */}
      {/* <SimpleForm /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}

      {/* <ReuseableForm 
        formTitle="Sign Up"
        handleSubmit={handleSignUpSubmit} 
      >
        <div>
          <h2>Sign up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm 
        formTitle="Profile update"
        submitBtnText="Update"
        handleSubmit={handleProfileUpdateSubmit} 
      >
        <div>
          <h2>Profile update</h2>
          <p>Please update your profile</p>
        </div>
      </ReuseableForm> */}
    </>
  );
}

export default App;
