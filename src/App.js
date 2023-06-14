import React from 'react';
import ChatBot from 'react-simple-chatbot'
import { Segment } from 'semantic-ui-react';

function App() {
  const steps = [
   {
    id:'Greet', 
    message:'Hello, welcome to our website',
    trigger:'Ask Name'
   }, 
   {
    id:'Ask Name',
    message:'Please enter your name',
    trigger:'validate'
   },
   {
    id: "validate",
    user:true, // validator: (value) => value.length > 0 ? false : 'Name is required', 
    trigger: 'Name'
   }, 
   {
    id:"Name",
    message:'Hi {previousValue}, Please select your issue',
    trigger: 'issues'
   },
   {
    id: 'issues',
    options: [
      {value: 'React', label:'React', trigger:"React"},
      {value: 'Angular', label:'Angular', trigger:"Angular"}
    ],
   }, 
   {
    id: 'React',
    message:'Thanks for telling us about your React issue',
    end:true,
   }, 
   {
    id: 'Angular',
    message:'Thanks for telling us about your Angular issue',
    end:true,
   }
  ]

  return (
   <Segment floated='right' >
    <ChatBot steps={steps}/>
   </Segment>
  );
}

export default App;
