import React from 'react'

const ThirdFeature = () => {
    return (
        <div className="w-full py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
                    <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
                    <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
                        <div>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-xl md:text-3xl  tracking-tighter lg:max-w-xl font-regular text-left">
                                Behold we give you a new way...
                            </h2>
                            <p className="lg:text-lg text-base max-w-xl flex flex-col  lg:max-w-sm leading-relaxed space-y-4 tracking-tight text-muted-foreground text-left">
                                Effortlessly monitor your spiritual journey, from sermons and prayers to evangelical follow-ups and fasting. TFA transforms logging and reflecting on your activities into a joyful, stress-free experience. Share your progress streaks with friends and inspire others on their spiritual journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdFeature
