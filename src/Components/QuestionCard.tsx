import { type } from 'os';
import React from 'react';
import {questionPropsType} from './../Types/quiz_types'

const QuestionCard: React.FC<questionPropsType> = ({question,options}) =>{
    return(
        <div className='question-container'>
            <div className='question'>
                {question}
            </div>
            <form>

                <input type="submit"/>
            </form>

        </div>
    )
}
export default QuestionCard;