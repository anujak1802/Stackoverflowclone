import React from 'react'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'
import {Link, useLocation} from 'react-router-dom'


const HomeMainbar = () => {

  var questionsList=[{
    id:1,
    votes:3,
    noOfAnswers:2,
    QuestionTitle:'What is function?',
    QuestionBody:'It meant to be',
    questionTags:['java','nodejs','mongodb','reactjs'],
    userPosted:'mano',
    time:'Jan 1'
  },{
    id:2,
    votes:0,
    noOfAnswers:2,
    QuestionTitle:'What is function?',
    QuestionBody:'It meant to be',
    questionTags:['java','nodejs','mongodb','reactjs'],
    userPosted:'mano',
    time:'Jan 1'
  },{
    id:3,
    votes:1,
    noOfAnswers:2,
    QuestionTitle:'What is function?',
    QuestionBody:'It meant to be',
    questionTags:['java','nodejs','mongodb','reactjs'],
    userPosted:'mano',
    time:'Jan 1'
  }]

  const location= useLocation();
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname ==='/'? <h1>Top Questions</h1>: <h1>All Questions</h1>
        }
        <Link to='/AskQuestion' className='ask-btn'>Ask Questions</Link>
      </div>
      <div>
        {
          questionsList ==null ?
          <h1>Loading</h1>:
          <>
            <p>{questionsList.length} questions</p>
            <QuestionsList questionsList={questionsList}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar