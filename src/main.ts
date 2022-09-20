import './style.css';
const confetti = require('canvas-confetti');
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {fetchAndActivate, getRemoteConfig, getValue} from 'firebase/remote-config';

const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyACACC3OqR3vch3_usClwWB0a_18HtRzjM',
    authDomain: 'ist-euer-kind-schon-da.firebaseapp.com',
    projectId: 'ist-euer-kind-schon-da',
    storageBucket: 'ist-euer-kind-schon-da.appspot.com',
    messagingSenderId: '224820046496',
    appId: '1:224820046496:web:784f8d0fbe9b35490eb7c5',
    measurementId: 'G-L6EYV8GD8V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const remoteConfig = getRemoteConfig(app);

remoteConfig.settings.minimumFetchIntervalMillis = 3600;
remoteConfig.defaultConfig = {
    child_born: false,
    born_at: '',
};

document.documentElement.style.setProperty('--main-bg-color', randomColor);

let header = 'NEIN';
let date = '';

fetchAndActivate(remoteConfig)
    .then(() => {
        const childBorn = getValue(remoteConfig, 'child_born');

        if (childBorn.asBoolean() == true) {
            const bornAt = getValue(remoteConfig, 'born_at');
            date = bornAt.asString();
            header = 'JA';
            showConfetti();
            changeTitle();
        }
    })
    .catch((err) => {
        console.log(err);
    });

changeTitle();

function changeTitle() {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${header}<h1>
`;
    if (date != '') {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML += `
  <div>
    <h2>Geboren am ${date}<h2>
  </div>
`;
    }
    document.querySelector<HTMLDivElement>('#app')!.innerHTML += `
  </div>
`;
}

function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function showConfetti() {
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: {y: 0.6},
    });
}
