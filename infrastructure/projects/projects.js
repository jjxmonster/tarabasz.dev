export const projectsList = {
   personal: [
      {
         title: 'TypeScript Firebase Todo',
         technologies: ['react', 'typescript', 'firebase', 'redux'],
         description:
            'A Todo App using Typescript, React, Redux and Realtime updates with Cloud Firestore.',
         longDescription: `A Todo App using Typescript, React and Redux state managment. Authentication and database is powered by Firebase. Thanks for Realtime update from Cloud Firestore user can see updates immediately.`,
         images: ['/img/todo-1.png', '/img/todo-2.png'],
         github: 'https://github.com/jjxmonster/typescript-firebase-todo',
         live: 'https://todo-ts-firebase.netlify.app/',
      },
      {
         title: 'Meals To Go',
         technologies: [
            'react-native',
            'firebase',
            'expo',
            'styled-components',
         ],
         description: 'React Native App with restaurants',
         longDescription: `React Native App with restaurants, user can search for city and get restaurants from this specific area, also user can open map
         and take a look on the location of individual restaurants. User can login or register using Firebase Auth.
         `,
         images: [
            '/img/meals-1.png',
            '/img/meals-2.png',
            '/img/meals-3.png',
            '/img/meals-4.png',
         ],
         github: 'https://github.com/jjxmonster/react-native-meals-app',
         live: null,
      },
      {
         title: 'Movie Library',
         technologies: ['react', 'redux', 'react-query', 'styled-components'],
         description:
            'A Movie Library made with React using The Movie Database API',
         longDescription: `Users can choose their favourite movie genre and see movies matching to that. Users also can choose type of sorting
            movies like popularity, relase data, votes average and title. After click on some movie, user will able to see more
            information about it, like description, duration and links to movie website and watch trailer`,
         images: [
            '/img/movie-1.png',
            '/img/movie-2.png',
            '/img/movie-3.png',
            '/img/movie-4.png',
         ],
         github: 'https://github.com/jjxmonster/movie-library',
         live: 'https://movie-library-react.herokuapp.com/home',
      },
   ],
   comercial: [
      {
         title: 'Finseka Platform',
         technologies: [
            'react',
            'redux',
            'graphql',
            'node',
            'firebase',
            'express',
         ],
         description:
            'Platform to efficiently guide you through the mortgage process',
         longDescription:
            'The platform is a sophisticated but easy to use tool. State managment using Redux and connecting with backend using graphql.  Most of the time I work as frontend developer, my assignments is to implement new features and improve existing things, often I have to create something on backend like graphql function or filtering on mongodb',
         images: [
            '/img/platform-1.png',
            '/img/platform-2.png',
            '/img/platform-3.png',
            '/img/platform-4.png',
         ],
         github: null,
         live: 'https://finseka.ai/',
      },
      {
         title: 'Finseka.pl',
         technologies: ['next.js', 'firebase', 'graphcms', 'mui', 'gsap'],
         description: 'Website about Finseka, mortgage company from Poland',
         longDescription: `Finseka's website is build with next.js, UI is powered by material ui and animations is build using gsap. Also on website we can see blog powered graphcms, very simple to use CMS based on graphql.`,
         images: [
            '/img/finseka-1.png',
            '/img/finseka-2.png',
            '/img/finseka-3.png',
            '/img/finseka-4.png',
         ],
         github: null,
         live: 'https://finseka.pl',
      },
   ],
};
