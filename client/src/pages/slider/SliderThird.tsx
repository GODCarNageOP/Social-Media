import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '../Auth/Login';
import { updateProfile } from '../../redux/action/UserAction';
import { useDispatch } from 'react-redux';

const language = [
    'Hindi',
    'Enlish',
    'Bengali',
    'Telugu',
    'Marathi',
    'Tamil',
    'Urdu',
    'Gujarati',
    'Kannada',
    'Odia',
    'Malayalam',
];


const SliderThird = ({ active, setSlider }) => {
    const existingData = JSON.parse(sessionStorage.getItem('UserData') || '{}');
    const [selectedlanguage, setSelectedlanguage] = useState(existingData.language || []);

    const dispatch = useDispatch();

    const changeSlider = () => {
        setSlider(0);

        existingData.language = selectedlanguage;

        sessionStorage.setItem("UserData", JSON.stringify(existingData));

        const userData = {
            country: existingData.country,
            state: existingData.state,
            choices: existingData.choices,
            language: existingData.language,


        }

        dispatch(updateProfile(userData))

    }
    const backSlider = () => {
        setSlider(active - 1)
    }


    const handleTopicChange = (language) => {
        if (selectedlanguage.includes(language)) {
            setSelectedlanguage(selectedlanguage.filter((t) => t !== language));
        } else {
            setSelectedlanguage([...selectedlanguage, language]);
        }
    };
    const closeSlider = () => {
        setSlider(0)
    }
    return (
        <div className='w-full relative min-h-[80vh] p-3 pl-4 pr-4 '>
            <div className="flex w-full justify-between items-center">
                <div className="flex gap-5 items-center">
                    <span className='cursor-pointer' onClick={backSlider}>
                        <ArrowBackIcon />
                    </span>
                    <p className='text-black text-2xl font-bold'>Choose Your Native Language</p>
                </div>
                <span onClick={closeSlider} className='cursor-pointer hover:bg-blue-700 rounded-full p-2 hover:text-white transition-all duration-300' >

                    <CloseIcon />
                </span>
            </div>
            <div className="flex flex-col max-w-[450px] m-auto gap-8 mt-8">
                <FormGroup className='flex flex-wrap'>
                    <div className="flex gap-2 flex-wrap">
                        {language.slice(0, Math.ceil(language.length / 2)).map((topic, index) => (
                            <FormControlLabel
                                className='w-fit flex'
                                key={index}
                                control={<Checkbox checked={selectedlanguage.includes(topic)} onChange={() => handleTopicChange(topic)} />}
                                label={topic}
                            />
                        ))}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {language.slice(Math.ceil(language.length / 2)).map((topic, index) => (
                            <FormControlLabel
                                className='w-fit flex'
                                key={index}
                                control={<Checkbox checked={selectedlanguage.includes(topic)} onChange={() => handleTopicChange(topic)} />}
                                label={topic}
                            />
                        ))}
                    </div>
                </FormGroup>

                <div className="w-full left-0 absolute bottom-10" onClick={changeSlider}>
                    <Button value="Done" class="bg-black w-full m-auto text-white" />
                </div>
            </div>
        </div>
    );
};

export default SliderThird;
