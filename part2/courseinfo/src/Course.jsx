import Content from './Content'
import Header from './Header'
import Total from './Total'


const Course = ({course}) =>{
    const {name,parts} = course
    const total = parts.reduce((current,next) => current+next.exercises,0)
    return (
        <div>

            <Header course={name} />
            <Content parts={parts} /> 
            <Total total={total} /> 

        </div>
        )

}  


export default Course;
