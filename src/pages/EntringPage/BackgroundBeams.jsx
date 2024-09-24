import { useAnimate } from "framer-motion";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import "../../App.css"
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthInformation";


const DefaultQoutes = () => {

    return (
        <motion.div
            initial={{
                opacity: 0,
                
            }}
            animate={{
                opacity: 1,
              

            }}
            transition={{ duration: 3 }}
            className="absolute top-[20%] left-[10%] text-center glass-background p-10 font-semibold">
            <h3 className=" text-6xl font-semibold text-white">Find Your Perfect Match and Create a <br /> Lifetime of <span className="text-red-500">Memories</span> .</h3>
            <Link to="/main/home">
                <button className="cart-icon p-4 rounded-2xl text-nowrap mx-auto">Start The Journey</button>
            </Link>
        </motion.div>
    )
}


const BackgroundBeams = () => {

    const authinfo = useContext(AuthContext);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate()
    }, [])


    return (
        <div className="relative">
            <img src="https://i.ibb.co/1QmG03x/pexels-orlovamaria-4916467.jpg" className="bg-center h-[100vh] w-full" />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
            >
            </motion.div>
            <div className="absolute top-0 right-1 flex gap-2">
                <Link to="main/login">
                    <button className="cart-icon w-[100px] font-semibold rounded-2xl px-10 text-nowrap">LOG-IN</button>

                </Link>
                <button className="cart-icon w-[100px] font-semibold rounded-2xl px-10 text-nowrap">SIGN-UP</button>
            </div>
            <div className="absolute top-2 left-4">
                <ul className="siteName-lists">
                    <li className="site-namenav1">M</li>
                    <li className="site-namenav2">U</li>
                    <li className="site-namenav3">S</li>
                    <li className="site-namenav4">L</li>
                    <li className="site-namenav5">I</li>
                    <li className="site-namenav6">M</li>
                    <li className="site-namenav7">A</li>
                </ul>
            </div>
            <DefaultQoutes></DefaultQoutes>
        </div>
    );
};




export default BackgroundBeams;