import * as React from "react";
import mainInfoModal from "./main-info-modal.module.css";
import ApplicantCompareCard from "../applicant-compare-card/applicant-compare-card";

export default function MainInfoModal() {
  return (
    <section className={mainInfoModal.container}>
      <ApplicantCompareCard />
      <ApplicantCompareCard />
    </section>
  );
}
