


const Persons = ({persons})=> {
return (

          <ul>
            {
                persons.map(person => <li key={person.name}>name : {person.name} , number : {person.number}</li>)
            }
          </ul>

)}

export default Persons

