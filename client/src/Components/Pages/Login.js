import React,{useState} from 'react'


const Login = () => {

   const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [error,setError]=useState(null)

    const handleSubmit=async(e)=>{
         e.preventDefault();

      const user = { fname,email };

      const response = await fetch("/user/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      }

      if (response.ok) {
        setFname("")
        setEmail("");
        setError(null);
        console.log("loginned", json);
        window.location.href="/home"
      }
    }
   

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary">
              <a href="/register">Sign up</a>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}


export default Login
