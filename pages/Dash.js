/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import 'animate.css';
import Cloudflare from "./components/Cloudflare";

const Dash = (props) => { 
    return (
        <div className="dash">
            <div className="dash-header animate__animated animate__fadeInDown animate__slower">
                <img className="mizzy-logo" src="/MizzyLogoNew.png" alt="Mizzy Logo" />
                <h1>MizzyOps<br/>Command Center</h1>
            </div>
            <div className="dash-body">
                <div className="dash-body-left animate__animated animate__fadeInLeft animate__slower">
                    <div className="dash-section">
                        <h2>CloudFlare</h2>
                        <Cloudflare />
                    </div>
                </div>
                <div className="dash-body-right animate__animated animate__fadeInRight animate__slower">
                    <div className="dash-section">
                        <h2>AWS</h2>
                        <p>Coming Soon</p>
                    </div>
                </div>
                <div className="dash-body-left animate__animated animate__fadeInLeft animate__slower">
                    <div className="dash-section">
                        <h2>Local Server</h2>
                        <p>Coming Soon</p>
                    </div>
                </div>
                <div className="dash-body-right animate__animated animate__fadeInRight animate__slower">
                    <div className="dash-section">
                        <h2>Status Alerts</h2>
                        <p>Coming Soon</p>
                    </div>
                </div>
            </div>
            
            <a className="btn dash-header animate__animated animate__fadeInUp animate__slower" href="/api/auth/logout">Logout</a>
        </div>
    )
}

export default Dash;