import React from 'react'

const Card = ({ name, title, description ,btntext="Action" }) => {
    // console.log(props.name);      //ese bhi use kar sakte he but ojject destructuring se jyada clean code banta he
    // console.log(props.title);
    // console.log(props.description);
    
    return (
        <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden m-4">
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <h4 className="text-sm text-gray-600 mb-2">{title}</h4>
                <p className="text-gray-700 text-sm">{description}</p>
            </div>
            <div className="px-6 py-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded">
                    {btntext}
                </button>
            </div>
        </div>
    )
}

export default Card