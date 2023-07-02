import HomeLayout from '@/components/layouts/HomeLayout'
import QuizButtons from '@/components/ui/QuizButtons'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Question() {
  const [questions, setQuestions] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0)
  const router = useRouter()
  console.log(router.query);
  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  useEffect(() => {

    try {
      axios.get(process.env.NEXT_PUBLIC_API_URI+'/question').then((res) => {

        if (res.data.filter(data => data.subject == router.query.id).length == questionIndex) 
        { alert('No Questions');
      router.push('/') }
        setQuestions(shuffleArray(res.data.filter(data => data.subject == router.query.id)))
        console.log('shuffledArray', res.data.length)
      }
      )
    }
    catch (err) {
      console.log(err)
    }
  }, [])


  let data = questions[questionIndex]

  const rightAnswer = data?.answers.filter(ans => ans.rightAnswer == true)[0]?.answer
  console.log(questions)
  console.log(data)
  const handleAnswer = () => {
    setAnswered(true)
  }
  const handleQuestion = () => {
    setAnswered(false)
    setSelectedOption('')
    questionIndex >= questions.length - 1 ? alert('No More Questions') : setQuestionIndex(questionIndex + 1)
  }
  return (
    <HomeLayout>
      <div className='container'>
        {/* {questions.length && questions?.map((data,i)=>( */}
        <div className='quizDiv'>
          <div className='questionDiv'>
          <h3>Question {questionIndex+1}/{questions.length}</h3>
          <h1>{data?.question}?</h1></div>
          <QuizButtons options={data?.answers} selectedOption={selectedOption} setSelectedOption={setSelectedOption} answered={answered} rightAnswer={rightAnswer} />
          {/* {data?.answers.map((ans,j)=>(
            <div key={j}>
                {j+1}. {ans.answer}
                
            </div>
        ))} */}
        </div>
        <button onClick={handleAnswer} className='submitBtn' disabled={answered}>Submit</button>
        <button onClick={handleQuestion} className='nextBtn' disabled={!answered}>Next Question</button>
        {/* ))} */}
      </div>
    </HomeLayout>
  )
}
