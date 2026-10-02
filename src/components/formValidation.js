export const mobileFieldProps = {
  type: "tel",
  inputMode: "numeric",
  autoComplete: "tel",
  required: true,
  minLength: 10,
  maxLength: 10,
  pattern: "[6-9][0-9]{9}",
  title: "Enter a valid 10-digit Indian mobile number",
  placeholder: "10-digit mobile number",
  onInput: (event) => {
    event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 10);
  },
};

export const pincodeFieldProps = {
  inputMode: "numeric",
  autoComplete: "postal-code",
  required: true,
  minLength: 6,
  maxLength: 6,
  pattern: "[1-9][0-9]{5}",
  title: "Enter a valid 6-digit Indian PIN code",
  placeholder: "6-digit pincode",
  onInput: (event) => {
    event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 6);
  },
};
