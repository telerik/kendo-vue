const tags = [
    { name: 'Art' },
    { name: 'Books' },
    { name: 'Film' },
    { name: 'Gaming' },
    { name: 'Music' },
    { name: 'Photography' },
    { name: 'Podcasts' },
    { name: 'TV' },
    { name: 'Visual Design' }
];
const articles = [
    {
        author: 'Camille Fournier',
        title: 'An incomplete list of skills senior engineers need',
        minsLength: 4,
        date: new Date()
    },
    {
        author: 'Mathew MacDonald',
        title: 'A Closer Look at 5 New Features in C# 10',
        minsLength: 6,
        date: new Date()
    },
    {
        author: 'Camille Fournier',
        title: '20 Necessary Requirements of a Perfect Laptop',
        minsLength: 4,
        date: new Date()
    },
    {
        author: 'Anton Subbotin',
        title: 'Top 3 Coding Teachers',
        minsLength: 5,
        date: new Date()
    },
    {
        author: 'Umair Haque',
        title: 'Welcome to a New Dark Age',
        minsLength: 9,
        date: new Date()
    },
    {
        author: 'Jean Campbell',
        title: 'An Open Letter to Millennials',
        minsLength: 7,
        date: new Date()
    }
  ];

const machineImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/gridlayout/machine-learning.jpg';
const climateImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/gridlayout/climate.jpg';
const booksImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/gridlayout/books.jpg';

const recommendedArticles = [
    {
        author: 'Andreas Maier',
        title:
            'Pattern Recognition and the Fundamental Methods of Machine Learning',
        subtitle: 'A Comprehensive Overview of Classical ML Methods',
        minsLength: 7,
        imagePath: machineImage,
        imageText: 'Photo by Nathan Van Egmond on Unsplash',
        date: new Date()
    },
    {
        author: 'Whet Moser',
        title: 'Our Climate Change Future Looks Like the Everglades',
        subtitle: 'We are all Florida man.',
        minsLength: 6,
        imagePath: climateImage,
        date: new Date()
    },
    {
        author: 'Ali Tamaseb',
        title: 'What I Learned About Startups by Collecting 30,000 Data Points',
        subtitle: 'I spend 4 years conducting one of the largest studies.',
        minsLength: 8,
        imagePath: booksImage,
        imageText: 'Photo by Firmbee.com on Unsplash',
        date: new Date()
    }
];
export { tags, articles, recommendedArticles };
