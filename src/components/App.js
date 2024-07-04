import React,{useState} from 'react';
import Header from './Header';
import Form from './Form';
import Preview from './Preview';

const App = () => {
  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Website, setWebsite] = useState("");

  const values = {
    Name, Designation, Phone, Email, Website
  };

  const handleChange = (e) => {
    const setField = {
      setName,
      setDesignation,
      setPhone,
      setEmail,
      setWebsite
    };
    //function invoked with value
    setField["set" + e.target.name](e.target.value);
  }

  return (
    <div className='App'>
    <Header Dark={true}>Professional Card maker</Header>
    <main>
      <Form Values={values} onChange={handleChange} />
      <Preview Values={values}/>
    </main>
    </div>
  )
}

export default App