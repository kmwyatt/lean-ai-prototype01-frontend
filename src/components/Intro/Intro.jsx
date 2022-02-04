import React from "react";
import IntroBanner from "./IntroBanner";
import MainSection from "./MainSection";
import QnaSection from "./QnaSection";
import StepSection from "./StepSection";

// INTRO
export function Intro() {
  return (
    <>
      <IntroBanner />
      <MainSection />
      <StepSection />
      <QnaSection />
    </>
  );
}
