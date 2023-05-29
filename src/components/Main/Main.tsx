import * as React from 'react';

import { IInputFieldProps, IMainLogic, IMainProps } from './MainInterface';
import useMainLogic from './MainLogic';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert/Alert';


const InputField: React.FC<IInputFieldProps> = (props) => {

    const LETTERS_REGEX = /^[a-zA-Z]+$/;

    const validation = (newValue: string) => {
        if (newValue.length <= 3 && LETTERS_REGEX.test(newValue)) {
            return newValue.toUpperCase()
        } else
            return newValue.slice(0, -1)
    }
    const date = props.timeDate ? props.timeDate.toLocaleDateString() : "";
    const time = props.timeDate ? props.timeDate.toLocaleTimeString() : "";

    return (
        <div>
            <TextField
                label="Базовая валюта"
                variant="outlined"
                value={props.baseCurrency.value}
                onChange={(event) => props.baseCurrency.onChange(validation(event.target.value))}
                inputProps={{ maxLength: 12 }}
            />
            <TextField
                label={`Данные на ${date}`}
                variant="outlined"
                value={time}
                inputProps={{ maxLength: 12 }}
                disabled
            />

            <Button
                sx={{ height: 56 }}
                variant="outlined"
                onClick={props.refresh}
            >
                Обновить
            </Button>
        </div>


    )
}



const Main: React.FC<IMainProps> = (props) => {
    const logic: IMainLogic = useMainLogic(props);

    console.log(props.propsToMain.notFoundCurrecy);
    

    return <>
        <List
            sx={{
                width: '100%',
                maxWidth: "100vh",
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: "100vh",
                '& ul': { padding: 0 },
            }}
        >

            <ListSubheader >
                <InputField
                    baseCurrency={props.propsToMain.baseCurrency}
                    timeDate={props.propsToMain.timeDate}
                    refresh={props.propsToMain.refresh}
                />
            </ListSubheader>



            {
                logic.arrayRates.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`1 ${props.propsToMain.baseCurrency.value} равен ${item.value} ${item.name}`} />
                    </ListItem>
                ))
            }
            {
                props.propsToMain.notFoundCurrecy &&
                <Alert severity="success">Введенная валюта не найдена</Alert>
            }

        </List>

    </>;
}

export default Main;