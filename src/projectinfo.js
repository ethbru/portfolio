import ufo from "./images/ufo.png";
import paintbrush from "./images/paintbrush.jpg";
import kw from "./images/kw.jpg";
import blockchain from "./images/blockchain.jpg";
import dinos from "./images/dinos.jpg";
import etg11 from "./images/slider/etg11.png";
import etg12 from "./images/slider/etg12.png";
import etg13 from "./images/slider/etg13.png";
import etg14 from "./images/slider/etg14.jpg";
import etg15 from "./images/slider/etg15.jpg";
import etg16 from "./images/slider/etg16.png";
import ca1 from "./images/slider/ca1.jpg";
import ca2 from "./images/slider/ca2.jpg";
import ca3 from "./images/slider/ca3.jpg";
import ca4 from "./images/slider/ca4.jpg";
import ca5 from "./images/slider/ca5.jpg";
import kw1 from "./images/slider/kw1.jpg";
import kw2 from "./images/slider/kw2.jpg";
import kw3 from "./images/slider/kw3.jpg";
import kw4 from "./images/slider/kw4.jpg";
import kw5 from "./images/slider/kw5.jpg";
import etm1 from "./images/slider/etm1.jpg";
import etm2 from "./images/slider/etm2.jpg";
import etm3 from "./images/slider/etm3.jpg";
import ac1 from "./images/slider/ac1.jpg";

export const projectinfo = [
  {
    src: ufo,
    slider: [etg11, etg12, etg13, etg14, etg15, etg16],
    link: "https://enterthegateway.netlify.app/",
    gh: "https://github.com/brunokalthoff/etg-1",
    h: "ETG#1: Enter The Gateway",
    pShort: "Virtual art exhibition",
    pLong: <>This virtual art exhibition was online for 28 days in February 2021. It shows some of Bruno’s then-recent artworks and those of 18 friends and artists, most of which he met along his journey as a digital nomad in the Philippines in 2020.<br /><br />While the pandemic kept the world on hold, he was having the fortune of feeling greatly inspired by living on the small pacific island Siargao for a year. Certainly, the inspiration arose from the uncertainty inherent to the special time the world was experiencing, the beauty and rawness of the island, and the simple island life - ultimately amplified by his vivid, intimate social surroundings. ETG#1 was born from this inspiration.<br /><br />The exhibit was to share some of it, to give his very talented friends a humble platform for presenting their artworks. And, nonetheless, to celebrate the beauty of life! Also, this exhibition was thought to be the first of many more to come, one every year. Watch out for the next one!</>,
    tech: ["Vanilla CSS", "React.js", "SSR"]
  },
  {
    src: paintbrush,
    slider: [ca1, ca2, ca3, ca4, ca5],
    link: "https://feedbackpostcards.netlify.app/",
    gh: "https://github.com/brunokalthoff/JS-Art-RootBrush",
    h: "RootBrush",
    pShort: "Artsy digital drawing app",
    pLong: <>This web app lets you make digital artworks with a somewhat funky styled paintbrush. On strokes, the brush draws by animating root growth, randomizing the direction, length and curvature of each root. You can adjust the density, curvature, length, and color of the roots, and the canvas' background color. Check it out and get creative!<br /><br />At this stage, the app is written as a tool to leave feedback to a website - likely it will be integrated into the next ETG-series of online exhibitions. Another idea is to integrate it into an upcoming app called 'Letter to Self' that enables you to write a postcard to yourself and receive it by post at any chosen time in the future.<br /><br />For showcasing, I have attached it to the (now officially offline) ETG#1. It allows you to use the animated brush to draw on a square canvas. You may then hit save, add some text and upload your card to a public dashboard where it will be seen by the other visitors.</>,
    tech: ["Vanilla CSS", "Vanilla JavaScript", "Express.js", "MongoDB"]
  },
  {
    src: kw,
    slider: [kw1, kw2, kw3, kw4, kw5],
    link: "https://kellerwilliams.netlify.app",
    gh: "https://github.com/brunokalthoff/kellerwilliams",
    h: "Keller Williams",
    pShort: "Real estate consultancy franchise website",
    pLong: "The leading Canadian Real Estate Consultancy Keller Williams has opened a new franchise: The Milton Market Center. Here's their website.",
    tech: ["Vanilla CSS", "React.js", "Framer Motion"]
  },
  {
    src: dinos,
    slider: [etm1, etm2, etm3],
    link: "link",
    gh: "link",
    h: "ETG#2: Remember the Mesozoics?",
    pShort: "Virtual Art Exhibition",
    pLong: "Second exhibition of the ETG series. Going online in July 2022",
    tech: ["Tailwind CSS", "Framer Motion", "React.js", "Express.js", "MongoDB", "User Authorization & Autentification", "Encryption & Hashing"]
  },
  {
    src: blockchain,
    slider: [ac1],
    link: "link",
    gh: "link",
    h: "ArtCoin",
    pShort: "Blockchain generating algorithmic artworks",
    pLong: "This Simulation makes it easy understand how a cryptocurrency runs on a decentralized blockchain. It visualy explains pending transactions, mining, node validation, hashing, public and private keys. You can add & remove features and discover how proofing mechanisms, block mining, mining rewards, pending transaction etc. actually work.",
    tech: ["Tailwind CSS", "React.js", "Express.js", "Firebase"]
  },
];
