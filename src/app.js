import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoum = ['the', 'our'];
let adj = ['great', 'big'];
let noum = ['jogger', 'racoon'];
let extensions = [".com", ".es", ".net"];



const joinWords2 = () => {
  let dominios = [];
  for (let e in pronoum) {
    for (let i in adj) {
      for (let a in noum) {
        for (let ext in extensions) {
          let dominio = pronoum[e] + adj[i] + noum[a] + extensions[ext];
          //console.log(dominio);
          dominios.push(dominio);
        }
      }
    }
  }
  return dominios;
}


window.onload = function () {
  //write your code here

  const dominios = joinWords2();
  for (let e in dominios){
    console.log(dominios[e]);
  }
  
};

