import React from 'react'
import { Link } from 'react-router-dom'

const Questions = ({ question }) => {
  return (
    <div className='display-question-container'>
      <div className="display-votes-ans">
        <p>{question.upVote}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className="display-questions-details">
        <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.QuestionTitle}</Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {
              question.questionTags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))
            }
          </div>
          <p className="display-time">
            asked {question.time} {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Questions