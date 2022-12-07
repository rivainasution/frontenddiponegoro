import {Button} from 'react-bootstrap';
import Tables from '../../../../components/Table';
import SetupData from './SetData';

function SetupList({title, onClick}){
    function handleNewSetup(){
        return onClick("newsetup");
    }

    function handleNewLogo(){
        return onClick("newlogo")
    }
    
    return(
        <div className='text-center bg-light p-3 rounded border'>
            <div className='d-flex flex-row justify-content-start'>
                <Button variant='primary' onClick={handleNewSetup} >Create New Setup</Button>
                <Button variant='success' className='mx-3' onClick={handleNewLogo} >Create New Logo</Button>
            </div>
            <h6>{title}</h6>
            <Tables tables={<SetupData onClick={onClick}/>} />
        </div>                  
    );
}

export default SetupList;