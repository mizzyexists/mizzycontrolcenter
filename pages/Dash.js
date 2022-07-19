/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from 'next/head'
import 'animate.css';
import Cloudflare from "./components/Cloudflare";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particleOptions } from "./models/particleOptions";


const Dash = (props) => {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        
    };

    return (
        <div className="dash">
            <Head>
                <title>Morpheus - Dashboard</title>
            </Head>
            <Particles 
                id="tsparticles"
                className="animate__animated animate__fadeIn animate__slower"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particleOptions}
            />
            <div className="dash-header">
                <img className="mizzy-logo animate__animated animate__fadeInDown animate__slower" src="/MizzyLogoNew.png" alt="Mizzy Logo" />
                <h1 className="logo-text animate__animated animate__fadeInRight animate__slower">Morpheus</h1>
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

            <a className="btn animate__animated animate__fadeInUp animate__slower" href="/api/auth/logout">Logout</a>
        </div>
    )
}

export default Dash;