import React from 'react';
import { LetsTakeAdmissionStyles } from "./LetsTakeAdmissionStyles.js";

const LetsTakeAdmission = () => {


  const staticImageUrl = '/assets/images/EnrollYourChild.png';

  return (
    <LetsTakeAdmissionStyles>
    <div className='admission-section-container'>
      <div className='d-flex mx-auto admission-section'>
        <div className='admission-text-div'>
          <h2>Let’s Take a Admission</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam, mollitia tempora neque voluptate debitis illum veniam.Numquam blanditiis dignissimos laboriosam illum ut officia.<br></br><br></br>

            Nam aperiam autem nesciunt perferendis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nulla sequi pariatur quam animi ipsum molestias assumenda cumque.<br></br><br></br>

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam, mollitia tempora neque voluptate debitis illum veniam.Numquam blanditiis dignissimos laboriosam illum ut officia.

          </p>
        </div>
        <img src={`${staticImageUrl}`} alt="" className='enroll-img' />
      </div>
    </div>
    </LetsTakeAdmissionStyles>
  )
}

export default LetsTakeAdmission;