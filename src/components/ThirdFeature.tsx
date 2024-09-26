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
                                On the Pulse, On the Go
                            </h2>
                            <p className="lg:text-lg text-base max-w-xl flex flex-col  lg:max-w-sm leading-relaxed space-y-4 tracking-tight text-muted-foreground text-left">
                                Keep your congregation close, no matter the distance. Monitor progress, identify struggles, celebrate milestones, and send encouraging messages—all from one blessed dashboard.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdFeature
