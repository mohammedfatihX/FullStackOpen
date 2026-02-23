import './App.css'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Filter from './component/Filter'
import Form from './component/Form'
import Persons from './component/Persons'

function App() {

    const [persons, setPersons] = useState([])
    const [newPerson,setNewPerson] = useState('')
    const [newPhone,setNewPhone] = useState('')
    const [search,setSearch] = useState('')
    
    const personsToShow = search === '' ? persons: persons.filter(person => person.name.toLowerCase().startsWith(search.toLowerCase()))

    useEffect(() => {
    axios.get('http://localhost:3001/persons')
        .then(result=>result.data )
        .then(persons => {
            setPersons(persons)
        })
        .catch((error) => {alert(`we have error ${error}`)})


    },[])
    const addingperson = (event) => {

        event.preventDefault()
        if (newPerson === "" || newPhone===""){
            alert("name or number field is empty! try to fill the name or number field?")
           return 
        }      
        if (persons.some(person => person.name.toLowerCase() === newPerson.toLowerCase()) ){
            alert(`${newPerson} is already added to phonebook`)
            return 
        }
        let newperson = {name:newPerson,number:newPhone,id:persons.length+1}
        setNewPerson("")
        setNewPhone('')
        let updatedList = persons.concat(newperson)
        setPersons(updatedList)
    }
    const onChangeNamePerson = (event) => {
        setNewPerson(event.target.value)
    } 
    const onChangePhonePerson = (event)=>{

        setNewPhone(event.target.value)
    } 
    const onChangeSearch= (event)=> {
        setSearch(event.target.value)  
    } 

  return (
    <div>
      <Filter search={search} onChangeSearch={onChangeSearch} />
      <hr style={{border: "2px solid black" }} />
        <h1>PhoneBook</h1>
        <br />    
        <Form newPerson={newPerson} onChangeNamePerson={onChangeNamePerson} 
              newPhone={newPhone} onChangePhonePerson={onChangePhonePerson} 
              addingperson={addingperson} />

        <Persons persons={personsToShow} />
    </div>
  )
}

export default App
