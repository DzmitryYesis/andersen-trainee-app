import style from './App.module.css'
import React, {useState} from "react";
import {InputFunc} from "./components/input/InputFunc";
import {TextareaFunc} from "./components/textarea/TextareaFunc";
import {ButtonFunc} from "./components/button/ButtonFunc";

const inintialState = {
    form: {
        name: 'Dzmitry',
        surname: 'Yesis',
        birthday: '12.09.1988',
        phone: '+375295273840',
        email: 'blablabla@mail.ru',
        aboutYourself: 'realy great man',
        skills: 'react, redux, js, ts',
        previousProject: 'todolist, social-network, play-card'
    },
    isValidForm: false

}

export const AppFunc = () => {

    const [state, setState]= useState(inintialState)

    return (
        <div className={style.app}>
            <h1 className={style.hText}>Questionnaire creation</h1>
            <InputFunc label={'Name'} placeholder={'Type your name'} type={'text'}
                       name={'name'}/>
            <InputFunc label={'Surname'} placeholder={'Type your surname'}
                       type={'text'} name={'surname'}/>
            <InputFunc label={'Birthday'} placeholder={'Select'} type={'date'}/>
            <InputFunc label={'Phone'} placeholder={'Type your phone number'}
                       type={'text'}/>
            <InputFunc label={'Email'} placeholder={'Type your email'} type={'text'}/>
            <TextareaFunc label={'About yourself'}
                          placeholder={'Tell us about yourself'}/>
            <TextareaFunc label={'Skills'} placeholder={'Tell us about your skills'}/>
            <TextareaFunc label={'Previous project'}
                          placeholder={'Tell us about your previous project'}/>
            <div className={style.buttonBlock}>
                <ButtonFunc name={'Save'}/>
                <ButtonFunc name={'Cancel'}/>
            </div>
        </div>
    )
}