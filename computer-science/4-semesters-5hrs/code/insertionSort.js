let insertSort = [5,3,6];

const insertionSory = (insertSort) => {
    for(let i = 0; i < insertSort.length; i++ ){

        for(let j = 0; j < i; j++){
            console.log(insertSort);
            if(nums[i] < nums[j]){
                const splices = nums.splice(i, 1);
                nums.splice(j, 0, splices[0]);
            console.log(insertSort);

            }
            console.log(insertSort);

        }
        console.log(insertSort);

    }
    console.log(insertSort);

}
