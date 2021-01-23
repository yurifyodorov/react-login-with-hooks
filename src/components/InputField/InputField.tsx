import React from 'react';
import {
	FormGroup,
	ControlLabel,
	InputGroup,
	Icon,
	Whisper,
	Tooltip,
	Input
} from 'rsuite'

import './InputField.scss';

const InputField = () => {
	// const [value, setValue] = useState('');
  // const [focused, setFocused] = useState(false);
	// const [valid, setValid] = useState(false);
	
  return (
		<Whisper trigger="focus" placement="bottomStart" speaker={<Tooltip>Required</Tooltip>}>
			<FormGroup 
				// className={`field ${focused || value ? '-active' : ''} ${valid ? '-valid' : ''}`}
				className='field'
			>
				<ControlLabel className='label'>
					{/* {label} */}
					label
				</ControlLabel>
				<InputGroup className='input' style={{ width: 246 }}>
					<InputGroup.Addon>
						<Icon icon='avatar' />
					</InputGroup.Addon>
						<Input placeholder="Default Input" />
				</InputGroup>
			</FormGroup>
		</Whisper>
  )
}

export default InputField;