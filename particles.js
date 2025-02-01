tsParticles.load("particles-js", {
    particles: {
        number: { value: 50 },
        move: { enable: true, speed: 2.2 },
        size: { value: 3 },
        links: { enable: true, distance: 100 },
        color: { value: "#ffffff" }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 150 },
            push: { quantity: 4 }
        }
    }
}).then(() => {
    console.log("tsParticles 加載成功");
}).catch((error) => {
    console.error("tsParticles 加載失敗:", error);
});
