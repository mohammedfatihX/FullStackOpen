


const Filter = ({search,onChangeSearch}) =>{

return (

        <div>
            <p style={{display:"inline" , margin:"20px 10px"}}>filter : </p>
            <input type="text" onChange={onChangeSearch} value={search}/>
      </div>
)

}

export default Filter
