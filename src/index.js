import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

let comment = [
    "      This HTML file is a template. If you open it directly in the browser, you will see an empty page.",
    "You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the <body> tag.",
    "manifest.json provides metadata used when your web app is installed on a user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/"
]





const App = () => {

    return ( 
         <div className="ui container comments">
             <CommentDetail 
                author="Sam"
                timeAgo="Today at 15:32" 
                comment={comment[0]} 
                img={faker.image.image()}
                />

             <CommentDetail 
                author="Alex" 
                timeAgo="Today at 17:35" 
                comment={comment[1]}
                img={faker.image.image()}
                />
             
             <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 11:22" 
                comment={comment[2]}
                img={faker.image.image()}
                />
         </div>         
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));