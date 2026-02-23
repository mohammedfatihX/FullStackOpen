


const Form = ({newPerson,onChangeNamePerson,newPhone,onChangePhonePerson,addingperson}) => {

    return (

      <form type="Submit" >
        <div >
            <p style={{display:"inline" , margin:"20px 10px"}}>name : </p>
            <input type="text" onChange={onChangeNamePerson} value={newPerson}/>
        </div>
        <div>
            <p style={{display:"inline" , margin:"20px 10px"}}>number : </p>
            <input type="tel" onChange={onChangePhonePerson} value={newPhone}/>
        </div>
        <div>
            <button type="Submit" onClick={addingperson}>add</button>
        </div>
      </form>

    )

}

export default Form
