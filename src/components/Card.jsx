import React from 'react'
import '../styles/Card.css'
import { Link } from 'react-router-dom'
import { IoFootball } from 'react-icons/io5'
import { FaSwimmer } from 'react-icons/fa'
import { GiRollerSkate } from 'react-icons/gi'

const courses = [
    {
        title: 'Fútbol',
        url: 'futbol',
        icon: <IoFootball />,
    },
    {
        title: 'Natación',
        icon: <FaSwimmer />,
    },
    {
        title: 'Patín Artistico',
        icon: <GiRollerSkate />,
    },
]

const duplicatedCourses = [...courses, ...courses]

const Card = () => {
    return (
        <div className="card--container">
            {duplicatedCourses.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                        {item.duration && <p>{item.duration}</p>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
