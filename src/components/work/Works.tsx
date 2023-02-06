import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data'
import WorkItems from './WorkItems'

const Works = () => {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects]: [any, any]  = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === 'all') {
            setProjects(projectsData);
        } else{
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);
    
    const handleClick = (e: any, index: number) => {
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index);
    }

  return (
    <div>
        <div className="work__filters">
            { projectsNav.map((item, index) => {
                return (
                    <span onClick={(e) => { handleClick(e, index); }} className={`${active === index ? 'active-work' : ""} work__item`} key={index}>{item.name}</span>
                )
            }) }
        </div>

        <div className="work__container container grid">
            {projects.map((item: any) => {
                return <WorkItems item={item} key={item.id} />
            })}
        </div>
    </div>
  )
}

export default Works