import { login, signup } from "../actions";
import FormField from "./FormField";

type FormType = {
  authLogin: boolean;
  children?: React.ReactNode;
};

export default function Form(props: FormType) {
  const { authLogin, children } = props;
  return (
    <form className="flex flex-col gap-y-4">
      {!authLogin && (
        <div className="grid grid-cols-2 gap-x-3">
          <FormField
            id="first_name"
            type="text"
            icon="bxs:user"
            name="first_name"
            placeholder="First Name"
          />
          <FormField
            id="last_name"
            type="text"
            icon="bxs:user"
            name="last_name"
            placeholder="Last Name"
          />
        </div>
      )}
      <FormField
        id="email"
        type="email"
        icon="tabler:mail-filled"
        name="email"
        placeholder="Email"
      />
      <FormField
        id="password"
        type="password"
        name="password"
        icon="mingcute:lock-fill"
        placeholder="Enter Password"
      />

      {children}
      <button
        formAction={authLogin ? login : signup}
        className="bg-secondary self-center text-primary px-12 py-3 rounded-full font-semibold outline outline-2 outline-offset-1 outline-secondary scale-[.85] hover:scale-100 active:scale-[.85] transition-all duration-fast ease-in-out mt-4 hover:shadow-custom-shadow will-change-transform"
      >
        {authLogin ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}
