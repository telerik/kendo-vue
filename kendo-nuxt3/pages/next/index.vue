<template>
   <div id="test-area">
      <kinput :disabled="true"  :placeholder="'placeholder'" :label="'Inbuilt'" />
       <div class="k-form">
        <fieldset>
          <legend>Change Shape</legend>
          <input
            type="radio"
            name="shape"
            id="rectangle"
            class="k-radio k-md"
            @change="onChangeShape"
          />
          <label class="k-radio-label" for="rectangle">
            rectangle
          </label>

          <input
            type="radio"
            name="shape"
            id="square"
            class="k-radio k-md"
            @change="onChangeShape"
          />
          <label class="k-radio-label" for="square">
            square
          </label>
          
          <h3>Change Size</h3>
          <input
            type="radio"
            name="size"
            id="small-s"
            class="k-radio k-md"
            @change="onChangeSize"
          />
          <label class="k-radio-label" for="small-s">
            Small
          </label>

          <input
            type="radio"
            name="size"
            id="medium-s"
            class="k-radio k-md"
            @change="onChangeSize"
          />
          <label class="k-radio-label" for="medium-s">
            medium
          </label>

           <input
            type="radio"
            name="size"
            id="large-s"
            class="k-radio k-md"
            @change="onChangeSize"
          />
          <label class="k-radio-label" for="large-s">
            large
          </label>

        </fieldset>
      </div>
        <div class="k-form">
        <fieldset>
          <legend>Change Rounded</legend>
          <input
            type="radio"
            name="rounded"
            id="small-r"
            class="k-radio k-md"
            @change="onChangeRounded"
          />
          <label class="k-radio-label" for="small-r">
            Small
          </label>

          <input
            type="radio"
            name="rounded"
            id="medium-r"
            class="k-radio k-md"
            @change="onChangeRounded"
          />
          <label class="k-radio-label" for="medium-r">
            medium
          </label>

           <input
            type="radio"
            name="rounded"
            id="large-r"
            class="k-radio k-md"
            @change="onChangeRounded"
          />
          <label class="k-radio-label" for="large-r">
            large
          </label>
           <input
            type="radio"
            name="rounded"
            id="full-r"
            class="k-radio k-md"
            @change="onChangeRounded"
          />
          <label class="k-radio-label" for="full-r">
            full
          </label>
        </fieldset>
      </div>
      <div class="k-form">
        <fieldset>
          <legend>Change fillMode</legend>
          <input
            type="radio"
            name="fillMode"
            id="flat-f"
            class="k-radio k-md"
            @change="onChangeFillMode"
          />
          <label class="k-radio-label" for="flat-f">
            Flat
          </label>

          <input
            type="radio"
            name="fillMode"
            id="link-f"
            class="k-radio k-md"
            @change="onChangeFillMode"
          />
          <label class="k-radio-label" for="link-f">
            Link
          </label>
          <input
            type="radio"
            name="fillMode"
            id="solid-f"
            class="k-radio k-md"
            @change="onChangeFillMode"
          />
          <label class="k-radio-label" for="solid-f">
            Solid
          </label>
          <input
            type="radio"
            name="fillMode"
            id="outline-f"
            class="k-radio k-md"
            @change="onChangeFillMode"
          />
          <label class="k-radio-label" for="outline-f">
            Outline
          </label>
        </fieldset>
      </div>
        <div class="k-form">
        <fieldset>
          <legend>Change ThemeColor</legend>
          <template v-for="theme in themes" >
            <input 
              type="radio"
              name="themeColor"
              :id="theme"
              class="k-radio k-md"
              @change="onChangeThemeColor"
            />
            <label class="k-radio-label" :for="theme">
              {{theme}}
            </label>
          </template> 
        </fieldset>
      </div>
       <div class="k-form">
        <fieldset>
          <legend>Second Rounded</legend>
          <input
            type="radio"
            name="secondrounded"
            id="small-sr"
            class="k-radio k-md"
            @change="onChangeSecondRounded"
          />
          <label class="k-radio-label" for="small-sr">
            Small
          </label>

          <input
            type="radio"
            name="secondrounded"
            id="medium-sr"
            class="k-radio k-md"
            @change="onChangeSecondRounded"
          />
          <label class="k-radio-label" for="medium-sr">
            medium
          </label>

           <input
            type="radio"
            name="secondrounded"
            id="large-sr"
            class="k-radio k-md"
            @change="onChangeSecondRounded"
          />
          <label class="k-radio-label" for="large-sr">
            large
          </label>
           <input
            type="radio"
            name="secondrounded"
            id="full-sr"
            class="k-radio k-md"
            @change="onChangeSecondRounded"
          />
          <label class="k-radio-label" for="full-sr">
            full
          </label>
        </fieldset>
      </div>
        <hr />
        <DateInput :style="{ width: '200px'}" :rounded="rounded" :fill-mode="fillMode" :size="size" :spinners="true" />
        
        <TimePicker :style="{ width: '200px'}" :rounded="rounded" :fill-mode="fillMode" :size="size"  />
       
        <DatePicker :style="{ width: '200px'}"  :rounded="rounded" :fill-mode="fillMode" :size="size"  />
       
        <DateTimePicker :style="{ width: '200px'}"  :rounded="rounded" :fill-mode="fillMode" :size="size"  />
         <DateRangePicker :style="{ width: '200px'}" :allow-reverse="true" :swap-button="true" :rounded="rounded" :fill-mode="fillMode" :size="size"  />
      <hr />

      <Chip :rounded="rounded" :fill-mode="fillMode" :size="size" :text="'chip'" :theme-color="themeColor">chip</Chip>
      <kbutton  :rounded="rounded" :fill-mode="fillMode" :shape="shape" :size="size" :theme-color="themeColor" @click="toggleWindow" >show widnow</kbutton>
         <Window v-if="visible" 
            :title="'Awesome title goes here'" 
            @close="toggleWindow" 
            :initial-width="450">           
        </Window>

         <Slider
                :buttons="true"
                :step="1"
                :default-value="7"
                :min="1"
                :max="10"
            >
            <SliderLabel :position="1">1</SliderLabel>
            <SliderLabel :position="3">3</SliderLabel>
            <SliderLabel :position="5">5</SliderLabel>
            <SliderLabel :position="7">7</SliderLabel>
            <SliderLabel :position="10">10</SliderLabel>
            </Slider>
      <kswitch :size="size" :track-rounded="rounded" :thumb-rounded="secondrounded"/>

      <kcheckbox :size="size" :rounded="rounded"/>
       <fab :rounded="rounded" :fill-mode="fillMode" :size="size" :text="'chip'" :theme-color="themeColor"
            :items="fabitems"
            :icon="'gear'"
            />
      <RadioButton :size="size" />
    <DropDownButton :text="'User Settings'"  :items="items"  
        :rounded="rounded" :fill-mode="fillMode" :shape="shape" :size="size" :theme-color="themeColor"  />
         <hr />
        <SplitButton :text="'User Settings'" :items="items" 
        :rounded="rounded" :fill-mode="fillMode" :size="size" :theme-color="themeColor"  />
          <chiplist :theme-color="themeColor" :rounded="rounded" :fill-mode="fillMode" :size="size"
            :key="meal.name"
            :selection="'multiple'"
            :default-data-items="meal.data"
            :text-field="'name'"
            :value-field="'name'"
                />
        <hr />
      <MaskedTextBox :style="{ width: '200px'}" :size="size" :rounded="rounded" :fill-mode="fillMode" />

      <NumericTextBox  :class="'shshsh'"  :style="{ width: '200px'}" :size="size" :rounded="rounded" :fill-mode="fillMode" />

      <ktextarea  :class="'shshsh'" :style="{ width: '200px'}" :size="size" :rounded="rounded" :fill-mode="fillMode" />
      <kinput :label="'aaa'" :style="{ width: '200px'}" :size="size" :rounded="rounded" :fill-mode="fillMode" />

      <Avatar  :rounded="rounded" :fill-mode="fillMode" :size="size"
         :theme-color="themeColor"  /> 
      <hr />
       <autocomplete :loading="true" :style="{ width: '200px'}" :data-items="countries" :placeholder="'e.g. Denmark'" :size="size" :rounded="rounded" :fill-mode="fillMode"  ></autocomplete>
       <DropDownList :loading="true"  :style="{ width: '200px'}" :data-items="countries"  :filterable="true" :placeholder="'e.g. Denmark'" :size="size" :rounded="rounded" :fill-mode="fillMode"  ></DropDownList>
       <ComboBox :loading="true"  :style="{ width: '200px'}" :data-items="countries" :placeholder="'e.g. Denmark'" :size="size" :rounded="rounded" :fill-mode="fillMode"  ></ComboBox>
       <MultiSelect :loading="true"  :style="{ width: '200px'}" :data-items="countries" :placeholder="'e.g. Denmark'" :size="size" :rounded="rounded" :tags-rounded="secondrounded" :fill-mode="fillMode"  ></MultiSelect>
       <hr/>
     <Upload
                :auto-upload="false"
                :default-files="[]"
                :with-credentials="false"
                :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
                :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"       
            ></Upload>
    </div>
</template>
<script lang="ts">
import { Upload } from '@progress/kendo-vue-upload';
import { Window } from '@progress/kendo-vue-dialogs';
import { AutoComplete, DropDownList, ComboBox, MultiSelect } from '@progress/kendo-vue-dropdowns';
import { DateInput, TimePicker, DatePicker, DateTimePicker, DateRangePicker } from '@progress/kendo-vue-dateinputs';
import { Button, DropDownButton, SplitButton, ChipList, Chip, FloatingActionButton } from '@progress/kendo-vue-buttons';
import { Avatar } from '@progress/kendo-vue-layout';
import { Switch, Checkbox, RadioButton, MaskedTextBox, NumericTextBox, TextArea, Slider, SliderLabel, Input } from '@progress/kendo-vue-inputs';

const meals = [
    { name: 'Pizza', icon: '🍕', data: [{ name: 'Ketchup' }, { name: "Mustard" }, { name: 'Mayonnaise' }] },
    { name: 'Sushi', icon: '🍣', data: [{ name: 'Wasabi' }, { name: 'Ginger' }, { name: 'Soy sauce' }] },
    { name: 'Burger', icon: '🍔', data: [{ name: 'Onions' }, { name: 'Avocado' }, { name: 'Eggs' }] }
];

const countries = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia & Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];

const fabitems = [
    { icon: 'plus', text: 'Create' },
    { icon: 'pencil', text: 'Edit' },
    { icon: 'trash', text: 'Delete' }
];

export default {
  components: {
    kinput: Input,
     kbutton: Button,
     kswitch: Switch,
     kcheckbox: Checkbox,
     RadioButton,
     MaskedTextBox,
     NumericTextBox,
     ktextarea: TextArea,
     DropDownButton,
     SplitButton,
     Avatar,
     chiplist: ChipList,
     Chip,
     DateInput, TimePicker, DatePicker,
     DateTimePicker,
     DateRangePicker,
     'autocomplete': AutoComplete,
     DropDownList, ComboBox, MultiSelect,
     Upload,
     Window,
     Slider, SliderLabel,
     'fab': FloatingActionButton
  },
  data() {
    return {
      fabitems,
        visible: false,
        rounded: undefined,
        secondrounded: undefined,
        fillMode: undefined,
        shape: undefined,
        size: undefined,
        themeColor: undefined,
        themes: [null, 'base', 'dark', 'error', 'info', 'inverse', 'inverse',
                 'light', 'primary', 'secondary', 'success', 'tertiary', 'warning'],
        items: [
          "My Profile",
          "Friend Requests",
          "Account Settings",
          "Support",
          "Log Out",
        ],
        meals: meals,
        meal:  meals[0],
        countries
    };
  },
  methods: {
    toggleWindow(){
      this.visible = !this.visible;
    },
      handleClick(name) {
            this.meal = this.meals.find((m) => m.name === name);
     },
     onChangeSize(e) {
         this.size = e.target.id.split('-')[0]
     },
     onChangeRounded(e) {
         this.rounded = e.target.id.split('-')[0]
     },
      onChangeSecondRounded(e) {
         this.secondrounded = e.target.id.split('-')[0]
     },
      onChangeShape(e) {
         this.shape = e.target.id.split('-')[0]
     },
     onChangeFillMode(e) {
         this.fillMode = e.target.id.split('-')[0]
     },
      onChangeThemeColor(e) {
         this.themeColor = e.target.id.split('-')[0]
     }
  }
};
</script>
