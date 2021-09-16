const args = process.argv.slice();
console.log(process.argv);
for (let index = 0; index < args.length; index++) {
    if (isNaN(args[index])) {
        console.log(`Arg[${index}] is ${args[index]}`);
       
    }
}
var resultado;

if(args[2] == '-'){    
    
    console.log("subtração");
    resultado = args[3] - args[4];
    console.log('Resultado = ' + resultado );

}else{
    
    var resultadoSum;
    console.log("soma");
    resultadoSum = parseInt(args[3]) + parseInt(args[4]);
    console.log('Resultado = ' + resultadoSum );
}