function IsNumberGrowing(num) {
    if (!num || !parseInt(num)) return false;
    
    let number = num.toString();
    let arr = number.split('');
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] - arr[i] < 1) {
            return false;
        }
        
    }
       
    return true;
}
IsNumberGrowing(13478)
