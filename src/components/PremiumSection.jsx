import React from 'react';
import useAxiousSecure from '../hooks/useAxiousSecure';
import { data } from 'autoprefixer';
import { useQuery } from '@tanstack/react-query';
import useAxiosusPublic from '../hooks/useAxiosusPublic';
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants"
import useScrollOpacity from '@/hooks/useScrollOpacity';
import PremiunSectionCard from './PremiumSectionCard';

const PremiumSection = () => {
    const [opacity, componentRef] = useScrollOpacity();
    const axiousPublic = useAxiosusPublic()
    const { data: premiumMembers, isPending: fetching } = useQuery({
        queryKey: ["premiumMembers"],
        queryFn: async () => {
            
            const result = await axiousPublic.get("/users/premium");
            return result.data
        }
    })

    return (
        <div >
            <motion.h3
                variants={fadeIn("up", 0.3, opacity)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                style={{opacity: opacity}}
                className='mt-[10%] text-6xl playfair-font text-center'>Premium <span className="text-[#EE4266]">Members</span></motion.h3>
            <div className='mx-auto grid-cols-2 grid w-[100%] gap-6'>
                {
                    premiumMembers?.map((singledata, idx) => <PremiunSectionCard singledata={singledata} number={idx}></PremiunSectionCard>)
                }
            </div>
        </div>
    );
};

export default PremiumSection;