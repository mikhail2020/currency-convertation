import * as React from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { IConverterLogic, IConverterProps } from './ConverterInterface';
import useConverterLogic from './ConverterLogic';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';


const LETTERS_REGEX = /^\d+(\.\d{0,2})?$/;


const Converter: React.FC<IConverterProps> = (props) => {
    const logic: IConverterLogic = useConverterLogic(props);

    const [fromName, setFromName] = React.useState<string>('');
    const [fromValue, setFromValue] = React.useState<number>(0);
    const [toName, setToName] = React.useState<string>('');
    const [toValue, setToValue] = React.useState<number>(0);

    useEffect(() => {
        const result = fromValue * props.rates[toName];
        setToValue(Number(result.toFixed(2)));
    }, [props.rates, fromName, fromValue, toName, toValue])

    const handleChangeValue = (value: string) => {
        if (LETTERS_REGEX.test(value) || value === "") {
            setFromValue(Number(value));
        }
    }

    const handleSwap = ()=>{
        setFromName(toName)
        setToName(fromName)
    } 

    return <>
        <Box
            sx={{
                display: 'flex',
                alignItems: "flex-end"
            }}
        >
            <TextField
                label="Конвертировать"
                variant="outlined"
                value={fromValue ? fromValue : ""}
                onChange={(event) => handleChangeValue(event.target.value)}
            />

            <FormControl sx={{ width: '100px' }} >
                <InputLabel>из</InputLabel>
                <Select
                    sx={{ width: '100' }}
                    value={fromName}
                    label="из"
                    onChange={(event: SelectChangeEvent) => setFromName(event.target.value as string)}
                >
                    {logic.arrayRates.map((el, index) => <MenuItem key={index} value={el.name}>{el.name}</MenuItem>)}
                </Select>
            </FormControl>

            <FormControl sx={{ width: '100px' }} >
                <InputLabel>в</InputLabel>
                <Select
                    sx={{ width: '100' }}
                    value={toName}
                    label="в"
                    onChange={(event: SelectChangeEvent) => setToName(event.target.value as string)}
                >
                    {logic.arrayRates.map((el, index) => {
                        if (el.name === fromName) {
                            return <MenuItem key={index} value={el.name} sx={{ display: 'none' }}>{el.name}</MenuItem>
                        } else {
                            return <MenuItem key={index} value={el.name}>{el.name}</MenuItem>
                        }
                    })}
                </Select>
            </FormControl>

            <TextField
                label="Результат"
                variant="outlined"
                value={toValue ? toValue : ""}
            />
            <Box sx={{ width: "55px", height: '55px', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                <Tooltip 
                    title="Поменять валюты местами"
                >
                    <AutorenewIcon
                        fontSize='large'
                        sx={{ cursor: 'pointer' }}
                        onClick={handleSwap}
                    />
                </Tooltip>

            </Box>
        </Box>
    </>;
}

export default Converter;