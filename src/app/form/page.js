"use client";

import { Suspense } from "react";
import FormContent from "../components/Formpage"; // Move your form code into this component

export default function FormPage() {
  return (
    <Suspense >
      <FormContent />
    </Suspense>
  );
}
