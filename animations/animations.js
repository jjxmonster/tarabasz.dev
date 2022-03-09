import gsap from 'gsap';

export const animationsMount = (containerClassName, delay = 0) => {
   const container = document.querySelector(containerClassName);

   container.childNodes.forEach(box => {
      gsap.fromTo(
         box,
         { y: '-=100', scale: 1.1, opacity: 0 },
         {
            y: 0,
            opacity: 1,
            scale: 1,
            delay,
            stagger: 0.2,
            duration: 0.5,
            ease: 'easeInOut',
         }
      );
   });
};

export const animationsUnMount = containerClassName => {
   const container = document.querySelector(containerClassName);

   container.childNodes.forEach(box => {
      gsap.to(box, {
         y: '-=100',
         opacity: 0,
         stagger: 0.2,
         duration: 0.5,
         ease: 'easeInOut',
      });
   });
};
