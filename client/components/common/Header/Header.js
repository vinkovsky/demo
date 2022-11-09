import Link from "next/link";

const Header = () => {
  return (
    <div className="text-2xl text-white font-bold p-4 flex mx-auto w-full bg-gray-700">
      <div className="flex flex-1">Logo</div>
      <ul className="flex gap-5">
        <Link href="./registration">
          <li>Войти</li>
        </Link>
        <li>Зарегистрироваться</li>
      </ul>
    </div>
  );
};
export default Header;
