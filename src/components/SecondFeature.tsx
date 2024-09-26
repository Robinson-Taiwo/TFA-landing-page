import React from 'react'
import Image from "next/image";
import illustration from "@/components/images/tf.jpeg"


const SecondFeature = () => {
    return (
        <div className="w-full py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
                    <div className="flex gap-4 flex-col flex-1">
                        <div>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
                                Progress Tracking
                                Without hassles                            </h2>
                            <p className="lg:text-lg text-base max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                                From sermons and prayers to evangelical follow-up and fasting, track your spiritual journey effortlessly.
                                TFA makes it a joy to log and reflect on your activities, turning devotion into delightful progress.
                            </p>
                        </div>
                    </div>
                    <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">                 <Image src={illustration} className=" h-full w-full object-cover " alt="illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondFeature
