import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import UseTitle from '../hooks/UseTitle';
import CoursePage from './CoursePage';
import CourseSidebar from './CourseSidebar';

const Courses = () => {
    UseTitle('Courses');
    const courses = useLoaderData()
    return (
        // course container
        <div className="container mx-auto my-20">
            <div className="grid md:grid-cols-3">       
                <div>
                    <CourseSidebar></CourseSidebar>
                </div>
                <div className="col-span-2">
                    <div className="grid md:grid-cols-2 md:gap-6">
                    {
                        courses.map(course => <CoursePage
                            key={course.id}
                            course={course}
                            ></CoursePage>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;