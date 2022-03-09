function IsNumber(num) {
    if (!num || !parseInt(num)) return No;
    
    let arr = num.toString().split('');

    if ('3' in arr && !('5' in arr)) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i+1] - arr[i] < 1) {
                return "No";
            }
            
        }
        return "YES";
        
    }
    return "No";
}
IsNumber(1346)
