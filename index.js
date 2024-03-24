//Ex2
//const numberArr = [4,9,8,3,7,5]
//const obj = {
    //nume: 'Leon',
    //age: 50,
    //place: 'Sahara'
//}
//for(let item in obj) {
    //console.log(obj[item])
//}

//Ex3
//const obj = {
    //nume: 'Leon',
    //age: 50,
    //color: 'brown',
    //place: 'Amazonia',
//}
//const obj1 = { ...obj,nume: 'Bear', place: 'Taiga',weight: 100}

//console.log(obj,obj1)


//Ex4
//const numberArr = [4,3,6,8,9,7]

//const arrSum = numberArr.reduce((acc, curr, index, arr) => {
   // console.log('acc:',acc, 'cure:' ,curr, 'index:' ,index)

   // return curr + 1

//}, 0)
//console.log('result is:', arrSum)

const arr = [1,2,3,4,5,6]

const func = (list) => {
    return list.reduce((acc,cur )=> [...acc,cur + 1], [])
}
console.log(func(arr))
 
    

    




 
    
        

