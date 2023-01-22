//getting bill value
let bill=  parseInt(document.querySelector('#bill-amount').value);
console.log(bill)
console.log(typeof bill);

//getting tip

let  tip=0.0;
let buttons=document.querySelectorAll('.tip-button');
// console.log(buttons);
buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        console.log(button.value);
        tip = button.value;
        buttons.forEach(ele=>{
            ele.classList.remove('tip-button-active')
        })
        button.classList.add('tip-button-active')
    })


})
console.log(tip);
console.log(typeof tip);






//increment-decrement-functionality
let NoOfPerson=0;
function increment(){
    NoOfPerson++;
 document.querySelector('.people').innerHTML=NoOfPerson;
}
function decrement(){
    if(NoOfPerson>0){
        NoOfPerson--;
        document.querySelector('.people').innerHTML=NoOfPerson;
    }
    

}
console.log(NoOfPerson);
console.log(typeof NoOfPerson);




// let totalPersons=parseInt(document.querySelector('.people').innerHTML);
// console.log(totalPersons);

let tipAmount=0.0;
tipAmount = parseFloat((bill * tip) / 100);
console.log(tipAmount);

// let tipAmountPerPerson=tipAmount/NoOfPerson;



// console.log(tipAmountPerPerson);
// let totalBillPerPerson=(bill/NoOfPerson) +(tipAmount/NoOfPerson) 
// console.log(totalBillPerPerson);

let generateBill=document.querySelector('.generate');


generateBill.addEventListener('click',()=>{
    document.querySelector('.tip-amount').innerHTML=((tip*bill)/100)/NoOfPerson;
    document.querySelector('.total').innerHTML=(bill/NoOfPerson)+ ((tip*bill)/100)/NoOfPerson;
})

