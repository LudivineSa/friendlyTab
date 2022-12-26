import React from 'react';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useFormContext } from 'react-hook-form';

interface ITextInputProps {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
}

export const TextInput = (props: ITextInputProps) => {
    const { name, label, type, required} = props;

    const theme = useTheme();
    const { register, formState: { errors } } = useFormContext();

    return (
        <TextField sx={{backgroundColor:"#fff", color:theme.palette.primary.main, borderRadius:"12px"}}
            {...register(name, { required })}
            name={name}
            label={label}
            type={type}
            error={Boolean(errors[name])}
            helperText={errors[name]?.message as string}
            required={required}
        />
    );
};