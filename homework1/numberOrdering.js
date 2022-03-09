function changeNumberPlaces(num) {
    if (!Number.parseInt(num)) return 0;

    let arr = String(num).split('').map((n) => Number(n), 1);
    
    if (arr.length && arr.length === 0) return 0;
    
    let firstItem = arr[0];
    let lastItem = arr[arr.length - 1];
    

    arr[0] = lastItem;
    arr[arr.length-1] = firstItem;
    

    return parseInt(arr.join(''));
}

changeNumberPlaces(97533)
