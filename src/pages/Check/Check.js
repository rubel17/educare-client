import React from 'react';
import ReactToPrint from 'react-to-print';
import './Check.css'
import { useRef } from 'react';

//this page will make print doc....

const Check = () => {
    const ref = useRef()
    return (
        <div className='print'>
            <div className='sss'>
                <div ref={ref} className='a'>

                     <p className='mb-20'>
                     While the name may be recent, the FAQ format itself is quite old. For example, Matthew Hopkins wrote The Discovery of Witches in 1648 as a list of questions and answers, introduced as "Certain Queries answered"[citation needed]. Many old catechisms are in a question-and-answer (Q&A) format. Summa Theologica, written by Thomas Aquinas in the second half of the 13th century, is a series of common questions about Christianity to which he wrote a series of replies. Plato's dialogues are even older. 
                    </p>
                    <img src="https://img.freepik.com/free-photo/copy-space-roses-flowers_23-2148860032.jpg?w=1800&t=st=1666866975~exp=1666867575~hmac=4987ef58839c97131e8bf8c09a75cc4be42b057f1f68bcc927503dd369fef8f9" alt=""/>

                </div>

            </div>
            <div className='mx-auto w-48 my-5'>
            <ReactToPrint
            trigger={() => <button className="w-32 btn btn-active btn-primary">Print</button>}
            content = {()=>ref.current}/>
            </div>
        </div>
    );
};

export default Check;