import React from 'react'
import Image from "next/image";
import illustration from "@/components/images/auto.jpeg"

const FourthFeature = () => {
    return (
        <div className="w-full py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
                    <div className="flex gap-4 flex-col flex-1">
                        <div>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-bold text-left">
                                The Whole Armour, on autopilot
                            </h2>
                            <p className="lg:text-xl text-base max-w-xl lg:max-w-sm leading-snug tracking-tight text-muted-foreground text-left">
                                Nurture your faith journey with tools designed to foster consistency and growth. From sermon reminders to Bible reading trackers, TFA equips you with everything you need to.


                            </p>
                        </div>
                    </div>
                    <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
                    <Image src={illustration} className=" h-full w-full object-cover " alt="illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthFeature
