export type FormData = {
  email: string;
  lastName: string;
  username: string;
  password: string;
  firstName: string;
  confirmPassword: string;
};

type FieldRule = {
  label: string;
  required: boolean;
  minLength?: number;
  matchField?: keyof FormData;
  custom?: (value: string, fields?: FormData) => string | null;
};

export type FormValidationSchema = Record<keyof FormData, FieldRule>;

export type FormErrors = {
  [key in keyof FormData]?: string;
};

/**
 * A utility function to validate form data against a given validation schema.
 * Supports per-field validation or full-form validation. Handles required fields,
 * minimum length, field matching (like confirm password), and custom validation functions.
 *
 * @param {FormData} fields - An object containing the current form field values.
 *   Example:
 *     {
 *       firstName: "John",
 *       lastName: "Doe",
 *       username: "johndoe",
 *       email: "john@example.com",
 *       password: "secret123",
 *       confirmPassword: "secret123"
 *     }
 *
 * @param {FormValidationSchema} schema - An object defining validation rules for each field.
 *   Each rule can have:
 *     - required: boolean (field must not be empty)
 *     - minLength?: number (minimum number of characters)
 *     - matchField?: keyof FormData (the field to match, e.g., confirm password)
 *     - custom?: (value: string, fields?: FormData) => string | null (custom validation function)
 *     - label: string (user-friendly name for error messages)
 *   Example:
 *     {
 *       firstName: { required: true, minLength: 2, label: "First Name" },
 *       confirmPassword: { required: true, matchField: "password", label: "Confirm Password" }
 *     }
 *
 * @param {keyof FormData} [fieldName] - Optional. If provided, only this field is validated.
 *   If omitted, all fields in the schema are validated.
 *
 * @returns {FormErrors} - An object mapping field names to error messages.
 *   Only fields that fail validation will be included.
 *   Example:
 *     {
 *       firstName: "First Name is required",
 *       confirmPassword: "Passwords do not match"
 *     }
 *
 * @remarks
 * - This function is designed to work with React forms, storing errors in a state object.
 * - Supports live per-field validation (pass fieldName) or full-form validation (omit fieldName).
 * - For async validations (e.g., checking if a username exists), combine this with a separate async check.
 */
export const validateForm = (
  fields: Partial<FormData>,
  schema: Partial<FormValidationSchema>,
  fieldName?: keyof Partial<FormData>,
): FormErrors => {
  const errors: FormErrors = {};

  const keysToValidate = fieldName
    ? [fieldName]
    : (Object.keys(schema) as (keyof FormData)[]);

  keysToValidate.forEach((key) => {
    const value = fields[key] || "";
    const rules = schema[key];

    if (!rules) return;

    const label = rules.label;

    if (rules.required && !value.trim()) {
      errors[key] = `${label} is required`;
      return;
    }

    if (rules.minLength && value.length < rules.minLength) {
      errors[key] = `${label} must be at least ${rules.minLength} characters`;
      return;
    }

    if (rules.matchField && value !== fields[rules.matchField]) {
      errors[key] = "Passwords do not match.";
      return;
    }

    if (rules.custom) {
      const customError = rules.custom(value, fields as FormData);
      if (customError) errors[key] = customError;
    }
  });

  return errors;
};
