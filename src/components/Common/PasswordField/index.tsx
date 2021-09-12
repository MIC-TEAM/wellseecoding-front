import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

interface State {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

type Props = {
  title: string
  passwordText: string
  typeTitle: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PasswordField({ title, passwordText, typeTitle, onChange }: Props) {
  const [values, setValues] = useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const handleChange = (key: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [key]: event.target.value })
    onChange(event)
  }

  return (
    <FormControl>
      <InputLabel htmlFor="standard-adornment-password">{title}</InputLabel>
      <Input
        id="standard-adornment-password"
        type="password"
        value={values.password}
        onChange={handleChange('password')}
        placeholder={passwordText}
        name={typeTitle}
      />
    </FormControl>
  )
}
