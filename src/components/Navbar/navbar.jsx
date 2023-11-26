import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../Sidebar/sidebar"

const Navbar = () => {
    return (
        <div className="navbar">
            
            {/* sidebar */}
            <Sidebar/>
            <div className="wrapper">
                {/* <Logo></Logo> */}
                <motion.span 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:1}}>Piyush Jain</motion.span>
                {/* Social icons */}
                <div className="social">
                    <a href="#"><img src="/linkedIn_PNG24.png" alt="" className="linkdin" /></a>
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/github3.png" alt="" className="github" /></a> 
                    {/* {/* <a href="#"><img src="/linkedIn_PNG24.png" alt="" /></a> */}
                </div>
            </div>
        
        
        </div>
    )
}

export default Navbar