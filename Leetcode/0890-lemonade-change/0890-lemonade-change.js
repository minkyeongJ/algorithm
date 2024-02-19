/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let answer = true;
    const change = new Map();
    change.set('5', 0);
    change.set('10', 0);
    change.set('20', 0);

    bills.forEach((pay)=>{
        if(pay === 5){
            change.set('5', change.get('5') + 1);
        }
        
        else if(pay === 10){
            if(change.get('5') >= 1) {
                change.set('10', change.get('10') + 1);
                change.set('5', change.get('5') - 1);
            }else{
                answer = false;
            }
        }
        
        else if(pay === 20){
            if(change.get('5') >= 1 && change.get('10') >= 1){
                change.set('20', change.get('20') + 1);
                change.set('5', change.get('5') - 1);
                change.set('10', change.get('10') - 1);
            }
            else if(change.get('5') >= 3 ){
                change.set('20', change.get('20') + 1);
                change.set('5', change.get('5') - 3);
            }
            else{
                answer = false;
            }
        }        
    });

    return answer;
};