"use client";

interface FieldProps {
  id: string;
  icon?: string;
  type: string;
  name: string;
  placeholder: string;
}

export default function FormField({
  id,
  type,
  name,

  placeholder,
}: FieldProps) {
  return (
    <fieldset className="relative flex items-center gap-x-3 text-tertiary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-tertiary after:hidden">
      <input
        minLength={type === "password" ? 6 : 0}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required
        className="outline outline-2 outline-secondary/25 py-2 px-4 border-none bg-transparent text-secondary font-semibold placeholder:text-sm placeholder:font-normal placeholder:text-secondary/55 w-full rounded-md focus-within:placeholder:text-secondary/35 focus-within:outline-secondary/65 transition-all duration-fast ease-in-out"
      />
    </fieldset>
  );
}
