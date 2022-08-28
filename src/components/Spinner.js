import {Spinner} from 'react-bootstrap';
import { SpinnerContainer } from './commonProp';


export function CustomSpinner(){
	
	return(
        <SpinnerContainer>
		    <Spinner animation="grow" className='customSpinner' />
        </SpinnerContainer>
	)	
};

export function CustomSpinnerSmall(){
	
	return(
        <SpinnerContainer>
		    <Spinner animation="grow" className='customSpinner' size="sm"/>
        </SpinnerContainer>
	)	
};

