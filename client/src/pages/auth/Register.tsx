import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, FC, SubmitEvent, useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import FormField from "../../components/FormField";

import { FormData, FormErrors, validateForm } from "../../utils/validateForm";

interface RegisterProps {
  toggleLoginForm: () => void;
  toggleRegisterForm: () => void;
}

const Register: FC<RegisterProps> = ({
  toggleLoginForm,
  toggleRegisterForm,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const registerFields: {
    name: keyof FormData;
    placeholder: string;
    type: string;
  }[] = [
    { name: "firstName", placeholder: "First Name", type: "text" },
    { name: "lastName", placeholder: "Last Name", type: "text" },
    { name: "username", placeholder: "Username", type: "text" },
    { name: "email", placeholder: "Email", type: "email" },
    { name: "password", placeholder: "Password", type: "password" },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
    },
  ];

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;

    const updatedFields = { ...formData, [key]: value };
    setFormData(updatedFields);

    const fieldError = validateForm(
      updatedFields,
      {
        firstName: { required: true, minLength: 4, label: "First Name" },
        lastName: { required: true, minLength: 4, label: "Last Name" },
        username: {
          required: true,
          label: "Username",
          custom: () => null,
        },
        email: { required: true, label: "Email" },
        password: { required: true, minLength: 8, label: "Password" },
        confirmPassword: {
          required: true,
          label: "Confirm Password",
          matchField: "password",
        },
      },
      key,
    );
    setErrors((prev) => ({
      ...prev,
      ...fieldError,
      ...(fieldError[key] ? {} : { [key]: undefined }),
    }));
  };
  const disabled =
    Object.keys(errors).length > 0 ||
    Object.values(formData).some((value) => !value.trim());

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md relative shadow-lg">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={toggleRegisterForm}
          className="absolute top-4 right-4 hover:text-gray-600 cursor-pointer"
        />
        <h2 className="text-2xl font-semibold mb-6 text-center text-darkNavy">
          Register
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {registerFields.map((field) => (
            <FormField key={field.name} error={errors[field.name]}>
              <Input
                name={field.name}
                type={field.type}
                inputSize="medium"
                onChange={handleChange}
                value={formData[field.name]}
                placeholder={field.placeholder}
              />
            </FormField>
          ))}

          <Button
            type="submit"
            size="medium"
            label="Sign Up"
            bgColor="bg-lilac"
            disabled={disabled}
            textColor="text-white"
            borderColor="border-lilac"
          />
        </form>

        <Button
          textColor="text-darkNavy"
          borderColor="border-transparent"
          className="mt-4 mx-auto block cursor-default"
        >
          Already have an account?{" "}
          <span
            onClick={() => {
              toggleLoginForm();
              toggleRegisterForm();
            }}
            className="underline cursor-pointer"
          >
            Login Here
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Register;
