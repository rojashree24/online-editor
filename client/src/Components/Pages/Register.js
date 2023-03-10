import React,{useState} from 'react'

const Register = () => {
    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("");
  
    const [error,setError]=useState(null)

    const handleSubmit=async(e)=>{
         e.preventDefault();

      const user = { fname,email };

      const response = await fetch('/api/user/register', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          // 'Accept': "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      }

      if (response.ok) {
        setFname("");
        setEmail("");
        setError(null);
        console.log("new user added", json);
        alert("Registered successfully")
        window.location.href = "/login";
         localStorage.setItem("token-info", JSON.stringify(user));
      }

    }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary">
              <a href="/login">Sign in</a>
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
              placeholder="Email Address"
              name={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default Register
