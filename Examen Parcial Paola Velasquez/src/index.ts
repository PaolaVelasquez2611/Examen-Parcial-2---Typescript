import { Attributes } from "./components/botones/boton";
import Chistes, { Attributes2 } from "./components/chiste/chiste";
import { getApi, getApi2 } from "./components/data";
import "./components/export"
import { Buttons } from "./components/export";

class AppContainer extends HTMLElement {
    botones : Buttons[]=[];

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const data = await getApi();
        data?.forEach((category:string)=>{
            const botoness = this.ownerDocument.createElement('botones-categorias')as Buttons;
            botoness.setAttribute (Attributes.category,category);
            this.botones.push(botoness)
        })
        const data2 = await getApi2();
            const card = this.ownerDocument.createElement('chistes-categorias')as Chistes;
            card.setAttribute (Attributes2.chiste,data2.value);
            this.botones.push(card)
        

        this.render(this.botones)
    }

    render(botones:any) {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=``
            botones.forEach((botones:any)=>{
                this.shadowRoot?.appendChild(botones)
        }) 
        }
        //const something = this.ownerDocument.createElement('div');
       // this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)