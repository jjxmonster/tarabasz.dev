import gsap from 'gsap';

export const projectsAnimationsMount = () => {
   const projectPageontainer = document.querySelector('.projects-container');

   projectPageontainer.childNodes.forEach(box => {
      gsap.fromTo(
         box,
         { y: '-=100', scale: 1.1, opacity: 0 },
         {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.2,
            duration: 0.5,
            ease: 'easeInOut',
         }
      );
   });
};
export const projectsAnimationsUnMount = () => {
   const projectPageontainer = document.querySelector('.projects-container');

   projectPageontainer.childNodes.forEach(box => {
      gsap.to(box, {
         y: '-=100',
         opacity: 0,
         stagger: 0.2,
         duration: 0.5,
         ease: 'easeInOut',
      });
   });
};

export const projectContainerAnimations = () => {
   const projectContainer = document.querySelector('.project-container');

   projectContainer.childNodes.forEach(box => {
      gsap.fromTo(
         box,
         { y: '-=100', scale: 1.1, opacity: 0 },
         {
            y: 0,
            delay: 0.5,
            opacity: 1,
            scale: 1,
            stagger: 0.2,
            duration: 0.5,
            ease: 'easeInOut',
         }
      );
   });
};
