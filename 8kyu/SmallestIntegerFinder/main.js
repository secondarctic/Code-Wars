class SmallestIntegerFinder {
    findSmallestInt(args) {
       let result = args[0];
       for(let i = 0; i < args.length; i++) {
           //result = Number(Math.min(result,args[i]));
           result < args[i] ? result = result : result = args[i]; 
       }
      return result;   
    }
  }