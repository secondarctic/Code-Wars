var min = function(list){
    //list.sort( (a, b) => {return a - b;});
    list.sort( (a, b) => a > b ? 1 : -1);
    return list[0];
}

var max = function(list){
    //list.sort( (a, b) => {return b - a;});
    list.sort( (a, b) => a < b ? 1 : -1); 
    return list[0];
}