import { useState } from "react";


export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="main-Login">
        <h2 className="title">Login IN :)</h2>

        <div className="teacher-sign-in">
            <form className="teacher-form" onSubmit={(e)=>{
              e.preventDefault();
            }}>
                <label htmlFor="email">Email or Username : </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                />

                <label htmlFor="password">Password : </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <p className="forget-pass">Forgot Password</p>

              <button className="teacher-sign-in-button">Sign In</button>
            </form>

            <form className="student-form" onSubmit={(e)=>{
              e.preventDefault()
            }}>
              <button className="student-sign-in-button">Sign In as Student</button>
            </form>

            <p className="terms">terms and conditionss and privacy policy</p>
        </div>
      </div>
    </>
  );
}
