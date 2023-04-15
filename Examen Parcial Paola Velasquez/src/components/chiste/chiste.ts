export enum Attributes2 {
    "chiste"="chiste",
}

class Chistes extends HTMLElement {
    chiste?:string

static get observedAttributes (){
    const attributes : Record <Attributes2,null> = {
        chiste:null,
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
    propName:Attributes2,
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
        this.shadowRoot.innerHTML+=`
        <h1>${this.chiste}</h1>
        
        `

        //const botones = this.ownerDocument.createElement('button');
        //botones.innerText=${this.category}
        //this.shadowRoot?.appendChild(botones);
    }

}

}
customElements.define("chistes-categorias", Chistes)
export default Chistes;