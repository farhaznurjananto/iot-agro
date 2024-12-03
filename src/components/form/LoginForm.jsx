import { Envelope, Key } from "@phosphor-icons/react";

function LoginForm() {
  return (
    <div className="grid grid-cols-1 gap-6 md:content-center w-full md:w-2/3 rounded-xl">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Log in</h1>
      <label className="input input-bordered flex items-center gap-2">
        <Envelope size={24} />
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <Key size={24} />
        <input type="password" className="grow" placeholder="Password" />
      </label>
      <div className="grid grid-cols-1 gap-1">
        <button className="btn btn-primary">Log in</button>
        <p className="text-sm">
          Don&apos;t have an account?
          <a href="/register" className="text-primary font-semibold">
            {" "}
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
