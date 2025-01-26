<template>
<div>
	<editor :value="htmlText"
            style="height:780px"
            :stylesheets="stylesheets"
            :pdf="pdf">
		<editor-tool :name="'pdf'"></editor-tool>
    </editor>
</div>
</template>

<script>
import { Editor, EditorTool } from '@progress/kendo-editor-vue-wrapper';

export default {
    name: 'App',
    components: {
       'editor': Editor,
       'editor-tool': EditorTool
    },
    data: function() {
        return {
            stylesheets: ['https://demos.telerik.com/kendo-ui/content/web/editor/pdf-export-styles.css'],
            pdf: {
                fileName: "NewDocument.pdf",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                paperSize: "a4",
                margin: {
                    bottom: 20,
                    left: 20,
                    right: 20,
                    top: 20
                }
            },
            htmlText: `                <br/>
                <p style="text-align:center;">
                    <span style="font-family:Verdana, Geneva, sans-serif;font-size:large;">
                        <strong>One of the Most Beautiful Islands on Earth - Tenerife</strong>
                    </span>
                </p>
                <p>
                    <span style="font-family:Verdana, Geneva, sans-serif;font-size:medium;">
                        <strong>Overview</strong>
                    </span>
                </p>
                <p style="font-size: small;">
                    <strong>Tenerife </strong>is the largest and most populated island of the eight <a href="https://en.wikipedia.org/wiki/Canary_Islands" target="_blank"> Canary Islands</a>. It is also the most populated island of <strong>Spain</strong>, with a land area of 2,034.38 square kilometers(785 sq mi) and 904,713 inhabitants, 43 % of the total population of the <strong>Canary Islands</strong>. The archipelago's beaches, climate and important natural attractions, make it a major tourist destination with over 12 million visitors per year.
                </p>
                <br />
                <p>
                    <span style="font-family:Verdana, Geneva, sans-serif;font-size:medium;">
                        <strong>Trip Highlights in Tenerife</strong>
                    </span>
                </p>
                <ul>
                    <li>
                        <strong style="color: rgb(0,80,5);">Trip to Loro Parque </strong> <br /> Out top tip is to visit the famous <em>Loro Parque</em> or 'Loro Park. It is a 13.5-hectare zoo on the outskirts of Puerto de la Cruz on Tenerife, Spain where it houses an extensive and diverse reserve of animal and plant species. 
                        <br />
                        <br />
                    </li>
                    <li>
                        <strong><span style="color: rgb(46,125,50);">Whale and Dolphin Watching Tour&nbsp;<br /></span></strong> Another great option is to take boat excursion with almost guaranteed sightings of whales and dolphins. This is a day-long trip that includes lunch, island visits, fishing, and amazing views of ocean sceneries.
                        <br />
                        <br />
                    </li>
                    <li>
                        <strong><span style="color: rgb(96,173,94);">Teide National Park Stargazing</span></strong><br />Last, but not least you can take a stargaze trip to Teide National Park, the 3rd best place in the world to view stars and described by NASA as a window to the universe.
                        <br />
                    </li>
                </ul>
                <br />
                <p>
                    <span style="font-family:Verdana, Geneva, sans-serif;font-size:medium;"> <strong> Climate </strong> </span>
                </p>
                <table style="width:100%;height:150px;text-align:center;">
                    <tbody>
                        <tr style="height:15%;background-color: rgb(96,173,94);">
                            <td style="width:473px;text-align:center; font-size:medium; color: rgb(255,255,255);" colspan="14">
                                <strong> Climate Data for <a href="https://en.wikipedia.org/wiki/Santa_Cruz_de_Tenerife" target="_blank"> Santa Cruz de Tenerife</a></strong>
                            </td>
                        </tr>
                        <tr style="height:9.33333%;">
                            <td style="width:230px;">
                                <span style="font-size:small; color: rgb(46,125,50);"><strong> Month </strong></span>
                            </td>
                            <td><strong><span style="color: rgb(0,80,5);">Jan</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Feb</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Mar</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Apr</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">May</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Jun</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Jul</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Aug</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Sep</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Oct</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Nov</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Dec</span></strong></td>
                            <td><strong><span style="color: rgb(0,80,5);">Year</span></strong></td>
                        </tr>
                        <tr style="height:9.33333%;">
                            <td style="width:230px; color: rgb(46,125,50);">
                                <strong>Daily mean &#176;C (&#176;F)</strong>
                            </td>
                            <td style="">18.2<br />(64.8)<br /></td>
                            <td style="">18.3<br />(64.9)<br /></td>
                            <td style="">19.0<br />(66.2)<br /></td>
                            <td style="">19.7<br />(67.5)<br /></td>
                            <td style="">21.0<br />(69.8)<br /></td>
                            <td style="">22.9<br />(73.2)<br /></td>
                            <td style="">25.0<br />(77.0)<br /></td>
                            <td style="">25.5<br />(77.9)<br /></td>
                            <td style="">24.9<br />(76.8)<br /></td>
                            <td style="">23.4<br />(74.1)<br /></td>
                            <td style="">21.3<br />(70.3)<br /></td>
                            <td style="">19.4<br />(66.9)<br /></td>
                            <td style="">21.5<br />(70.7)<br /></td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <em> *The data used in this demo is taken from <a href="https://wikipedia.com" target="_blank"> wikipedia.com </a>.</em> <br />
                    <em> **The displayed photos are sourced from <a href="https://pixabay.com" target="_blank"> pixabay.com </a> </em>
                </p>
                `
            }
    }
}
</script>
