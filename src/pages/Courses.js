import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoursePage from './CoursePage';
import CourseSidebar from './CourseSidebar';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className="container mx-auto my-20">
          <div className="grid md:grid-cols-3">
    
            <div>
                <CourseSidebar></CourseSidebar>
            </div>

            <div className="col-span-2">
                <div className="grid md:grid-cols-2 md:gap-4">
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