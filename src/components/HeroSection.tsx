"use client"
import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import illustration from "@/components/images/showcase1.jpeg"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import Image from "next/image";

export const HeroSection = () => {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["Sheeps", "flock", "Disciples"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="w-full h-full ">
            <div className="container mx-auto">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center text-center lg:text-lg flex-col">
                    <div>
                        <p>We Rescue Church Leaders from Annoying and Repetitious Activities

                        </p>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-extrabold">
                            <span className="text-spektr-cyan-50">Monitor and Report the Spiritual Growth
                                of Your </span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute text-primary font-semibold"
                                        initial={{ opacity: 0, y: "-100" }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                                : {
                                                    y: titleNumber > index ? -150 : 150,
                                                    opacity: 0,
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl md:text-xl leading-snug-tight text-muted-foreground max-w-2xl text-center">
                            *No Spreadsheet or Stressful Screenshot Required

                        </p>
                    </div>



                    <Image src={illustration} className=" w-[100%] " alt="illustration" />


                    <div className="flex w-full max-w-sm lg:text-lg items-center  space-x-2">
                        <Input type="email"  className="lg:text-lg"   placeholder="Email" />
                        <Button type="submit" className="lg:text-lg  "  >Download Now</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};
