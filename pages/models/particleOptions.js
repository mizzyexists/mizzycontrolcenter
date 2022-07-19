export const particleOptions = {
    fpsLimit: 40,
    fullscreen:{
        enable:true,
        zIndex:0,
    },
    style: {
        position: "absolute"
    },
    particles: {
        number: {
            value: 70,
            density: {
                enable: false,
                area: 800,
            },
        },
        links: {
            distance: 50,
            enable: true,
            color: {
                value: ["#452DBA", "#452DBA50", "#452DBAa4", "#452DBAd1", "#7B72DF"]
            }
        },
        color: {
            value: ["#452DBA", "#452DBA50", "#452DBAa4", "#452DBAd1", "#7B72DF"],
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 3,
            random: true,
        },
        move: {
            enable: true,
            speed: 1,
            random: false,
        },
    },
    interactivity: {
        onClick:{
            enable: true,
            mode: "repulse"
        },
        events: {
            resize: true,
        },
    },
    background: {
        image: "radial-gradient(rgb(0, 0, 0),rgb(0, 0, 0))",
    },
};