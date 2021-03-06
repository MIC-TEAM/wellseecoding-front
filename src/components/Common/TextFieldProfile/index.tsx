import TextField from '@material-ui/core/TextField'

type Props = {
  text: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyUp?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: string | number
  name?: string
}

export default function TextFields({ text, type, onChange, placeholder, value }: Props) {
  return <TextField label={text} type={type} onChange={onChange} placeholder={placeholder} value={value} />
}
