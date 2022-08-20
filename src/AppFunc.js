import React, {useState} from "react";
import {QuestionnaireFunc} from "./components/questionnaire/QuestionnaireFunc";
import style from "./App.module.css";
import {InputFunc} from "./components/input/InputFunc";
import {TextareaFunc} from "./components/textarea/TextareaFunc";
import {ButtonFunc} from "./components/button/ButtonFunc";
import {Notification} from "./components/notification/Notification";
import {initialState} from "./components/state/initialState";
import {initialErrorsState} from "./components/state/errorsState";


export const AppFunc = () => {

    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState(initialErrorsState)
    const [isShowPopUp, setIsShowPopUp] = useState(false)

    const checkValidForm = () => {
        let isValid = true;
        let errorsObj = {}

        //Name
        if (!state.form.name) {
            isValid = false
            errorsObj.name = 'Cannot be empty!'
        } else {
            if (!state.form.name.match(/^[a-zA-Z]+$/)) {
                isValid = false;
                errorsObj.name = 'Only letters!'
            }

            if (state.form.name[0] !== state.form.name[0].toUpperCase()) {
                isValid = false
                errorsObj.name = 'Name must start with a capital letter!'
            }
        }


        //Surname
        if (!state.form.surname) {
            isValid = false
            errorsObj.surname = 'Cannot be empty!'
        } else {
            if (state.form.surname[0] !== state.form.surname[0].toUpperCase()) {
                isValid = false
                errorsObj.surname = 'Surname must start with a capital letter!'
            }
        }

        //Birthday
        if (!state.form.birthday) {
            isValid = false
            errorsObj.birthday = 'Cannot be empty!'
        }

        //Email
        if (!state.form.email) {
            isValid = false
            errorsObj.email = 'Cannot be empty!'
        }

        //Phone
        if (!state.form.phone) {
            isValid = false
            errorsObj.phone = 'Cannot be empty!'
        }

        //AboutYourself
        if (!state.form.aboutYourself) {
            isValid = false
            errorsObj.aboutYourself = 'Cannot be empty!'
        }

        //Skills
        if (!state.form.skills) {
            isValid = false
            errorsObj.skills = 'Cannot be empty!'
        }

        //PreviousProject
        if (!state.form.previousProject) {
            isValid = false
            errorsObj.previousProject = 'Cannot be empty!'
        }

        if (isValid) {
            setState({...state, isValidForm: true})
            setIsShowPopUp(true)
        } else {
            setErrors(errorsObj)
        }
    }

    const clearState = () => {
        setErrors(initialErrorsState)
        setState(initialState)
    }

    const handleStateChange = (formName, name) => {
        setErrors({...errors, [formName]: ''})
        setState({...state, form: {...state.form, [formName]: name}})
    }

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
                               value={state.form.surname} error={errors.surname}/>
                    <InputFunc label={'Birthday'} placeholder={'Select'} type={'date'}
                               onChange={handleStateChange} name={'birthday'}
                               value={state.form.birthday} error={errors.birthday}/>
                    <InputFunc label={'Phone'} placeholder={'Type your phone number'}
                               type={'text'} onChange={handleStateChange}
                               name={'phone'}
                               value={state.form.phone} error={errors.phone}/>
                    <InputFunc label={'Email'} placeholder={'Type your email'}
                               type={'text'} onChange={handleStateChange}
                               name={'email'}
                               value={state.form.email} error={errors.email}/>
                    <TextareaFunc label={'About yourself'}
                                  placeholder={'Tell us about yourself'}
                                  onChange={handleStateChange} name={'aboutYourself'}
                                  value={state.form.aboutYourself}
                                  error={errors.aboutYourself}/>
                    <TextareaFunc label={'Skills'}
                                  placeholder={'Tell us about your skills'}
                                  onChange={handleStateChange} name={'skills'}
                                  value={state.form.skills} error={errors.skills}/>
                    <TextareaFunc label={'Previous project'}
                                  placeholder={'Tell us about your previous project'}
                                  onChange={handleStateChange}
                                  name={'previousProject'}
                                  value={state.form.previousProject}
                                  error={errors.previousProject}/>
                    <div className={style.buttonBlock}>
                        <ButtonFunc name={'Submit'} onClick={checkValidForm}/>
                        <ButtonFunc name={'Cancel'} onClick={clearState}/>
                    </div>
                </div>}
            <Notification isShowPopUp={isShowPopUp} setIsShowPopUp={setIsShowPopUp}/>
        </div>
    )
}