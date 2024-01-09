import React, { useState } from 'react'
import Writting from '../Components/Writting';
import Reading from '../Components/Reading';
import Button from '../Components/Button';

const index = () => {
    const [currentChoice, setCurrentChoice] = useState("writting");

    const handleSelectChoicEssay = () => {
      setCurrentChoice("reading");
    };
    const handleSelectChoicTopic = () => {
      setCurrentChoice("writting");
    };
    return (
      <>
      <div className="sm:w-full flex justify-center">
  
        <div className='w-[932px] mt-10 flex flex-col px-[4.1%] '>
          <div className='flex xs:flex-col sm:flex-row  xs:w-100 justify-between sm:gap-5 xs:gap-2'>
            <Button
              type={currentChoice === "writting" ? "active" : "outline"}
              handleClick={handleSelectChoicTopic}
              className={`sm:w-1/2 xs:w-100 xs:py-2`}
            >
              Writing Topic
            </Button>
            <Button
              type={currentChoice === "reading" ? "active" : "outline"}
              handleClick={handleSelectChoicEssay}
              className={` sm:w-1/2 xs:w-100 xs:py-2`}
            >
              From Your Essay
            </Button>
          </div>
          {currentChoice === "reading" ? <Reading /> : <Writting />}
        </div>
        </div>
      </>
    )
}

export default index