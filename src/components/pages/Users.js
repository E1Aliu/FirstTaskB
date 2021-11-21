import React from 'react'

import madel from "../../assets/Blog/madel.png"
import UsersCard from './UsersCard'
import './styles/users.scss'
const Data = [
    {
        date:'3.3.0 (20/05/2015)',
        text:'New',
        color:'#00FF00',
        img:madel,
        name:'Kevin Joe',
        description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization'
    },
    {
        date:'3.1.0 (20/05/2015)',
        text:'Fix',
        color:'blue',
        img:madel,
        name:'Kevin Joe',
        description:'Introducing Host Cloud Drive - virtual drive functionality New Share options and managment New, more user friendly design Sync optimizations Various performance improvements and bug fixes'
    },
    {
        date:'3.1.0 (20/05/2015)',
        text:'Improvement',
        color:'#CF9FFF',
        img:madel,
        name:'Kevin Joe',
        description:'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes'
    },
    {
        date:'3.3.0 (14/05/2018)',
        text:'New',
        color:'#00FF00',
        img:madel,
        name:'Kevin Joe',
        description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization'
    },
    {
        date:'3.1.0 (20/05/2015)',
        text:'Fix',
        color:'blue',
        img:madel,
        name:'Kevin Joe',
        description:'Introducing Host Cloud Drive - virtual drive functionality New Share options and managment New, more user friendly design Sync optimizations Various performance improvements and bug fixes'
    },
    {
        date:'3.1.0 (20/05/2015)',
        text:'Improvement',
        color:'#CF9FFF',
        img:madel,
        name:'Kevin Joe',
        description:'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes'
    },
    {
        date:'3.3.0 (14/05/2018)',
        text:'New',
        color:'#00FF00',
        img:madel,
        name:'Kevin Joe',
        description:'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization'
    },
    {
        date:'3.1.0 (20/05/2015)',
        text:'Fix',
        color:'blue',
        img:madel,
        name:'Kevin Joe',
        description:'Introducing Host Cloud Drive - virtual drive functionality New Share options and managment New, more user friendly design Sync optimizations Various performance improvements and bug fixes'
    },
    {
        date:'3.1.0 (20/05/2015)',
        text:'Improvement',
        color:'#CF9FFF',
        img:madel,
        name:'Kevin Joe',
        description:'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes'
    },
]

const Users = () => {
    return (
        <div className='users'>
            <h1>Users Information</h1>
            <div className='user-cards'>
                {Data.map((props) => {
                    return(
                        <UsersCard 
                            date={props.date}
                            text={props.text}
                            color={props.color}
                            img={props.img}
                            name={props.name}
                            description={props.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Users
