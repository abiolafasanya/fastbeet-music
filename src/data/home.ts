const services = [
  {
    id: 1,
    title: "Private Lessons",
    description: "One-on-one sessions with experienced instructors.",
    image: "/private_class.jpg",
  },
  {
    id: 2,
    title: "Group Classes",
    description: "Learn and grow with peers in a collaborative environment.",
    image: "/group_class.jpg",
  },
  {
    id: 3,
    title: "Online Lessons",
    description:
      "Convenient and flexible learning from the comfort of your home",
    image: "/online_class.jpg",
  },
  {
    id: 4,
    title: "Workshops",
    description: "Specialized workshops focusing on different aspects of music",
    image: "/workshop_session.jpg",
  },
];

const programs = [
  {
    id: 1,
    title: "Beginner Program",
    description:
      "Start your musical journey with our beginner-friendly courses.",
  },
  {
    id: 2,
    title: "Intermediate Program",
    description: "Enhance your skills and take your playing to the next level.",
  },
  {
    id: 3,
    title: "Advanced Program",
    description:
      "Master your instrument with our advanced lessons and techniques.",
  },
  {
    id: 4,
    title: "Special Program",
    description: "Join our summer camps, holiday workshops, and more.",
  },
];

const about = {
  headline: `About Us`,
  description: `At Fastbeet Music School, we believe in the power of music to transform lives. Our mission is to provide high-quality music education that is accessible and enjoyable for everyone.`,
  image: `/music_pic1.jpg`,
  content: [
    {
      title: `Our Story`,
      body: `Founded in [Year], we have been dedicated to nurturing musical talent and passion.`,
    },
    {
      title: `Our Instructor`,
      body: `Meet our team of experienced and passionate music educators.`,
    },
    {
      title: `Our Philosophy`,
      body: `We believe in a personalized approach to teaching, focusing on each student’s unique needs and goals.`,
    },
  ],
  misson: {
    actions: [
      "Find your ideal music teacher",
      "Learn more about teaching at Fastbeet Music School",
      "Utilize the Fastbeet platform for your own school, festival, or brand",
      "Help spread the word about Fastbeet Music School",
    ],
  },
};

export { programs, services, about };
