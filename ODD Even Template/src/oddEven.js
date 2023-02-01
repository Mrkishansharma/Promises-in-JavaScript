function getData(data) {
    let promise=new Promise((resolve,reject)=>{
        if(typeof(data)==String){
            reject("error")
        }
        else if(data%2!==0){
            setTimeout(()=>{
                resolve("odd");
            },2000)
        }
        else if(data%2==0){
            setTimeout(()=>{
                resolve("even")
            },2000)
        }
    })

    return promise;
}

export default getData
