import Login from "./login-registration";

function auth() {
  return (
    <div className="bg-[#3671D9] w-screen h-screen flex items-center justify-center">
        <div className='flex items-center justify-center'>
            <Login.Login />
        </div>
    </div>
  )
}

export default auth