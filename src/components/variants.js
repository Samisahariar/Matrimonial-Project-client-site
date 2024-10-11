export const fadeIn = (direction, delay, opacity) => {
    return {
        hidden: {
            y : direction === 'up' ? 40 : direction === 'down' ? -40 : 0 ,
            x : direction === 'left' ? 40 : direction === 'right' ? -40 : 0 ,
            opacity : 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: opacity,
            transition:{
                type: "tween",
                duration: 2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }

        }
    }
}

