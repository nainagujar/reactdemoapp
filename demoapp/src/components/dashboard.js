import React from 'react' ;

class dashboard extends React.Component{
    render(){
        return(
            <div>
                <h2 style={{textAlign: 'center' , color:'Blue'}}>Dashboard</h2>
             <button className='ui primary button' style={{margin:'10px'}}>Add hostel</button><br/>
             <button className='ui button info-button' style={{margin:'10px'}}>Create hostel</button><br/>
             <button className='ui secondary button' style={{margin:'10px'}}>Edit hostel</button><br/>
             <button className='ui button negative' style={{margin:'10px'}}>Delete hostel</button><br/>
            </div>
        )
    }
}

export default dashboard ;