"use client";

import { Icon } from "@iconify-icon/react";
import { ChangeEvent, SetStateAction } from "react";

interface FieldProps {
  id: string;
  icon: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  dataStateSetter: React.Dispatch<SetStateAction<AuthFields | LoginData>>;
}

export default function FormField({
  id,
  icon,
  type,
  name,
  value,
  placeholder,
  dataStateSetter,
}: FieldProps) {
  // onChangeHandler
  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    dataStateSetter((fieldValues) => ({
      ...fieldValues,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <fieldset className="relative flex items-center gap-x-3 text-tertiary py-3 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-tertiary ">
      <label htmlFor={id} className="inline-flex text-main-fs">
        <Icon icon={icon} />
      </label>
      <input
        minLength={type === "password" ? 6 : 0}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleFieldChange}
        required
        className="outline-none border-none bg-transparent text-secondary font-semibold placeholder:text-tertiary placeholder:font-normal"
      />
    </fieldset>
  );
}
