const rotateLeft = (arr,num) => {
    const arr1 = arr.filter(inte => inte <= num);
    const arr2 = arr.filter(inte => inte > num);
    return [...arr2,...arr1];
};