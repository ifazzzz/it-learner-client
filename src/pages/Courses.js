import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoursePage from './CoursePage';
import CourseSidebar from './CourseSidebar';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className="grid grid-cols-2">
            <div>
                <CourseSidebar></CourseSidebar>
            </div>
            <div>
            {
                courses.map(course => <CoursePage
                key={course.id}
                course={course}
                ></CoursePage>)
            }
            </div>
            
        </div>
    );
};

export default Courses;