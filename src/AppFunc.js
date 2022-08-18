import React, {useEffect, useState} from "react";
import {QuestionnaireFunc} from "./components/questionnaire/QuestionnaireFunc";
import style from "./App.module.css";
import {InputFunc} from "./components/input/InputFunc";
import {TextareaFunc} from "./components/textarea/TextareaFunc";
import {ButtonFunc} from "./components/button/ButtonFunc";

const initialState = {
    form: {
        name: '',
        surname: '',
        birthday: '',
        phone: '',
        email: '',
        aboutYourself: '',
        skills: '',
        previousProject: ''
    },
    isValidForm: false

}

export const AppFunc = () => {

    const [state, setState] = useState(initialState)

    const checkValidForm = () => {
        setState({...state, isValidForm: true})
    }

    const clearState = () => {
        setState(initialState)
    }

    const handleStateChange = (formName, name) => {
        setState({...state, form: {...state.form, [formName]: name}})
    }

    // const handleNameChange = (name) => {
    //     setState({...state, form: {...state.form, name}})
    // }
    //
    // const handleSurnameChange = (surname) => {
    //     setState({...state, form: {...state.form, surname}})
    // }
    //
    // const handleBirthdayChange = (birthday) => {
    //     setState({...state, form: {...state.form, birthday}})
    // }
    //
    // const handlePhoneChange = (phone) => {
    //     setState({...state, form: {...state.form, phone}})
    // }
    //
    // const handleEmailChange = (email) => {
    //     setState({...state, form: {...state.form, email}})
    // }
    //
    // const handleAboutYourselfChange = (aboutYourself) => {
    //     setState({...state, form: {...state.form, aboutYourself}})
    // }

    // useEffect(() => {
    //     console.log(state)
    // }, [state])

    return (
        <div>
            {state.isValidForm ?
                <QuestionnaireFunc state={state}/> :
                <div className={style.form}>
                    <h1 className={style.hText}>Questionnaire creation</h1>
                    <InputFunc label={'Name'} placeholder={'Type your name'} type={'text'}
                               onChange={handleStateChange} name={'name'} value={state.form.name}/>
                    <InputFunc label={'Surname'} placeholder={'Type your surname'}
                               type={'text'} onChange={handleStateChange} name={'surname'} value={state.form.surname}/>
                    <InputFunc label={'Birthday'} placeholder={'Select'} type={'date'}
                               onChange={handleStateChange} name={'birthday'} value={state.form.birthday}/>
                    <InputFunc label={'Phone'} placeholder={'Type your phone number'}
                               type={'text'} onChange={handleStateChange} name={'phone'} value={state.form.phone}/>
                    <InputFunc label={'Email'} placeholder={'Type your email'}
                               type={'text'} onChange={handleStateChange} name={'email'} value={state.form.email}/>
                    <TextareaFunc label={'About yourself'}
                                  placeholder={'Tell us about yourself'}
                                  onChange={handleStateChange} name={'aboutYourself'} value={state.form.aboutYourself}/>
                    <TextareaFunc label={'Skills'}
                                  placeholder={'Tell us about your skills'}
                                  onChange={handleStateChange} name={'skills'} value={state.form.skills}/>
                    <TextareaFunc label={'Previous project'}
                                  placeholder={'Tell us about your previous project'}
                                  onChange={handleStateChange} name={'previousProject'} value={state.form.previousProject}/>
                    <div className={style.buttonBlock}>
                        <ButtonFunc name={'Save'} onClick={checkValidForm}/>
                        <ButtonFunc name={'Cancel'} onClick={clearState}/>
                    </div>
                </div>}
        </div>
    )
}