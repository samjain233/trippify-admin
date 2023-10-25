import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type propType = {
  label: string;
  placeholder: string;
  type?: string;
  helper?: string;
  formData?: any;
  stateFunc?: any;
  property: string;
};

const DataInput = (props: propType) => {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    const p = props.property;
    props.formData[p]=value;
    props.stateFunc({ ...props.formData});
  }, [value]);
  return (
    <>
      <div className="mt-4">
        <FormControl>
          <FormLabel>{props.label}</FormLabel>
          <Input
            type={props.type ? props.type : "text"}
            placeholder={props.placeholder}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            value={value}
          />
          {props.helper && <FormHelperText>{props?.helper}</FormHelperText>}
        </FormControl>
      </div>
    </>
  );
};

export default DataInput;
