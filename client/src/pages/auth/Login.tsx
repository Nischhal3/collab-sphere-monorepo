import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, FC, SubmitEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Input from "../../components/Input";
import Button from "../../components/Button";
import FormField from "../../components/FormField";

import { FormData, FormErrors, validateForm } from "../../utils/validateForm";

interface LoginProps {
  toggleLoginForm: () => void;
  toggleRegisterForm: () => void;
}

const Login: FC<LoginProps> = ({ toggleLoginForm, toggleRegisterForm }) => {
  const [formData, setFormData] = useState<
    Pick<FormData, "email" | "password">
  >({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const loginFields: {
    name: keyof Pick<FormData, "email" | "password">;
    placeholder: string;
    type: string;
  }[] = [
    { name: "email", placeholder: "Email", type: "email" },
    { name: "password", placeholder: "Password", type: "password" },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;

    const updatedFields = { ...formData, [key]: value };
    setFormData(updatedFields);

    const fieldError = validateForm(
      updatedFields,
      {
        email: { required: true, label: "Email" },
        password: { required: false, label: "Password" },
      },
      key,
    );
    setErrors((prev) => ({
      ...prev,
      ...fieldError,
      ...(fieldError[key] ? {} : { [key]: undefined }),
    }));
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log("submit");
  };

  const disabled =
    Object.values(errors).some((error) => error) ||
    Object.values(formData).some((value) => !value.trim());

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md relative shadow-lg">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={toggleLoginForm}
          className="absolute top-4 right-4 hover:text-gray-600 cursor-pointer"
        />
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {loginFields.map((field) => (
            <FormField key={field.name} error={errors[field.name]}>
              <Input
                name={field.name}
                type={field.type}
                inputSize="medium"
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
              />
            </FormField>
          ))}

          <Button
            type="submit"
            size="medium"
            label="Login"
            bgColor="bg-lilac"
            textColor="text-white"
            borderColor="border-lilac"
            disabled={disabled}
          />
        </form>

        <Button
          textColor="text-darkNavy"
          borderColor="border-transparent"
          className="mt-4 mx-auto block cursor-default"
        >
          Don't have an account?{" "}
          <span
            onClick={() => {
              toggleLoginForm();
              toggleRegisterForm();
            }}
            className="underline cursor-pointer"
          >
            Register Here.
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Login;
