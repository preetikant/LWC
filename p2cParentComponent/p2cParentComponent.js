import { LightningElement} from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselData = [
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "First Card",
            description: "First description."
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header: "Second Card",
            description: "Second description."
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header: "Third Card",
            description: "Third by description."
        }

    ]
    value = 'inProgress';
    get options(){
        return [
            {label: 'Hello', value:'hello'},
            {label: 'Hi',value:'hi'},
        ];
    } 
    handleChange(event){
        this.value = event.details.value;
    }
    percentagv =10
    changeHandler(event){
        this.percentagv = event.target.value;
    }

}

