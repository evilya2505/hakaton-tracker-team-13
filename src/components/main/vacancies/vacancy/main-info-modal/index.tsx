import * as React from "react";
import mainInfoModal from "./index.module.css";
import ApplicantCompareCard from "../applicant-compare-card";
import { TApplicant } from "../../../../../utils/types";
interface IMainInfoModalProps {
  studentFirst?: TApplicant | undefined;
  studentSecond?: TApplicant | undefined;
}
export default function MainInfoModal({studentFirst,studentSecond} : IMainInfoModalProps) {
  return (
    <section className={mainInfoModal.container}>
      <ApplicantCompareCard student={studentFirst}/>
      <ApplicantCompareCard student={studentSecond}/>
    </section>
  );
}
