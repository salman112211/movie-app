import React from 'react';

const SearchBox =(props)=>{

    return(
        <div className='col col-sm-4'>
            <input className='form-control'
            value={props.value}
            onChange={(event)=>props.setSerchvalue(event.target.value)}
               placeholder='Type To search..'></input>

        </div>
    )
}


export default SearchBox;