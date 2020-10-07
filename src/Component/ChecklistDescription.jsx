import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeItemList } from '../Redux/Actions/index';


function ChecklistDescription(props) {
    useEffect(() => {
    }, [props])
    return (
        <div>       
            {props.state.map((data, index) => (
                <div key={index}>
                        <div style={{maxWidth:"400px"}}>
                            <div className="input-icons"> 
                            <div className="input-container">                                
                                <input className="input-field" type="text" value={data.label} readOnly disabled  />
                                <i className="fa fa-times icon" onClick={()=>props.removeItemList(data.labelHeading,data.label,false)}></i>
                            </div>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    )
}

const mapDispatchToProps = {
    removeItemList

}

const mapStateToProps = state => {
    return {
        state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChecklistDescription);
