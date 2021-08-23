import express from 'express'
function product(arr, search) {
    try{
    let storage = []
    console.log(search);
    console.log(arr);
        for (let i in arr) {
            let counter = 0
            let length = 0
            for (let j in search) {
                if (search[j] == arr[i][j]) {
                    counter++
                }
                length += 1
            }
            if (counter == length) {   
                storage.push(arr[i]);
            }
        }

        return storage
    }catch(err){
        console.log(err);
    }  

}


export default {
    product
}