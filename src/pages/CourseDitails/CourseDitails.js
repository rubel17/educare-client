import React from 'react';
import jsPDF from "jspdf";
import { Link, useLoaderData } from 'react-router-dom';

const CourseDitails = () => {
    const course  = useLoaderData();
    const {image, courseName, courseBody, description} =course;
    
    const  downloadPDF = ()=> {
      const doc = new jsPDF("p", "pt", "a4")
      doc.html(document.querySelector("#content"), {
          callback: function(pdf){
              pdf.save("mypdf.pdf");
          }
      })
      };

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
        <img  src={image} className="sm:w-max lg:rounded shadow-2xl" alt="" />
      <div >
         <div id='content' className='m-10'>
         <div className='flex justify-between'>
          <h1 className="text-5xl font-bold ">{courseName}</h1>
          <button className=" btn btn-active btn-primary" onClick={downloadPDF}>downloadPDF</button>
          </div>
          <p className="py-6">{courseBody?courseBody 
          :
          <strong className='text-2xl text-purple-400'>'Please Visit Courses Page First'<Link to='/courses' className=" ml-3 btn btn-warning">Courses</Link> </strong>

          }
          </p>
          <p className="py-6">{description}</p>
         </div>
          <button className="btn btn-primary ml-10"><Link to={`/checkout/${course.id}`}>Get premium access</Link></button>
      </div>
    </div>
  </div>
</div>
    );
};

export default CourseDitails;