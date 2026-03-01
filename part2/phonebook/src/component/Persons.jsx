


const Persons = ({persons, deletePerson})=> {
return (

          <div style={{display:"block", }}>
                {
                    persons.map(person =>{

                        return (<div key={person.id} style={{display:"flex",justifyContent:"space-between"}}> 
                            <div>{person.name } : {person.number}</div>
                            <button onClick={() => deletePerson(person.id)}>delete</button>
                        </div>)
                    })
                }
          </div>

)}

export default Persons

