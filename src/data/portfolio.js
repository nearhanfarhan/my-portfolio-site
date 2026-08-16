export default [
  {
    title: "VinylID",
    images: ["/assets/vinyl-id-1.png", "/assets/vinyl-id-2.png"],
    stack: ["Python", "FastAPI", "Google Cloud Run", "Google Cloud Vision", "Discogs API"],
    links: [
      { type: "Live App", url: "https://vinyl-id-654163070814.us-central1.run.app" },
    ],
    description:
      "A mobile-friendly web app for identifying vinyl records in the field. Point your camera at a cover or label: the app tries the barcode first, falls back to Google Cloud Vision OCR, then searches Discogs by catalogue number or free text. Returns genre, style, year, label, pressing details, community rating, tracklist, and links to Discogs and YouTube. Deployed on Google Cloud Run.",
  },
  {
    title: "Spotify × Discogs Matcher",
    imgUrl: "/assets/discogs-matcher.png",
    stack: ["Python", "Spotify API", "Discogs API", "rapidfuzz"],
    links: [],
    description:
      "A Python script that pulls your Spotify liked songs, crawls a Discogs seller's full vinyl inventory using an adaptive sharding algorithm to work around API pagination limits, and fuzzy-matches artists to surface records you might want to buy. Handles disambiguation suffixes, multi-artist releases, and rate limiting. Outputs results to CSV.",
  },
  {
    title: "SafeTrakr",
    imgUrl: "/assets/safetrakr.png",
    stack: ["React Native", "Expo", "JavaScript", "Firebase"],
    links: [
      { type: "GitHub Repo", url: "https://github.com/nearhanfarhan/safetrakr" },
    ],
    description:
      "SafeTrakr is a React-Native mobile application focused on safety. It tracks the location of its users and provides real-time, automated SMS updates to designated contacts of their departure, transit and arrival. Users can save favourite contacts and destinations to their account for easy access, and providing updates via SMS means that the recipients don't need to have an account to know their loved ones are safe. This app was developed as part of the final full-stack group project at Northcoders.",
  },
  {
    title: "Far-Han-News",
    imgUrl: "/assets/far-han-news.png",
    stack: ["React", "CSS", "JavaScript"],
    links: [
      { type: "GitHub Repo", url: "https://github.com/nearhanfarhan/fe-far-han-news" }, {type: "Live App", url: "https://far-han-news.netlify.app/"}
    ],
    description:
      "Far-Han-News is an interactive, mobile-first, single-page news aggregation webapp I built using React, Node.js and CSS. It includes functional components, context and hooks, and gets its data from the NC News API. This webapp was developed as part of the solo project at Northcoders.",
  },
  {
    title: "NC News API",
    imgUrl: "/assets/news-api.png",
    stack: ["Javascript", "Express"],
    links: [
      { type: "GitHub Repo", url: "https://github.com/nearhanfarhan/be-far-han-news" }, {type: "Live API", url: "https://far-han-news.onrender.com/api"}
    ],
    description:
      "NC News is a backend RESTful API built with Node.js and Express. With multiple endpoints and built-in documentation, the API is capable of reveiving CRUD requests and returning data from its database.",
  },
];
