import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { addItemList, removeItemList } from '../Redux/Actions/index';


function CheckListContainer(props) {
    const [Aasiyachecked, setAasiyaChecked] = useState(false);
    const [Luvleenchecked, setLuvleenChecked] = useState(false);
    const [Reychecked, setReyChecked] = useState(false);
    const [Caylachecked, setCaylaChecked] = useState(false);
    const [Deveedaaschecked, setDeveedaasChecked] = useState(false);
    const [Obaseychecked, setObaseyChecked] = useState(false);
    const [Xeniechecked, setXenieChecked] = useState(false);
    const [Ezequielchecked, setEzequielChecked] = useState(false);
    const [Aaronchecked, setAaronChecked] = useState(false);
    const [Jelenachecked, setJelenaChecked] = useState(false);

    useEffect(() => {
        console.log('props', props.state); 
        // props.state.map(data=>{
        //     Aasiyachecked && data.flagValue === 'Aasiyachecked' && setAasiyaChecked(false);
        // })   
    }, [props])

    return (
        <div>
            <h4>Portugal</h4>
            <div>
            <label>
                <input type="checkbox" checked={Aasiyachecked} onChange={() => {setAasiyaChecked(!Aasiyachecked);!Aasiyachecked ? props.addItemList('Portugal','Aasiya Jayavant',true, 'Aasiyachecked') : props.removeItemList('Portugal','Aasiya Jayavant',false, 'Aasiyachecked')}} />
                Aasiya Jayavant
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" checked={Luvleenchecked} onChange={() => {setLuvleenChecked(!Luvleenchecked);!Luvleenchecked ? props.addItemList('Portugal','Luvleen Lawrence',true) : props.removeItemList('Portugal','Luvleen Lawrence',false)}} />
                Luvleen Lawrence
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" checked={Reychecked} onChange={() => {setReyChecked(!Reychecked);!Reychecked ? props.addItemList('Portugal','Rey Mibourne',true) : props.removeItemList('Portugal','Rey Mibourne',false)}} />
                Rey Mibourne
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" checked={Caylachecked} onChange={() => {setCaylaChecked(!Caylachecked);!Caylachecked ? props.addItemList('Portugal','Cayla Brister',true) : props.removeItemList('Portugal','Cayla Brister',false)}} />
                Cayla Brister
            </label>
            </div>

            <h4>Nicaragua</h4>
            <div>
            <label>
                <input type="checkbox" checked={Deveedaaschecked} onChange={() => {setDeveedaasChecked(!Deveedaaschecked);!Deveedaaschecked ? props.addItemList('Nicaragua','Deveedaas Nandi',true) : props.removeItemList('Nicaragua','Deveedaas Nandi',false)}} />
                Deveedaas Nandi
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" checked={Obaseychecked} onChange={() => {setObaseyChecked(!Obaseychecked);!Obaseychecked ? props.addItemList('Nicaragua','Obasey Chidy',true) : props.removeItemList('Nicaragua','Obasey Chidy',false)}} />
                Obasey Chidy
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" checked={Xeniechecked} onChange={() => {setXenieChecked(!Xeniechecked);!Xeniechecked ? props.addItemList('Nicaragua','Xenie Dolezelova',true) : props.removeItemList('Nicaragua','Xenie Dolezelova',false)}} />
                Xenie Dolezelova
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" checked={Ezequielchecked} onChange={() => {setEzequielChecked(!Ezequielchecked);!Ezequielchecked ? props.addItemList('Nicaragua','Ezequiel Dengra',true) : props.removeItemList('Nicaragua','Ezequiel Dengra',false)}} />
                Ezequiel Dengra
            </label>
            </div>

            <h4>Marshall Islands</h4>
            <div>
            <label>
                <input type="checkbox" checked={Aaronchecked} onChange={() => {setAaronChecked(!Aaronchecked);!Aaronchecked ? props.addItemList('Marshall Islands','Aaron Almaraz',true) : props.removeItemList('Marshall Islands','Aaron Almaraz',false)}} />
                Aaron Almaraz
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" checked={Jelenachecked} onChange={() => {setJelenaChecked(!Jelenachecked);!Jelenachecked ? props.addItemList('Marshall Islands','Jelenachecked',true) : props.removeItemList('Marshall Islands','Jelena Denisova',false)}} />
                Jelena Denisova
            </label>
            </div>
        </div>
    )
}
// const mapDispatchToProps = dispatch => {
//     return {
//         filteredItemList : year => dispatchEvent(filteredItemList(year))
//     }
// }
const mapDispatchToProps = {
    addItemList,
    removeItemList

}
const mapStateToProps = state => {
    return {
        state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckListContainer);
