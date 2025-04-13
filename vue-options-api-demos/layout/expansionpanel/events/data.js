const brazilImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/countries/brazil.jpg';
const chileImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/countries/chile.jpg';
const colombiaImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/countries/colombia.jpg';

export const data = [
    {
        id: 'Brazil',
        country: 'Brazil',
        continent: 'South America',
        imageUrl: brazilImage,
        text: 'The word “Brazil” likely comes from the Portuguese word for brazilwood, a tree that once grew plentifully along the Brazilian coast. In Portuguese, brazilwood is called pau-brasil, with the word brasil commonly given the etymology “red like an ember”, formed from brasa (“ember”) and the suffix -il (from -iculum or -ilium). As brazilwood produces a deep red dye, it was highly valued by the European textile industry and was the earliest commercially exploited product from Brazil. Throughout the 16th century, massive amounts of brazilwood were harvested by indigenous peoples (mostly Tupi) along the Brazilian coast, who sold the timber to European traders (mostly Portuguese, but also French) in return for assorted European consumer goods.',
    },
    {
        id: 'Chile',
        country: 'Chile',
        continent: 'South America',
        imageUrl: chileImage,
        text: `There are various theories about the origin of the word Chile. According to 17th-century Spanish chronicler Diego de Rosales, the Incas called the valley
          of the Aconcagua Chili by corruption of the name of a Picunche tribal chief (cacique) called Tili, who ruled the area at the time of the Incan conquest in the 15th century. Another theory points to the similarity of the valley of the Aconcagua with that of the Casma Valley in Peru, where there was a town and valley named Chili.`,
    },
    {
        id: 'Colombia',
        country: 'Colombia',
        continent: 'South America',
        imageUrl: colombiaImage,
        text: 'The name “Colombia” is derived from the last name of the Italian navigator Christopher Columbus. It was conceived by the Venezuelan revolutionary Francisco de Miranda as a reference to all of the New World, but especially to those portions under Spanish law. The name was later adopted by the Republic of Colombia of 1819, formed from the territories of the old Viceroyalty of New Granada (modern-day Colombia, Panama, Venezuela, Ecuador, and northwest Brazil).',
    },
];
