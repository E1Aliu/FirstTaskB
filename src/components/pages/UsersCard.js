import React from 'react'

const UsersCard = (props) => {
    return (
        <div className='user-card'>
            <p className='date'>{props.date}</p>
            <div className='inline'>
                <span style={{background: `${props.color}`}}>
                    {props.text}
                </span>
                <div className='img' style={{content: `url(${props.img})`}}></div>
                <p className='name'>{props.name}</p>
            </div>

            <p className='description'>{props.description}</p>

            <div className='button'>
                <button type='button'>Download</button>
            </div>
        </div>
    )
}

export default UsersCard
