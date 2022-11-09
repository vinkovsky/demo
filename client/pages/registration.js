import { useAuth } from "components/providers/authProvider";
import { AuthService } from "components/servecis/authService";
import { useState } from "react";
import { useMutation } from "react-query";

const registration = () => {
  const [data, setData] = useState({});

  const { setUser } = useAuth();

  const { mutateAsync: loginAsync } = useMutation(
    "login",
    () => AuthService.login(data.email, data.password),
    {
      onError: (err) => {
        alert("err");
      },
      onSuccess: ({ user }) => {
        setUser(user);
      },
    }
  );
  const isAuthType = type === "login";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAuthType) loginAsync();
    // else регистр асинкс вынести еще юз мутатион
  };

   const res = await fetch("http://localhost:4444/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: {data.email},
          password: {data.password},
        }),
      });

      const data = await res.json();

      console.log(data.token);
      Cookies.set("token", data.token);
  return (
    <div className="w-[400px] flex flex-col mx-auto my-auto bg-slate-700 text-white p-6 ">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <span>Авторизация</span>
        <input
          className="text-black"
          placeholder="email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <input
          placeholder="password"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <button type="submit">Войти</button>
        <button>Нет аккаунта?</button>
      </form>
    </div>
  );
};
export default registration;
