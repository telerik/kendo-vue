<template>
    <kendo-tabstrip :data-source="localDataSource"
					:data-text-field="'text'"
					:data-image-url-field="'imageUrl'"
					:data-content-field="'content'">
	</kendo-tabstrip>
</template>
<script>
import { markRaw } from 'vue';
import { TabStrip } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-tabstrip': TabStrip
  },
   data: function () {
       return {
            localDataSource: markRaw(new kendo.data.DataSource({
                 data: [
                    {
                        text: "Baseball",
                        imageUrl: "https://demos.telerik.com/kendo-ui/content/shared/icons/sports/baseball.png",
                        content: "Baseball is a bat-and-ball sport played between two teams of nine players each. The aim is to score runs by hitting a thrown ball with a bat and touching a series of four bases arranged at the corners of a ninety-foot diamond. Players on the batting team take turns hitting against the pitcher of the fielding team, which tries to stop them from scoring runs by getting hitters out in any of several ways. A player on the batting team can stop at any of the bases and later advance via a teammate's hit or other means. The teams switch between batting and fielding whenever the fielding team records three outs. One turn at bat for each team constitutes an inning and nine innings make up a professional game. The team with the most runs at the end of the game wins."
                    },
                    {
                        text: "Golf",
                        imageUrl: "https://demos.telerik.com/kendo-ui/content/shared/icons/sports/golf.png",
                        content: "Golf is a precision club and ball sport, in which competing players (or golfers) use many types of clubs to hit balls into a series of holes on a golf course using the fewest number of strokes. It is one of the few ball games that does not require a standardized playing area. Instead, the game is played on golf courses, each of which features a unique design, although courses typically consist of either nine or 18 holes. Golf is defined, in the rules of golf, as playing a ball with a club from the teeing ground into the hole by a stroke or successive strokes in accordance with the Rules."
                    },
                    {
                        text: "Swimming",
                        imageUrl: "https://demos.telerik.com/kendo-ui/content/shared/icons/sports/swimming.png",
                        content: "Swimming has been recorded since prehistoric times; the earliest recording of swimming dates back to Stone Age paintings from around 7,000 years ago. Written references date from 2000 BC. Some of the earliest references to swimming include the Gilgamesh, the Iliad, the Odyssey, the Bible, Beowulf, and other sagas. In 1578, Nikolaus Wynmann, a German professor of languages, wrote the first swimming book, The Swimmer or A Dialogue on the Art of Swimming (Der Schwimmer oder ein ZwiegesprÃ¤ch Ã¼ber die Schwimmkunst). Competitive swimming in Europe started around 1800, mostly using breaststroke."
                    }
                ]
            }))
        }
   }
}
</script>
<style>
    #tabstrip-sprites .k-sprite {
        background-image: url("https://demos.telerik.com/kendo-ui/content/shared/styles/flags.png");
    }
    .brazilFlag {
        background-position: 0 0;
    }
    .indiaFlag {
        background-position: 0 -32px;
    }
    .netherlandsFlag {
        background-position: 0 -64px;
    }
    .k-tabstrip .k-content {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>
