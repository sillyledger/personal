export type Photo = {
  src: string;
  alt: string;
  caption: string;
};

// Add a new photo by dropping the file in /public and adding one entry here.
export const photos: Photo[] = [
  {
    src: "/pieter-borremans-living-in-taiwan.jpeg",
    alt: "Pieter Borremans, founder of Ryoka, living in Taichung, Taiwan",
    caption: "Where it all starts.",
  },
  {
    src: "/pieter-borremans-taichung-coffee-shop.jpeg",
    alt: "Pieter Borremans, mirror photo, dark tones",
    caption: "My favorite dark mirror shot, no filter",
  },
  {
    src: "/pieter-borremans-in-taiwan-dark-grey-mirror-shot.jpeg",
    alt: "Pieter Borremans, mirror shot, Taiwan",
    caption: "Mirror shot, no filter",
  },
  {
    src: "/pieter-borremans-poker-night-taipei.jpeg",
    alt: "Pieter Borremans playing at the Asian Poker Tour, Taipei",
    caption: "Asian Poker Tour Taipei",
  },
];
