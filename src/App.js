import React, { Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
// import PrivateRoute from "./utils/PrivateRoute";
import Loader from "./components/shared/Loader/index.js";

// import the Navbar
import Navbar from './components/shared/Navbar/index';

import "react-toastify/dist/ReactToastify.css";



const Home = React.lazy(() => import("./pages/Home"));
const Signup = React.lazy(() => import("./components/Home/Header/Signup/Main/SignUp"));
const Login1 = React.lazy(() => import("./components/Home/Header/login/login1/Login1"));
const Login2 = React.lazy(() => import("./components/Home/Header/login/login2/Login2"));
const OTPsent = React.lazy(() => import("./components/Home/Header/Signup/OTPsent/OTPsent"));
const OTPwait = React.lazy(() => import("./components/Home/Header/Signup/OTPwait/OTPwait"));
const SignupOTP = React.lazy(() => import("./components/Home/Header/Signup/OTP/SignupOTP"));
const Student = React.lazy(() => import("./components/Home/Header/form/Student/Student"));
const Merchant = React.lazy(() => import("./components/Home/Header/form/merchant/Merchant"));
const Submit = React.lazy(() => import("./components/Home/Header/submitted/Submit"));
const About = React.lazy(() => import("./pages/About"));
const StudentDashboard = React.lazy(() => import("./pages/studentDashboard"));

const ContactUs = React.lazy(() => import("./pages/contact_us"));
// Importing the Merchant dashboard page: 
const MerchantDash = React.lazy(() => import("./pages/MerchantDash"));
// Importing the Merchant addstudent page: 
const MerchantAddStudents = React.lazy(() => import("./pages/MerchantAddStudents"));
// Importing the Merchant addstudent Completion and go to dashboard page: 
const ContinueToDashboard = React.lazy(() => import("./pages/ContinueToDashboard"));
const Signin = React.lazy(() => import("./pages/signin/signin.js"));


require("dotenv").config();

export const Toastify = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warn(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;
      default:
        toast.info(msg);
        break;
  }
};

function App() {
  toast.configure({ hideProgressBar: true });
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Login1' component={Login1} />
          <Route exact path='/Login2' component={Login2} />
          <Route exact path='/SignupOTP' component={SignupOTP} />
          <Route exact path='/Student' component={Student} />
          <Route exact path='/Merchant' component={Merchant} />
          <Route exact path='/OTPsent' component={OTPsent} />
          <Route exact path='/OTPwait' component={OTPwait} />
          <Route exact path='/Submit' component={Submit} />
          <Route exact path='/studentDashboard' component={StudentDashboard}/>
           <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={ContactUs} />
          <Route exact path='/merchantDashboard' component={MerchantDash} />
          <Route exact path='/MerchantAddStudents' component={MerchantAddStudents} />
          <Route exact path='/ContinueToDashboard' component={ContinueToDashboard} /> 
           <Route exact path='/signin' component={Signin} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;