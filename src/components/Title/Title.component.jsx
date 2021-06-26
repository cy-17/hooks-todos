import React from 'react'

export const Title=({children,record})=>{
    return(
        <h4 
         style={{textAlign:"left"}} 
         className={record.completed==='true'? 'true': 'false'}>
            {children}
        </h4>
    )
}