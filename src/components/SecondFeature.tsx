import React from 'react'
import Image from "next/image";
import illustration from "@/components/images/tf.jpeg"


const SecondFeature = () => {
    return (
        <div className="w-full py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
                    <div className="flexflex-col flex-1">
                        <div>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-bold text-left">
                                Progress Tracking
                                Without hassles                            </h2>
                            <p className="lg:text-xl text-base max-w-xl lg:max-w-sm leading-snug tracking-tight text-muted-foreground text-left">
                                From sermons and prayers to evangelical follow-up and fasting, track your spiritual journey effortlessly.
                                TFA makes it a joy to log and reflect on your activities, turning devotion into delightful progress.
                            </p>
                        </div>
                    </div>
                    <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">  <Image src={illustration} className="object-cover w-full h-full" alt="illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondFeature
