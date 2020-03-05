// Remueve el segundo elemento de la lista. Usamos parentNode cuando NO conocemos el padre.
/*
let element = document.getElementById("secondElement");
element.parentNode.removeChild(element);
---------------------------------------------------------------------------------------*/

// Remueve el segundo elemento de la lista. Usamos childNodes[n] cuando Sí conocemos el padre.
let list = document.getElementById("parentLI"); 
list.removeChild(list.childNodes[3]); 

//ACLARACION: Usamos el [3] para borrar el 2do elemento, pues se consideran los espacios:
/*      <ul id="parentLI">
0 -->
1 -->   <li>First element</li>
2 -->
3 -->   <li>Second element</li>  <--[3]
4 -->
5 -->   <li>Third element</li>
6 -->
        </ul>
*/