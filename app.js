/* 
Funciones a elaborar:

* animateByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerdas que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

*/

/*
 Ejecutar el comando <' node app.js '> para ver el resultado del codigo

*/


const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁",
]




const animateByChart = (ms) => {
    // let lineaActual = 0;
    // let caracterActual =0;
    // const caracter = () =>{
    //     if(lineaActual < asciiHeart.length){
    //         const linea = asciiHeart[lineaActual].split('');

    //     if (caracterActual < linea.length){
    //         process.stdout.write(linea[caracterActual]);
    //         caracterActual++;
    //     }else{
    //         console.log();
    //         lineaActual++;
    //         caracterActual = 0;
    //     }
    //     setTimeout(caracter,ms);
    // }

    //AQUÍ ABAJO ESTA LA DEPURACIÓN

    let lineaActual = 0;

    asciiHeart.forEach((linea, lineaIndex) => {

        linea.split('').forEach((caracter, lineaCaracter) => {
            setTimeout(() => { 
                process.stdout.write(caracter);
                if(lineaCaracter === linea.split('').length - 1){
                   process.stdout.write('\n');
                }
            }, ms * lineaActual);
            lineaActual++;
        })
    })
    }

// const animateByLine = (ms) => {
//     //recorre lineas y
//     asciiHeart.forEach((line, heart) => {
//         setTimeout(() => {
//             console.log(line)
//         }, heart * ms)
//     })
// }

animateByChart(100);