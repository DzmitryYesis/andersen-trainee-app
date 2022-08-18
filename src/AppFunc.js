import React, {useEffect, useState} from "react";
import {QuestionnaireFunc} from "./components/questionnaire/QuestionnaireFunc";
import style from "./App.module.css";
import {InputFunc} from "./components/input/InputFunc";
import {TextareaFunc} from "./components/textarea/TextareaFunc";
import {ButtonFunc} from "./components/button/ButtonFunc";

const initialState = {
    form: {
        name: undefined,
        surname: undefined,
        birthday: '',
        phone: '',
        email: '',
        aboutYourself: '',
        skills: '',
        previousProject: ''
    },
    isValidForm: false
}

const initialErrorsState = {
    name: null,
    surname: null,
    birthday: '',
    phone: '',
    email: '',
    aboutYourself: '',
    skills: '',
    previousProject: ''
}

export const AppFunc = () => {

    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState(initialErrorsState)

    const checkValidForm = () => {
        let isValid = true;

        //Name
        if (!state.form.name) {
            isValid = false
            setErrors({...errors, name: 'Cannot be empty!'})
        }

        if (typeof state.form.name !== "undefined") {
            if (!state.form.name.match(/^[a-zA-Z]+$/)) {
                isValid = false;
                setErrors({...errors, name: 'Only letters!'})
            }
        }

        if (typeof state.form.name !== "undefined") {
            if (state.form.name[0] !== state.form.name[0].toUpperCase()) {
                isValid = false
                setErrors({...errors, name: 'Name must start with a capital letter!'})
            }
        }

        //Surname
        // if (!state.form.surname) {
        //     isValid = false
        //     setErrors({...errors, surname: 'Cannot be empty'})
        // }
        //
        // if (typeof state.form.surname !== "undefined") {
        //     if (!state.form.surname.match(/^[a-zA-Z]+$/)) {
        //         isValid = false;
        //         setErrors({...errors, surname: 'Only letters'})
        //     }
        // }
        //
        // if (typeof state.form.surname !== "undefined") {
        //     if (state.form.surname[0] !== state.form.surname[0].toUpperCase()) {
        //         isValid = false
        //         setErrors({...errors, surname: 'Name must start with a capital letter'})
        //     }
        // }

        if(isValid){
            setState({...state, isValidForm: true})
        }
    }


    // const submitForm = () => {
    //     if (checkValidForm()) {
    //         return setState({...state, isValidForm: true})
    //     }


        const clearState = () => {
            setErrors(initialErrorsState)
            setState(initialState)
        }

        const handleStateChange = (formName, name) => {
            setErrors(initialErrorsState)
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

        useEffect(() => {
            console.log(state)
        }, [state])

        return (
            <div>
                {state.isValidForm ?
                    <QuestionnaireFunc state={state}/> :
                    <div className={style.form}>
                        <h1 className={style.hText}>Questionnaire creation</h1>
                        <InputFunc label={'Name'} placeholder={'Type your name'}
                                   type={'text'}
                                   onChange={handleStateChange} name={'name'}
                                   value={state.form.name} error={errors.name}/>
                        <InputFunc label={'Surname'} placeholder={'Type your surname'}
                                   type={'text'} onChange={handleStateChange}
                                   name={'surname'}
                                   value={state.form.surname}/>
                        <InputFunc label={'Birthday'} placeholder={'Select'} type={'date'}
                                   onChange={handleStateChange} name={'birthday'}
                                   value={state.form.birthday}/>
                        <InputFunc label={'Phone'} placeholder={'Type your phone number'}
                                   type={'text'} onChange={handleStateChange}
                                   name={'phone'}
                                   value={state.form.phone}/>
                        <InputFunc label={'Email'} placeholder={'Type your email'}
                                   type={'text'} onChange={handleStateChange}
                                   name={'email'}
                                   value={state.form.email}/>
                        <TextareaFunc label={'About yourself'}
                                      placeholder={'Tell us about yourself'}
                                      onChange={handleStateChange} name={'aboutYourself'}
                                      value={state.form.aboutYourself}/>
                        <TextareaFunc label={'Skills'}
                                      placeholder={'Tell us about your skills'}
                                      onChange={handleStateChange} name={'skills'}
                                      value={state.form.skills}/>
                        <TextareaFunc label={'Previous project'}
                                      placeholder={'Tell us about your previous project'}
                                      onChange={handleStateChange}
                                      name={'previousProject'}
                                      value={state.form.previousProject}/>
                        <div className={style.buttonBlock}>
                            <ButtonFunc name={'Save'} onClick={checkValidForm}/>
                            <ButtonFunc name={'Cancel'} onClick={clearState}/>
                        </div>
                    </div>}
            </div>
        )
    }