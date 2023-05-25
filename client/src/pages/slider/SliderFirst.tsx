import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { Button } from '../Auth/Login';
import CloseIcon from '@mui/icons-material/Close';
import { Country, State } from "country-state-city"; // Import the countries data
import ArrowBackIcon from '@mui/icons-material/ArrowBack';




const SliderFirst = ({ active, setSlider }) => {
    const existingData = JSON.parse(sessionStorage.getItem('UserData') || '{}');
    const [country, setCountry] = useState(existingData.dob?.country);
    const [state, setState] = useState(existingData.dob?.state);
    const changeSlider = () => {

        existingData.country = country;
        existingData.state= state;


        sessionStorage.setItem("UserData", JSON.stringify(existingData));
        setSlider(active + 1)
    }
    const closeSlider = () => {
        setSlider(0)
    }


    // const countr


    
    return (
        <div className='w-full relative  min-h-[80vh] p-3 pl-4 pr-4'>

            <div className="flex w-full  justify-between items-center">
                <div className="flex gap-5 items-center ">
                  
                    <p className='text-black text-2xl font-bold'>Choose Your Country Details</p>
                </div>
                <span onClick={closeSlider} className='cursor-pointer hover:bg-blue-700 rounded-full p-2 hover:text-white transition-all duration-300' >
                    <CloseIcon />
                </span>


            </div>
            <div className="flex flex-col  max-w-[450px]   m-auto gap-8 mt-8">



                <TextField
                    id="outlined-select-currency-native"
                    select
                    required
                    label="Country"
                    defaultValue={'Country'}
                    className="flex-grow"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    SelectProps={{
                        native: true,
                    }}
                >
                    {Country &&
                        Country.getAllCountries().map((item) => (
                            <option key={item.isoCode} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                </TextField>



                {country && (
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="State"
                        className="flex-grow"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}

                        SelectProps={{
                            native: true,
                        }}
                    >

                        {State &&
                            State.getStatesOfCountry(country).map((item) => (
                                <option key={item.isoCode} value={item.isoCode}>
                                    {item.name}
                                </option>
                            ))}
                    </TextField>



                )}


                <div className="w-full  left-0 absolute bottom-10 " onClick={() => changeSlider()}>

                    <Button value="Next" class="bg-black w-full m-auto text-white" />
                </div>
            </div>
        </div>
    )
}

export default SliderFirst
