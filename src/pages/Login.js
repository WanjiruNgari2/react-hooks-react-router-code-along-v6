import Navbar from "../components/navbar";


function Login() {
 return (
<>
     
     <header>
        {/*navbar space */}
     </header>
     <main>
            <h1> Login</h1>
            <form>
                <div>
                    <label for = "username">Username:</label>
                <input id="username" type="text" name="username" placeholder="username" />
                </div>
                <br />
                <div>
                    <label for = "password"> Password:</label>
                    <input id="password" type="password" name="password" placeholder="password" />
                </div>
                <br />
                <button type="submit">submit</button>
            </form>

     </main>

</>

 );

};

export default Login;