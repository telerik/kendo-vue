<template>
<div>
    <treemap :data-source="localDataSource"
            :value-field="'value'"
            :text-field="'name'">
    </treemap>
</div>
</template>


<script>
import { TreeMap } from '@progress/kendo-treemap-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treemap': TreeMap
    },
    data: function () {
        return {
        localDataSource: [
            {
                'name': 'Population in USA',
                'value': 316128839,
                'items': [
                    {
                        'name': 'Alabama',
                        'value': 4833722,
                        'items': [
                            {
                                'name': 'Birmingham',
                                'value': 212113
                            },
                            {
                                'name': 'Montgomery',
                                'value': 201332
                            },
                            {
                                'name': 'Mobile',
                                'value': 194899
                            },
                            {
                                'name': 'Huntsville',
                                'value': 186254
                            },
                            {
                                'name': 'Tuscaloosa',
                                'value': 95334
                            },
                            {
                                'name': 'Hoover',
                                'value': 84126
                            },
                            {
                                'name': 'Dothan',
                                'value': 68001
                            },
                            {
                                'name': 'Auburn',
                                'value': 58582
                            },
                            {
                                'name': 'Decatur',
                                'value': 55816
                            }
                        ]
                    },
                    {
                        'name': 'Alaska',
                        'value': 735132,
                        'items': [
                            {
                                'name': 'Anchorage',
                                'value': 300950
                            },
                            {
                                'name': 'Badger',
                                'value': 20200
                            },
                            {
                                'name': 'College',
                                'value': 13400
                            },
                            {
                                'name': 'Fairbanks',
                                'value': 32324
                            },
                            {
                                'name': 'Juneau',
                                'value': 32660
                            },
                            {
                                'name': 'Ketchikan',
                                'value': 8214
                            },
                            {
                                'name': 'Sitka',
                                'value': 9020
                            }
                        ]
                    },
                    {
                        'name': 'Arizona',
                        'value': 6626624,
                        'items': [
                            {
                                'name': 'Phoenix',
                                'value': 1513367
                            },
                            {
                                'name': 'Tucson',
                                'value': 526116
                            },
                            {
                                'name': 'Mesa',
                                'value': 457587
                            },
                            {
                                'name': 'Chandler',
                                'value': 249146
                            },
                            {
                                'name': 'Glendale',
                                'value': 234632
                            },
                            {
                                'name': 'Gilbert',
                                'value': 229972
                            },
                            {
                                'name': 'Scottsdale',
                                'value': 226918
                            },
                            {
                                'name': 'Tempe',
                                'value': 168228
                            },
                            {
                                'name': 'Peoria',
                                'value': 162592
                            },
                            {
                                'name': 'Surprise',
                                'value': 123546
                            }
                        ]
                    },
                    {
                        'name': 'Arkansas',
                        'value': 2959373,
                        'items': [
                            {
                                'name': 'Little Rock',
                                'value': 197357
                            },
                            {
                                'name': 'Fort Smith',
                                'value': 87650
                            },
                            {
                                'name': 'Fayetteville',
                                'value': 78960
                            },
                            {
                                'name': 'Springdale',
                                'value': 75229
                            },
                            {
                                'name': 'Jonesboro',
                                'value': 71551
                            },
                            {
                                'name': 'North Little Rock',
                                'value': 66075
                            },
                            {
                                'name': 'Conway',
                                'value': 63816
                            },
                            {
                                'name': 'Rogers',
                                'value': 60112
                            },
                            {
                                'name': 'Pine Bluff',
                                'value': 46094
                            },
                            {
                                'name': 'Bentonville',
                                'value': 40167
                            }
                        ]
                    },
                    {
                        'name': 'California',
                        'value': 38332521,
                        'items': [
                            {
                                'name': 'Los Angeles',
                                'value': 3884307
                            },
                            {
                                'name': 'San Diego',
                                'value': 1355896
                            },
                            {
                                'name': 'San Jose',
                                'value': 998537
                            },
                            {
                                'name': 'San Francisco',
                                'value': 837442
                            },
                            {
                                'name': 'Fresno',
                                'value': 509924
                            },
                            {
                                'name': 'Sacramento',
                                'value': 479686
                            },
                            {
                                'name': 'Long Beach',
                                'value': 469428
                            },
                            {
                                'name': 'Oakland',
                                'value': 406253
                            },
                            {
                                'name': 'Bakersfield',
                                'value': 363630
                            },
                            {
                                'name': 'Anaheim',
                                'value': 345012
                            },
                            {
                                'name': 'Santa Ana',
                                'value': 334227
                            }
                        ]
                    },
                    {
                        'name': 'Colorado',
                        'value': 5268367,
                        'items': [
                            {
                                'name': 'Denver',
                                'value': 649495
                            },
                            {
                                'name': 'Colorado Springs',
                                'value': 439886
                            },
                            {
                                'name': 'Aurora',
                                'value': 345803
                            },
                            {
                                'name': 'Fort Collins',
                                'value': 152061
                            },
                            {
                                'name': 'Lakewood',
                                'value': 147214
                            },
                            {
                                'name': 'Thornton',
                                'value': 127359
                            },
                            {
                                'name': 'Arvada',
                                'value': 111707
                            },
                            {
                                'name': 'Westminster',
                                'value': 110945
                            },
                            {
                                'name': 'Pueblo',
                                'value': 108249
                            },
                            {
                                'name': 'Centennial',
                                'value': 106114
                            },
                            {
                                'name': 'Boulder',
                                'value': 103166
                            },
                            {
                                'name': 'Highlands Ranch',
                                'value': 102000
                            }
                        ]
                    },
                    {
                        'name': 'Connecticut',
                        'value': 3596080,
                        'items': [
                            {
                                'name': 'Bridgeport',
                                'value': 147216
                            },
                            {
                                'name': 'New Haven',
                                'value': 130660
                            },
                            {
                                'name': 'Stamford',
                                'value': 126456
                            },
                            {
                                'name': 'Hartford',
                                'value': 125017
                            },
                            {
                                'name': 'Waterbury',
                                'value': 109676
                            },
                            {
                                'name': 'Norwalk',
                                'value': 87776
                            },
                            {
                                'name': 'Danbury',
                                'value': 83684
                            },
                            {
                                'name': 'New Britain',
                                'value': 72939
                            },
                            {
                                'name': 'West Hartford',
                                'value': 63371
                            },
                            {
                                'name': 'Bristol',
                                'value': 60568
                            },
                            {
                                'name': 'Meriden',
                                'value': 60456
                            }
                        ]
                    }
                ]
            }
        ]
        };
    }
}
</script>
