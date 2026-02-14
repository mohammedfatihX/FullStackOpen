import Part from './Part'


const Content = (props) =>{
    return (<>
                { 
                    props.parts.map(p => 
                        <Part name={p.name} exercise={p.exercises} />
                    )

                }
            </>)
    }    



export default Content
