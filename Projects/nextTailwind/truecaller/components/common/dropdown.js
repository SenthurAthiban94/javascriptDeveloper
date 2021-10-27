import { useState, useEffect, useRef } from "react";

const DropDown = ({options,initialOption = false,onChange})=>{
    if(!options.length) return null;
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(initialOption || options[0]);
    const selectBoxRef = useRef(null);
    const handleChange = (optionSelected)=>{
        setSelectedOption(optionSelected);
        onChange(optionSelected);
        toggleDropDown();
    }
    const toggleDropDown = ()=>{
        setDropdownOpen(!isDropdownOpen);
    }
    useEffect(() => {
        setSelectedOption(initialOption);
    },[initialOption])
    useEffect(() => {
        const handleClickOutside = (event)=>{
            if (selectBoxRef.current && !selectBoxRef.current.contains(event.target))  setDropdownOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return <div className="w-auto min-w-max" ref={selectBoxRef}>
            <div className="relative">
                <button className="bg-teal p-5 bg-primary rounded text-white w-full shadow-md border border-1" onClick={toggleDropDown}>
                    <span className="float-left text-black text-sm font-bold mr-4 capitalize">{selectedOption.name} {selectedOption.post_count ? `(${selectedOption.post_count})` : ''}</span>
                    <span className="float-right text-black text-gray-400">
                        {
                            isDropdownOpen ? 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                            :
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                        }
                    </span>
                </button>
                {
                    isDropdownOpen ? 
                    <div className="absolute w-full rounded shadow-xl my-1 pin-t pin-l bg-primary px-5 py-2 max-h-64 overflow-scroll z-10">
                        <ul className="list-reset">
                            {
                                options.map((option,index)=>{
                                    return <li key={option.ID} className={`${options[index+1] ? 'border-b-2' : ''}`} onClick={()=>handleChange(option)}>
                                        <p className="py-2 block text-black hover:bg-grey-light cursor-pointer capitalize">
                                            {option.name} {option.post_count ? `(${option.post_count})` : ''}
                                            { selectedOption.ID===option.ID && <svg className="ml-2 float-right" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"/></svg>}
                                        </p>
                                    </li>
                                })

                            }
                        </ul>
                    </div>
                    : null
                }
            </div>
        </div>
}

export default DropDown;