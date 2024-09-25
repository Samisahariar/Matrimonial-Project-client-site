import { useAnimate } from "framer-motion";
import { useContext,} from "react";
import { motion } from "framer-motion";

import "../../App.css"
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthInformation";
//accernity ui all the code is here
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/moving-border";
import { FlipWords } from "@/components/ui/flip-words";


const BackgroundBeams = () => {

    const authinfo = useContext(AuthContext);
    const [scope, animate] = useAnimate();
    const words = ["Perfect", "Pristine", "Ideal", "Impeccable"]


    return (
        <div className="relative">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Find Your<span style={{color : "red"}}><FlipWords words={words} /></span> Partner, <br /> With Us.
                </h2>
                <Link to="main/home">

                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Start The Journey
                    </Button>

                </Link>

            </BackgroundLines>
        </div>
    );
};




export default BackgroundBeams;