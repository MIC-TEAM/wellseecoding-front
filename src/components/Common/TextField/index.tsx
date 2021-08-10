import TextField from '@material-ui/core/TextField'

type Props = {
  text: string
  type: string
}

export default function TextFields({ text }: Props) {
  return <TextField label={text} />
}
