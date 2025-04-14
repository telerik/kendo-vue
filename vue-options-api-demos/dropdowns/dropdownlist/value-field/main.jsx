import Vue from 'vue';
import VueDOM from 'vue-dom';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import withValueField from './withValueField.jsx';

const DropDownListWithValueField = withValueField(DropDownList);

class AppComponent extends Vue.Component {
    sports = [
        { text: 'Basketball', id: 1 },
        { text: 'Football', id: 2 },
        { text: 'Tennis', id: 3 },
        { text: 'Volleyball', id: 4 }
    ];
    state = {
        value: null
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div class="example-config">
                    Selected Value: {this.state.value}
                </div>
                 <dropdownlistWithValueField
                    :style="{ width: '230px' }"
                    data={this.sports}
                    textField="text"
                    valueField="id"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

VueDOM.render(
    <AppComponent />,
    document.querySelector('my-app')
);
