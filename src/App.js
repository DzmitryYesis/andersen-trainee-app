import React from 'react';
import './App.css';
import Input from "./components/input/Input";
import Textarea from "./components/textarea/Textarea";
import Button from "./components/button/Button";

class App extends React.Component {
    render() {
        return <div className='App'>
            <h1 className='HText'>Questionnaire creation</h1>
            <Input label={'Name'} placeholder={'Type your name'} type={'text'}/>
            <Input label={'Surname'} placeholder={'Type your surname'} type={'text'}/>
            <Input label={'Birthday'} placeholder={'Select'} type={'date'}/>
            <Input label={'Phone'} placeholder={'Type your phone number'}
                   type={'text'}/>
            <Input label={'Email'} placeholder={'Type your email'} type={'text'}/>
            <Textarea label={'About yourself'} placeholder={'Tell us about yourself'}/>
            <Textarea label={'Skills'} placeholder={'Tell us about your skills'}/>
            <Textarea label={'Previous project'}
                      placeholder={'Tell us about your previous project'}/>
            <div className='ButtonBlock'>
                <Button name={'Save'}/>
                <Button name={'Cancel'}/>
            </div>
        </div>;
    }
}

export default App;
