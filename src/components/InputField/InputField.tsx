import React, { useState } from 'react';
import {
	FormGroup,
	ControlLabel,
	InputGroup,
	Icon,
	Input
} from 'rsuite'

import './InputField.scss';

const InputField = (props: {
	error: boolean;
	label: React.ReactNode;
	index: number;
	tooltip: string;
	icon: any; // FIXME: set correct type
}) => {
	const [focused, setEditing] = useState(false);
	const toggleEditing = () => {
		setEditing(!focused);
	};

	return (
		<FormGroup
			className={`input-field ${focused ? '-active' : ''}`}
			onClick={toggleEditing}
		>
			<ControlLabel className='label'>
				{props.label}
			</ControlLabel>
			<InputGroup className='input' style={{ width: 246 }}>
				<InputGroup.Addon>
					<Icon icon={props.icon} />
				</InputGroup.Addon>
				<Input />
			</InputGroup>
		</FormGroup>
	)
}

export default InputField;