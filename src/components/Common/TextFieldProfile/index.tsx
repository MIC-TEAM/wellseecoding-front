import TextField from '@material-ui/core/TextField'

type Props = {
  text: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default function TextFields({ text, type, onChange, placeholder }: Props) {
  return <TextField label={text} type={type} onChange={onChange} placeholder={placeholder} />
}
