
import './Skills.css'
import { skillsData } from '../Data/skillsData'; // skillsdata
import { skillsImage } from '../Utils/Skillsimage' ;// skills image

function Skills() {

    return (
        <div id='skills' className="skills">
            <div className="skillsHeader">
                <h2>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <div className="flex justify-center"> 
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                            {skillsData.map((skill, id) => (
                                <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" key={id} >
                                    <div className="card-body items-center text-center">
                                        <img src={skillsImage(skill)} alt="alt" />
                                        <p>{skill}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills