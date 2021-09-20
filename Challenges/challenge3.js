
    function sumPlusMinus(nums){
        let plus=0,minus=0;
        for(let i=0;i<nums.length; i++){
            if(nums[i]>=0){
                plus=plus + nums[i];
            }
            else{
                minus += nums[i]
            }
        }
        return{Plus : plus, Minus:minus}
    }
    console.log(sumPlusMinus([10, -12, 30, -1, -8, 0, 14, -33, 20]));
