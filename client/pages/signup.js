import Cookies from "js-cookie";
import { useState } from "react";

const SignUp = () => {
  const [{ email, password }, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({ message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(email && password)) return;

    const res = await fetch("http://localhost:4444/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data?.message) {
      setError({ message: data.message });
    }

    Cookies.set("token", data.token);
  };

  return (
    <div className="w-[400px] flex flex-col mx-auto my-auto bg-slate-700 p-6 ">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <span className="text-white">Авторизация</span>
        <input
          className="text-black"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setInputValue((state) => ({ ...state, email: e.target.value }));
          }}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => {
            setInputValue((state) => ({
              ...state,
              password: e.target.value,
            }));
          }}
        />
        <span className="text-red-200">{error.message}</span>
        <button type="submit" className="text-white">
          Войти
        </button>
        <button className="text-white">Нет аккаунта?</button>
      </form>
    </div>
  );
};
export default SignUp;
