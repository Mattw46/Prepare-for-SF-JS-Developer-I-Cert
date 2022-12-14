import { LightningElement } from 'lwc';

export default class AcountSearch extends LightningElement {
    numberOfEmployees = null;
    handleChange(event) {
        this.numberOfEmployees = event.detail.value;
    }
    reset() {
        this.numberOfEmployees = null;
    }
}