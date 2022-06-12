import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const propriedades = [
  {
    id: '10001',
    nome: "Agrotis 1",
    cnpj:  "04.909.987/0001-89"
  },
  {
    id: '10002',
    nome: "Agrotis 2",
    cnpj:  "04.909.987/0001-88"
  },
  {
    id: '10003',
    nome: "Agrotis 3",
    cnpj:  "04.909.987/0001-87"
  },
  {
    id: '10004',
    nome: "Agrotis 4",
    cnpj:  "04.909.987/0001-86"
  },
  {
    id: '10005',
    nome: "Agrotis 4",
    cnpj:  "04.909.987/0001-85"
  },
];

export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateSingleOptions = () => {
    return propriedades.map((option: any) => {
      return (
        <MenuItem key={option.id} value={option.id}>
          {option.nome}<br/>
          {option.cnpj}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"} variant="standard" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
