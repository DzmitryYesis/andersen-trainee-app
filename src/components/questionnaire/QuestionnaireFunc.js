import style from './Questionnaire.module.css'

export const QuestionnaireFunc = ({state}) => {
    return (
        <div className={style.wrapper}>
            <h1 className={style.h1}>Personal Questionnaire</h1>
            <h2 className={style.h2}>{state.form.name} {state.form.surname}</h2>
            <div className={style.formWrapper}>
                <div className={style.divRow}>
                    <span className={style.spanName}>Birthday:</span>
                    <span className={style.spanInfo}>{state.form.birthday}</span>
                </div>
                <div className={style.divRow}>
                    <span className={style.spanName}>Phone:</span>
                    <span className={style.spanInfo}>{state.form.phone}</span>
                </div>
                <div className={style.divRow}>
                    <span className={style.spanName}>Email:</span>
                    <span className={style.spanInfo}>{state.form.email}</span>
                </div>
                <div className={style.divRow}>
                    <span className={style.spanName}>About yourself:</span>
                    <span className={style.spanInfo}>{state.form.aboutYourself}</span>
                </div>
                <div className={style.divRow}>
                    <span className={style.spanName}>Skills:</span>
                    <span className={style.spanInfo}>{state.form.skills}</span>
                </div>
                <div className={style.divRow}>
                    <span className={style.spanName}>Previous project:</span>
                    <span className={style.spanInfo}>{state.form.previousProject}</span>
                </div>
            </div>
        </div>
    )
}