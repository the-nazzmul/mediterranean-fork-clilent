import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { FaRegFilePdf } from "react-icons/fa";

const ref = React.createRef();

const Blog = () => {
    return (
        <div className="Blog">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <div className="lg:flex justify-center items-center text-center">
                    <h2 className="font-bold text-5xl mr-8">Question and Answers</h2>
                    <button className="btn bg-red-600 my-8" onClick={toPdf}>Download as PDF<FaRegFilePdf className="ml-2"></FaRegFilePdf></button>
                </div>}
            </Pdf>
            <div ref={ref}>
                <div ref={ref} className="py-16 px-16 lg:px-32  ">
                    <div className="mb-12">
                        <h2 className="font-bold text-2xl mb-8">Q-1. Differences between uncontrolled and controlled components?</h2>
                        <p><span className="underline font-bold">Answer:</span> In react controlled components refer to components that have their state and behavior controlled by their parent components. Uncontrolled components refer to the components that manage their own state internally.</p>
                    </div>
                    <div className="my-12">
                        <h2 className="font-bold text-2xl mb-8">Q-2. Differences between nodejs. and express.js?</h2>
                        <p><span className="underline font-bold">Answer:</span> Node js. is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Express.js is simply the minimal and flexible yet powerful framework for Node.js.</p>
                    </div>
                    <div className="my-12">
                        <h2 className="font-bold text-2xl mb-8">Q-3. What is a custom hook, and why will you create a custom hook?</h2>
                        <p><span className="underline font-bold">Answer:</span> A custom hook is a reusable function that can be used to add special and unique functionality to the React application. The name of the hook starts with "use" and it can be used to call other hooks as well. It can be reused easily, which makes the code cleaner and reduces time to write the code.</p>
                    </div>
                    <div className="my-12">
                        <h2 className="font-bold text-2xl mb-8">Q-4. How to validate React props using PropTypes?</h2>
                        <p><span className="underline font-bold">Answer:</span> PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. It is good first line defense when it comes to debugging the app. To use it one has to install it as dependencies first using the command "npm i prop-types --save" and import it to the app. It is often used when the component ends and starts with the component name. You can learn more about it <a href="https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/#:~:text=import%20PropTypes%20from%20'prop%2Dtypes,%2F%3E%20)%20%7D%3B%20Count." target="_blank" className="underline text-red-600">here.</a></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Blog />, rootElement);

export default Blog;


