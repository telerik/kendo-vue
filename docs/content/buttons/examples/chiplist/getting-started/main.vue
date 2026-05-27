<template>
    <div>
        <div>
            <h4>Order meal:</h4>
            <ButtonGroup class="meals" selection="'single'">
            <KButton v-for="m in meals"
                :togglable="true"
                :key="m.name"
                :selected="meal.name === m.name"
                @click="() => handleClick(m.name)"
                >
                <span>{{m.icon}}</span>
                {{m.name}}
            </KButton>
            </ButtonGroup>
        </div>
        <div class="separator mt-3">
            <h4>Add more:</h4>
            <ChipList
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

<script setup>
import { ref } from 'vue';
import { ChipList, ButtonGroup, Button as KButton } from '@progress/kendo-vue-buttons';

const meals = [
    { name: 'Pizza', icon: '🍕', data: [{ name: 'Ketchup' }, { name: "Mustard" }, { name: 'Mayonnaise' }] },
    { name: 'Sushi', icon: '🍣', data: [{ name: 'Wasabi' }, { name: 'Ginger' }, { name: 'Soy sauce' }] },
    { name: 'Burger', icon: '🍔', data: [{ name: 'Onions' }, { name: 'Avocado' }, { name: 'Eggs' }] }
];

const meal = ref(meals[0]);

function handleClick(name) {
    meal.value = meals.find((m) => m.name === name);
}
</script>
