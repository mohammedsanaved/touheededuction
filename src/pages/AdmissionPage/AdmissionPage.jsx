import React, { useEffect } from "react";
import { AdmissionPageStyles } from "./AdmissionPageStyles";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { schoolAdmission } from "../../actions/schoolActions";

const AdmissionPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(schoolAdmission(id));
  }, [dispatch, id]);

  const admissionDetails = useSelector(
    (state) => state.schoolAdmission.admissionDetail
  );

  const admission =
    admissionDetails && admissionDetails.length > 0
      ? admissionDetails[0]
      : null;

  const renderDocumentRequirements = () => {
    if (!admission || !admission.documents_required) return null;
    return admission.documents_required.split("\n").map((point, index) => (
      <p key={index} className="doc-text mx-auto">
        {index + 1}. {point}
      </p>
    ));
  };

  return (
    <AdmissionPageStyles>
      {admission && (
        <>
          <div className="admission-header d-flex justify-content-center align-items-center">
            <Link to={"/"}>
              {admission.school_detail && (
                <img
                  src={`${process.env.REACT_APP_API_URL}/${admission.school_detail.logo}`}
                  alt={admission.school_detail.name}
                  className="logo-img"
                />
              )}
            </Link>
            <div className="admission-title">
              {admission.school_detail && admission.school_detail.name}
            </div>
          </div>

          <p className="fresh-admission-text mx-auto">
            {admission.description}
          </p>

          <div className="steps-container d-flex justify-content-center align-items-center">
            <div className="step-div d-flex justify-content-center align-items-center">
              Step 1: {admission.step1}
            </div>
            <img
              src="/assets/images/Arrow1.png"
              alt=""
              className="steps-arrow"
            />
            <div className="step-div d-flex justify-content-center align-items-center">
              Step 2: {admission.step2}
            </div>
          </div>

          <div className="document-req-div mx-auto">
            <h3 className="document-req-text">Document Required</h3>
            {renderDocumentRequirements()}
          </div>

          <p className="fee-concession-text mx-auto">
            <span>Fee concession</span>: {admission.fee_concession}
          </p>
        </>
      )}
    </AdmissionPageStyles>
  );
}
export default AdmissionPage