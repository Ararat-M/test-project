import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from '@mui/material';;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "fit-content"
    },
  },
};

interface SelectProps{
  default: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: {value: string, name: string}[];
}

export function CustomSelect(props: SelectProps) {
  return (
    <div>
      <FormControl sx={{ m: 1, width:"fit-content" }}>
        <Select
          displayEmpty
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
          input={<Input disableUnderline />}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            {props.default}
          </MenuItem>
          {props.options.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}