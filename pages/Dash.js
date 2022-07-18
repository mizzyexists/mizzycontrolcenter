/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import 'animate.css';

const Dash = (props) => { 
    return (
        <div className="dash">
            <div className="dash-header animate__animated animate__fadeInDown animate__slower">
                <img className="mizzy-logo" src="/MizzyLogoNew.png" alt="Mizzy Logo" />
                <h1>MizzyOps<br/>Command Center</h1>
            </div>
            <div className="dash-body">
                <div className="dash-body-left animate__animated animate__fadeInLeft animate__slower">
                </div>
                <div className="dash-body-right animate__animated animate__fadeInRight animate__slower">
                </div>
            </div>
            <a className="btn dash-header animate__animated animate__fadeInUp animate__slower" href="/api/auth/logout">Logout</a>
        </div>
    )
}

export default Dash;