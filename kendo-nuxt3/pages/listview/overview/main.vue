<template>
  <ListView
     :style="{ width: '100%', height: '530px' }"
     :data-items="dataItems"
     @scroll="scrollHandler"
     :item="'myItem'"
     :header="'myHeader'"
   >
   <template v-slot:myItem="{props}">
     <Card :style="{ width: '180px', boxShadow: 'none', flex: '0 0 25.33%', margin: 25, border: 'none' }" >
       <CardImage :src="`https://gist.github.com/simonssspirit/0db46d4292ea8e335eb18544718e2624/raw/54748432143492082bf60eee16c1c681f4d6270f/${props.dataItem.Image}`"
        :style="{ height: '150px', width: '180px' }" />
       <div :style="{ padding: 0 }">
         <CardTitle :style="{ fontSize: 14 }">
           {{props.dataItem.Destination}}
         </CardTitle>
         <CardSubtitle :style="{ fontSize: 12, marginTop: 0 }">
           {{props.dataItem.Text}}
         </CardSubtitle>
       </div>
     </Card>
       </template>
       <template v-slot:myHeader>
         <ListViewHeader :style="{ color: 'rgb(160, 160, 160)', fontSize: 14 }" class='pl-4 pb-2 pt-2'>
           Top European destinations
         </ListViewHeader>
       </template>
   </ListView>
</template>
<script>
import { ListView, ListViewFooter, ListViewHeader } from '@progress/kendo-vue-listview';
import { Avatar, Card, CardTitle, CardImage, CardSubtitle } from '@progress/kendo-vue-layout';
const destinations = [
   {
       'Destination': 'BRUSSELS, BELGIUM',
       'Text': 'Chocolate, beer, music and surrealism.',
       'Image': 'brussels-180x150.png'
   },
   {
       'Destination': 'PORTO, PORTUGAL',
       'Text': 'Taste it, drink it, eat it, love it. Bem-vindo ao Porto!',
       'Image': 'porto-180x150.png'
   },
   {
       'Destination': 'MALAGA, SPAIN',
       'Text': 'Enjoy the perfect climat.',
       'Image': 'malaga-180x150.png'
   },
   {
       'Destination': 'BUDAPEST, HUNGARY',
       'Text': 'One of the most exciting cities in the world.',
       'Image': 'budapest-180x150.png'
   },
   {
       'Destination': 'BRATISLAVA, SLOVAKIA',
       'Text': 'A modern city on the Danube.',
       'Image': 'bratislava-180x150.png'
   },
   {
       'Destination': 'FLORENCE, ITALY',
       'Text': 'Love and culture are everywhere!',
       'Image': 'florence-180x150.png'
   },
   {
       'Destination': 'POZNAN, POLAND',
       'Text': 'A unique heritage with rich cultural offer.',
       'Image': 'poznan-180x150.png'
   },
   {
       'Destination': 'ATHENS, GREECE',
       'Text': 'The biggest open-air museum in Europe.',
       'Image': 'athens-180x150.png'
   },
   {
       'Destination': 'SOFIA, BULGARIA',
       'Text': 'One of Europe\'s oldest cities.',
       'Image': 'sofia-180x150.png'
   },
   {
       'Destination': 'BORDEAUX, FRANCE',
       'Text': 'Discover exciting new facets of its character.',
       'Image': 'bordeaux-180x150.png'
   },
   {
       'Destination': 'GENEVA, SWITZERLAND',
       'Text': 'One of the most welcoming cities in Europe.',
       'Image': 'geneva-180x150.png'
   },
   {
       'Destination': 'RIGA, LATVIA',
       'Text': 'At the crossroads of various nations and cultures.',
       'Image': 'riga-180x150.png'
   },
   {
       'Destination': 'SEVILLE, SPAIN',
       'Text': 'Seville. Any time of year…',
       'Image': 'seville-180x150.png'
   },
   {
       'Destination': 'COLMAR, FRANCE',
       'Text': 'A condensed version of the Alsace region.',
       'Image': 'colmar-180x150.png'
   },
   {
       'Destination': 'VIENNA, AUSTRIA',
       'Text': 'The Giant Ferris Wheel is awaiting you.',
       'Image': 'vienna-180x150.png'
   },
   {
       'Destination': 'MONTPELLIER, FRANCE',
       'Text': 'Smart, Mediterranean, attractive, welcoming and festive.',
       'Image': 'montpellier-180x150.png'
   },
   {
       'Destination': 'VALENCIA, SPAIN',
       'Text': 'Sun, culture, history and future. ',
       'Image': 'valencia-180x150.png'
   },
   {
       'Destination': 'BARCELONA, SPAIN',
       'Text': 'Barcelona never sleeps.',
       'Image': 'barcelona-180x150.png'
   },
   {
       'Destination': 'MILAN, ITALY',
       'Text': 'The hub of Italian culture',
       'Image': 'milan-180x150.png'
   },
   {
       'Destination': 'GDANSK, POLAND',
       'Text': 'You\'ll be amazed by the beauty of Gdansk.',
       'Image': 'gdansk-180x150.png'
   },
   {
       'Destination': 'ROME, ITALY',
       'Text': 'Treat yourself to a stay in the Eternal City.',
       'Image': 'rome-180x150.png'
   },
   {
       'Destination': 'EDINBURGH, SCOTLAND',
       'Text': 'Shopping, dining & architectural splendour.',
       'Image': 'edinburgh-180x150.png'
   },
   {
       'Destination': 'LISBON, PORTUGAL',
       'Text': 'The pure pleasure of being in one of the best cities in the world.',
       'Image': 'lisbon-180x150.png'
   }
];

const createLargeData = () => {
   let data = destinations.slice();
   for (let i = 0; i < 4; i++) {
       data = data.concat(destinations);
   }
   return data;
};
const availableData = createLargeData();

export default {
 components: {
   ListView,
   ListViewFooter,
   ListViewHeader,
   Avatar, Card, CardTitle, 
   CardImage, CardSubtitle
 },
 data() {
   return {
     dataItems: availableData.splice(0, 12)
   };
 },
 methods: {
   scrollHandler (event) {
       const e = event;
       if (e.target.scrollTop + 10 >= e.target.scrollHeight - e.target.clientHeight) {
           const moreData = availableData.splice(0, 6);
           if (moreData.length > 0) {
               this.dataItems = this.dataItems.concat(moreData);
           }
       }
   }
 }
};
</script>
