import { Envelope, Key, User } from "@phosphor-icons/react";

function RegisterForm() {
  return (
    <div className="grid grid-cols-1 gap-6 md:content-center w-full md:w-2/3 rounded-xl">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Sign Up</h1>
      <label className="input input-bordered flex items-center gap-2">
        <User size={24} />
        <input type="text" className="grow" placeholder="Username" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <Envelope size={24} />
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <Key size={24} />
        <input type="password" className="grow" placeholder="Password" />
      </label>
      <div className="grid grid-cols-1 gap-1">
        <button className="btn btn-primary">Sign up</button>
        <p className="text-sm">
          Already have an account?
          <a href={"/login"} className="text-primary font-semibold">
            {" "}
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
