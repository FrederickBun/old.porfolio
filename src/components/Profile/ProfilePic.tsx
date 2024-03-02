import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsSmall } from '@/hooks/useMediaQuery'



export default function ProfilePic() {
    const picDragConstraints = useIsSmall() ? {
        top: -8,
        left: -8,
        right: 8,
        bottom: 8,
    } : {
        top:0,
        left:0,
        right:0,
        bottom:0,
    };
    
  return (
    <motion.div 
        drag
            dragConstraints={picDragConstraints}
        variants={{
            offscreen: {
                opacity: 0,
                x: -100,
            },
            onscreen: {
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    duration: 0.1,
                },
            },
        }}
    className='h-1/3 sm:h-full w-full sm:w-auto bg-gray-50 border border-black/5 flex justify-center items-center p-5 shadow-sm cursor-grab'>
        <div 
        className="relative h-full w-full sm:w-80">
            <Image src='/profile.png' fill alt="Profile Picture" className='object-cover pointer-events-none sm:object-center object-bottom'/>
        </div>
        
    </motion.div>
  )
}
