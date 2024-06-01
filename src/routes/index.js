import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Private = ({ Item }) => {
    const signin = false;

    return signin > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home} />} />
                <Route path="/" element={<Signup />} />
                <Route exact path="/Signin" element={<Private Item={Signin} />} />
                <Route path="*" element={<Signup />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;

