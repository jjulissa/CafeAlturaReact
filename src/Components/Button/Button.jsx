

export default function Button({ TextButton, bgColor, textColor}) {

    return ( 
        <div> 
            <button  className={`py-3 font-fontFam px-6 shadow-boxSha justify-center items-center rounded  border-none  ${bgColor}  ${textColor}`}>{TextButton}</button>
        </div>
    )
} 

