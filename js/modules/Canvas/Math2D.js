Math.__proto__.getDerivative = function(f,x0){
    var dx = 0.000001;
    return (f(x0+dx)-f(x0))/dx;
};





