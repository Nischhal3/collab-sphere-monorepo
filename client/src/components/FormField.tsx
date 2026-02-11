import React, { FC } from "react";

interface FormFieldProps {
  error?: string;
  children: React.ReactNode;
}

const FormField: FC<FormFieldProps> = ({ children, error }) => (
  <div className="flex flex-col gap-1 w-full">
    {children}
    {error && <p className="text-red-500 text-sm mt-0">{error}</p>}
  </div>
);

export default FormField;
