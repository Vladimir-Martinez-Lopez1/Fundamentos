let arreglo = [[1,2,3],[4,5,6],[7,8,9]]
//los document.write los agregue para que el resultado se visualizara en pantalla.
document.write("Matriz original", "<br>", "<br>");

for(let i=0, j=0; i<3; i++){
    document.write(arreglo[i][j], arreglo[i][j+1], arreglo[i][j+2],);
    document.write("<br>");
    console.log(arreglo[i][j], arreglo[i][j+1], arreglo[i][j+2]);
}

console.log("\n","salida 1","\n");
document.write("<br>","Salida 1","<br>","<br>");

for (let i=2,j=2; i >=0; i-- ){   
    document.write(arreglo[i][j], arreglo[i][j-1], arreglo[i][j-2]);
    document.write("<br>");
    console.log(arreglo[i][j], arreglo[i][j-1], arreglo[i][j-2]);      
}

console.log("\n","salida 2","\n");
document.write("<br>","Salida 2","<br>","<br>");

for(let i=0,j=0;j<3;j++){
    document.write(arreglo[i][j], arreglo[i+1][j], arreglo[i+2][j]);
    document.write("<br>");
    console.log(arreglo[i][j], arreglo[i+1][j], arreglo[i+2][j]); 
    }

console.log("\n","salida 3","\n");
document.write("<br>","Salida 3","<br>","<br>");

for(let i=2,j=2;j>=0;j--){
    document.write(arreglo[i][j], arreglo[i-1][j], arreglo[i-2][j]);
    document.write("<br>");
    console.log(arreglo[i][j], arreglo[i-1][j], arreglo[i-2][j]); 
    }