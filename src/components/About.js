import {ABOUT} from '../assets/common';
function About(){
    return (
        <div className="w-96 md:w-2/3 max-w-screen-md mx-auto my-6 md:p-6 rounded-lg shadow-lg p-4 bg-gray-50">
            <h3 className="pb-2 border-b border-gray-300 text-gray-600 text-xl font-semibold md:text-2xl tracking-widest">关于我</h3>
            <div className="mt-4 space-y-2">
                {ABOUT.map((ele,idx)=>(
                    <p className="text-gray-500 hover:text-gray-600" key={idx}>{ele}</p>
                ))}
            </div>
        </div>
    )
}

export default About;