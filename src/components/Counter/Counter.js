import React from 'react'


function Counter(props) {
    let gaveTekst
        if(props.count === 0){
            gaveTekst = "Du har ingen gaver på handlelisten"
        } if(props.count === 1) {
            gaveTekst = ` gave gjenstår å kjøpe`
        } else {
            gaveTekst = ` gaver gjenstår å kjøpe`
        }

    
    return(

        <div className="counterStyle">
           <p><span>{props.count}</span>{gaveTekst}</p>
            <p>{props.price}</p>
        </div>
    )
        
}

export default Counter
