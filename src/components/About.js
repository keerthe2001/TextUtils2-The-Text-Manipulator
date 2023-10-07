import React, { useState } from 'react'

export default function About(props) {

    return (
    <>
    <div className='container my-5' >

    <div className='fs-3' style={{color: props.Mode === 'light'?'black':'white',backgroundColor: props.Mode=== 'light'?'white':'#091a4d'}}>
        Tabular Values
    </div>
    
    <table className="table" >
  <thead >
    <tr >
      <th style={{color: props.Mode === 'light'?'black':'white',backgroundColor: props.Mode=== 'light'?'white':'#091a4d'}} scope="col">#</th>
      <th style={{color: props.Mode === 'light'?'black':'white',backgroundColor: props.Mode=== 'light'?'white':'#091a4d'}} scope="col">First</th>
      <th style={{color: props.Mode === 'light'?'black':'white',backgroundColor: props.Mode=== 'light'?'white':'#091a4d'}} scope="col">Last</th>
      <th style={{color: props.Mode === 'light'?'black':'white',backgroundColor: props.Mode=== 'light'?'white':'#091a4d'}} scope="col">Handle</th>
    </tr>
  </thead>
  <tbody style={{color: props.Mode === 'light'?'black':'white',backgroundColor: props.Mode=== 'light'?'white':'#091a4d'}}>
    <tr>
      <th style={{color: props.Mode === 'light'?'black':'white',backgroundColor: props.Mode=== 'light'?'white':'#091a4d'}} scope="row">1</th>
      <td style={{color: props.Mode === 'light'?'black':'white',backgroundColor: props.Mode=== 'light'?'white':'#091a4d'}}>Mark</td>
      <td style={{color: props.Mode === 'light'?'black':'white',backgroundColor: props.Mode=== 'light'?'white':'#091a4d'}}>Otto</td>
      <td style={{color: props.Mode === 'light'?'black':'white',backgroundColor: props.Mode=== 'light'?'white':'#091a4d'}}>@mdo</td>
    </tr>
    
  </tbody>
</table>

</div>

    </>
  )
}
