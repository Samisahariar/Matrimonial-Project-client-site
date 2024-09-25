import { useAnimate } from "framer-motion";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import "../../App.css"
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthInformation";
//accernity ui all the code is here
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/moving-border";


const BackgroundBeams = () => {

    const authinfo = useContext(AuthContext);
    const [scope, animate] = useAnimate();


    return (
        <div className="relative">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Sanjana Airlines, <br /> Sajana Textiles.
                </h2>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Borders are cool
                </Button>

            </BackgroundLines>
        </div>
    );
};




export default BackgroundBeams;