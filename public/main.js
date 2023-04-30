// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
let instr1 = document.getElementsByClassName('instr1')
let instr2 = document.getElementsByClassName('instr2')
let instr3 = document.getElementsByClassName('instr3')

let currentSale = 0
let balance = document.querySelector('.saleOfTheDay')

// Buttons//
const btn1 = document.getElementsByClassName('btn1')[0]; // Use index 0 to select the first element
const btn2 = document.getElementsByClassName('btn2')[0]; // Use index 0 to select the first element
const btn3 = document.getElementsByClassName('btn3')[0]; // Use index 0 to select the first element

function purchase(saleAmount) {
  fetch('messages', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'msg': saleAmount
    })
  }).then(function (response) {
    window.location.reload()
  })
  balance.innerText = parseInt(balance.innerText) + saleAmount;
}

// Sale Function//

btn1.addEventListener('click', () => { purchase(249); });
btn2.addEventListener('click', () => { purchase(300); });
btn3.addEventListener('click', () => { purchase(400); });

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const msg = this.parentNode.parentNode.childNodes[1].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'msg': msg
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
