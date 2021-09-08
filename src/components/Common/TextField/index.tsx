import TextField from '@material-ui/core/TextField'

type Props = {
  text: string
  type: string
  typeName: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextFields({ text, typeName, type }: Props) {
  return <TextField label={text} name={typeName} type={type} />
}
