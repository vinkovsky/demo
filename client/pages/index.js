import Hero from "@/views/Hero";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");

      const res = await fetch("http://localhost:4444/auth/me", {
        headers: {
          authorization: "Bearer" + token,
        },
      });
      const data = await res.json();
      console.log(data);

      // const res = await fetch("http://localhost:4444/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: "test1@test.ru",
      //     password: "123456",
      //   }),
      // });

      // const data = await res.json();

      // console.log(data.token);
      // Cookies.set("token", data.token);
    };

    fetchData();
  }, []);
  return (
    <>
      <Hero />
    </>
  );
}
