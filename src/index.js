module.exports = function solveEquation(equation) {
  // your implementation

    var split=equation.split(' '),
    a=+split[0],
    b=+(split[3]+split[4]),
    c=+(split[7]+split[8]);
    
    var Desc=Math.pow(b,2) - 4*a*c;
    
    var sol1=Math.round((-b +Math.sqrt(Desc))/(2*a));
    var sol2=Math.round((-b -Math.sqrt(Desc))/(2*a));
    var solutions=[];
    
    solutions.push(sol1);
    solutions.push(sol2);
    
    solutions.sort();
    
    return solutions;
}
