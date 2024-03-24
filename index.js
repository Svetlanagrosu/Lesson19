


//Ex4 Creati o functie care primeste un array de cuffre si va intoarce acelas array
      //doar ca fiecarui element ii va fi adauga 1.

Ex 4.2 (corect)
const arr = [1,2,3,4,5,6]

const func = (list) => {
    return list.reduce((acc,cur )=> [...acc,cur + 1], [])
}
console.log(func(arr))
 
    

    




 
    
        

