import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseSidebar = () => {
    const [categories , setCategories] = useState([])

    useEffect(() =>{
        fetch('https://it-learner-server-ifazzzz.vercel.app/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
           {
            categories.map(c => <div
            className="w-2/3 bg-slate-50 p-4 rounded:md shadow-md my-4 text-center"
            key={c.id}
            >
                <Link to={`/courses/${c.id}`}>{c.title}</Link>
            </div>)
           } 
        </div>
    );
};

export default CourseSidebar;