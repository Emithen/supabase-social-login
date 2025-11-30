import supabase from "../supabase";

const Login = () => {
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:5173/login",
      },
    });
    console.log(data, error);
  };

  return (
    <>
      <div className="text-blue-500 text-2xl">Login</div>
      <div className="text-green-500">Welcome to the Login Page!</div>

      <button className="cursor-pointer bg-gray-800 text-white rounded-xl px-3 py-1 flex items-center justify-center" onClick={signInWithGithub}>Login With Github!</button>
    </>
  );
};

export default Login;
