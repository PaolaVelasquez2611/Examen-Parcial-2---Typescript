import styles from "./boton.css"

export enum Attributes {
    "category"="category",
}

class Buttons extends HTMLElement {
    category?:string

static get observedAttributes (){
    const attributes : Record <Attributes,null> = {
        category:null,
    }
    return Object.keys(attributes);
}

constructor(){
    super();
    this.attachShadow({mode:"open"});
}

connectedCallback(){
    this.render();
}

attributeChangedCallback(
    propName:Attributes,
    oldValue:string|undefined,
    newValue:string|undefined,
){ switch(propName){
    default:
        this[propName]=newValue;
        break;
}
this.render();

}

render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML=``
        //<link rel="stylesheet" href="../src/componentes/botones/boton.css">
        this.shadowRoot.innerHTML+=`
        <section class="sec">
        <style>${styles.toString()}</style>
        <button id="boton">${this.category}<button>
        </section>
        
        `

        //const botones = this.ownerDocument.createElement('button');
        //botones.innerText=${this.category}
        //this.shadowRoot?.appendChild(botones);
    }

}

}
customElements.define("botones-categorias", Buttons)
export default Buttons;