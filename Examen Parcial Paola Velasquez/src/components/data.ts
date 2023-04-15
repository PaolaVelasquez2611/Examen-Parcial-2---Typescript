export async function getApi(){
try {
    
        const datachistes = await(await fetch("https://api.chucknorris.io/jokes/categories")).json();
       
        
    return datachistes;
    
} catch (error) {
    console.log("no sirve el api")
    
}

}

export async function getApi2(){
    try {
        
            const datachistes2 = await(await fetch("https://api.chucknorris.io/jokes/random?category=animal")).json();
           
            console.log(datachistes2)
        return datachistes2;
        
    } catch (error) {
        console.log("no sirve el api")
        
    }
    
    }