<template>
    <div>
        <div>
            <h4>Order meal:</h4>
            <buttongroup class="meals" selection="'single'">
            <kbutton v-for="m in meals"
                :togglable="true"
                :key="m.name"
                :selected="meal.name === m.name"
                @click="(e) => handleClick(m.name)"
                >
                <span>{{m.icon}}</span>
                {{m.name}}
            </kbutton>
            </buttongroup>
        </div>
        <div class="separator mt-3">
            <h4>Add more:</h4>
            <chiplist
            :rounded="'full'"
            :key="meal.name"
            :selection="'multiple'"
            :default-data-items="meal.data"
            :text-field="'name'"
            :value-field="'name'"
                />
        </div>
    </div>
</template>
<script>
import { ChipList, ButtonGroup, Button } from '@progress/kendo-vue-buttons';

const meals = [
    { name: 'Pizza', icon: '🍕', data: [{ name: 'Ketchup' }, { name: "Mustard" }, { name: 'Mayonnaise' }] },
    { name: 'Sushi', icon: '🍣', data: [{ name: 'Wasabi' }, { name: 'Ginger' }, { name: 'Soy sauce' }] },
    { name: 'Burger', icon: '🍔', data: [{ name: 'Onions' }, { name: 'Avocado' }, { name: 'Eggs' }] }
];


export default {
    components: {
        'chiplist': ChipList,
        'kbutton': Button,
        'buttongroup': ButtonGroup
    },
    data () {
        return {
            meals: meals,
            meal:  meals[0]
        };
    },
    methods: {
        handleClick(name) {
            this.meal = this.meals.find((m) => m.name === name);
        }
    }
}
</script>
