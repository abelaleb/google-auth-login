import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decode = jwtDecode(`${credentialResponse?.credential}`);

          console.log(decode);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
    </div>
  );
}

export default App;
