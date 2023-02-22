import axios from "axios";
import {useState} from "react";
import {toast} from "react-toastify";
import CookieService from "../../services/CookieService";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  /* ------- HANDLER -------  */
  const onChangeHandler = (e) => {
    const {name, value} = e.target;

    setUser({...user, [name]: value});
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(user);
    // ** username: 'kminchelle',
    // ** password: '0lelplR',
    axios
      .post("https://dummyjson.com/auth/login", user, {
        headers: {"Content-Type": "application/json"},
      })
      .then((res) => {
        toast.success("Logged in Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        const IN_Days = 5;
        const expireInDays = 1000 * 60 * 60 * 24 * IN_Days;
        const date = new Date();
        date.setTime(date.getTime() + expireInDays);
        const options = {path: "/", expires: date};
        CookieService.set("user_token", res.data.token, options);
        setTimeout(() => window.location.reload(), 850);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name={"username"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
          value={user.username}
          onChange={onChangeHandler}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name={"password"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={user.password}
          onChange={onChangeHandler}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default LoginPage;
