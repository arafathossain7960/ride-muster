import React from 'react';
import './Blogs.css';

const Blogs = () => {
   
    return (
        <div className='blog'>
            <div className="blog-1">
                <h4>How does React.js work ?</h4>
                <p>React.js is JavaScript library. which is use for create user interface. It lets you compose complex UIs from small and isolated pieces of code called “components”. React create a virtual DOM and see the what happen with previous and current tree, then took the change and call render function. {
                    
                } </p>
            </div>
            <div className="blog-2">
                <h4>Different between Props and state.</h4>
                <p> Props contain static value, props always immutable.
                    <br />
                    wheres state contain dynamic value.
                </p>
            </div>
            <div className="blog-3">
                <h4>When we use useEffect hook ?</h4>
                <p>Basically, useEffect handle all side effect on React application, here some uses.
                    <ul>
                        <li>
                            when fetch data from out side
                        </li>
                        <li>
                            when need update DOM directly
                        </li>
                        <li>
                            when Effect depended function second argument.
                                
                            
                        </li>
                    </ul>
                </p>
            </div>
            
        </div>
    );
};

export default Blogs;