import React from 'react';
import './App.css';
import MyInput from "./components/input/myInput";
import MyTextarea from "./components/textarea/myTextarea";
import MyButton from "./components/button/myButton";

class App extends React.Component {
    render() {
        return <div className='App'>
            <h1>Questionnaire creation</h1>
            <MyInput label={'Name'} placeholder={'Type your name'} type={'text'}/>
            <MyInput label={'Surname'} placeholder={'Type your surname'} type={'text'}/>
            <MyInput label={'Birthday'} placeholder={'Select'} type={'date'}/>
            <MyInput label={'Phone'} placeholder={'Type your phone number'}
                     type={'text'}/>
            <MyInput label={'Email'} placeholder={'Type your email'} type={'text'}/>
            <MyTextarea label={'About yourself'} placeholder={'Tell us about yourself'}/>
            <MyTextarea label={'Skills'} placeholder={'Tell us about your skills'}/>
            <MyTextarea label={'Previous project'}
                        placeholder={'Tell us about your previous project'}/>
            <div className='ButtonBlock'>
                <MyButton name={'Save'}/>
                <MyButton name={'Cancel'}/>
            </div>
        </div>;
    }
}

export default App;
