//your JS code here. If required.
const input1 = document.getElementById('text');
const input2 = document.getElementById('delay');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', ()=>{
    if(input1.value.trim()){
        // add 1000 ms delay using async/await to display the text on output screen
        const myFunction = async ()=>{
            try{
                await promise(1000);
                // once the promise is reolved display it afer certain delay
                output.textContent = input1.value.trim();
            }catch(error){
                console.log(error);
            }
        }
        myFunction();

    }
    if(input2.value.trim()){
        const myFunction = async ()=>{
            try{
                await promise(2000);
                // once the promise is reolved display it afer certain delay
                output.textContent = input2.value.trim();
            }catch(error){
                console.log(error);
            }
        }
        myFunction();
    }
})

function promise(timeout){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    })
}