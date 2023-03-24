export default props => {

    var nums = []
    for(let i = 0; i < 7; i++){
        var num = parseInt(Math.random() * 60 + 1);
        if(nums.indexOf(num) == -1){
            nums.push(num)
        }
        else{
            i--;
        }
    }

    return (
        <div>
            <button onClick={e => props.luckNum(nums)}>Gerar Sorte</button>
        </div>
    )
}