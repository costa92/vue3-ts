async function sleepTime(timeout = 300){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        },timeout)
    })
}


async function sleepBack(timeout: number, callback:()=>void) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(callback);
        },timeout)
    })
}

export {sleepTime,sleepBack}