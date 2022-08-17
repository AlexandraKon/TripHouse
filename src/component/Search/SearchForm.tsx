import {ChangeEvent, FormEvent, useState} from 'react';
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars';

type Props = {
    value: string; 
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} 

export const SearchForm = ({value, onChange}: Props) => {
   
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    };

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState<{adult: number; children: number; room: number}>({
        adult: 1,
        children: 0,
        room: 1,
    });

    // function handleOption(name: string, operation: string) {
    //     setOptions(prev => {
    //         if (name === "adult")
    //         return {
    //             ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    //         };
    //     });

    
    // }const copyObj = {…prev}; 
// prev[name] += 1?
// return copyObj

    function handleOption(name: string, operation: string) {
        setOptions {
            
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    }

    const minDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    const maxDate: Date = new Date(new Date().getFullYear()+2, new Date().getMonth(), new Date().getDate());


    return (
            <form className= "search-form" onSubmit={handleSubmit}>
                <input className="search-form__input search-form__action" value={value} onChange={onChange} type="text" placeholder="Where are you going?"/>
                <div className="search-form__action">
                    <DateRangePickerComponent placeholder='Check-in — Check-out' 
                    min={minDate} max={maxDate}
                    minDays={2} format="dd-MMM-yy"></DateRangePickerComponent>
                </div>
                <div className='search-form__action'>
                    <span onClick={()=>setOpenOptions(!openOptions)} className='search-form__ticket'>{`${options.adult} Adult — ${options.children} Children — ${options.room} Room`}</span> 
                    { openOptions && <div className='option'>
                        <div className='option__item'>
                            <span className='option__text'>Adult</span>
                            <div className='option__counter'>
                                <button disabled={options.children <= 1} className='option__counterBtn' onClick={()=>handleOption("adult", "d")}>-</button>
                                <span className='option__counterNumber'>{options.adult}</span>
                                <button className='option__counterBtn' onClick={()=>handleOption("adult", "i")}>+</button>
                            </div> 
                        </div>
                        <div className='option__item'>
                            <span className='option__text'>Children</span>
                            <div className='option__counter'>
                                <button disabled={options.children <= 0} className='option__counterBtn' onClick={()=>handleOption("children", "d")}>-</button>
                                <span className='option__counterNumber'>{options.children}</span>
                                <button className='option__counterBtn' onClick={()=>handleOption("children", "i")}>+</button>
                            </div>
                        </div>
                        <div className='option__item'>
                            <span className='option__text'>Room</span>
                            <div className='option__counter'>
                                <button disabled={options.room  <= 1} className='option__counterBtn' onClick={()=>handleOption("room", "d")}>-</button>
                                <span className='option__counterNumber'>{options.room}</span>
                                <button className='option__counterBtn' onClick={()=>handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                    </div> 
                    }
                </div>
                <button className="search-form__btn">Search</button>
            </form>
        
    )
};


export default SearchForm;