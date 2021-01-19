import { type } from 'os';
import React from 'react';
import {questionPropsType} from './../Types/quiz_types'

const QuestionCard: React.FC<questionPropsType> = ({question,options, callBack}) =>{
    return(
        <div className='question-container'>
            <div className='question'>
                {question}
            </div>
            <form onSubmit={callBack}>
                {options.map((opt:string, index: number)=>{
                    return(
                        <div key={index}>
                            <label >
                            <input type='radio' name='opt' value={opt}/>
                            {opt}
                        </label>
                        </div>
                    )
                })}
                <input type="submit"/> 
            </form>

        </div>
    )
}
export default QuestionCard;