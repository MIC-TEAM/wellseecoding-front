import React from 'react'
import TextField from '@material-ui/core/TextField'

type Props = {
  text: string
}

export default function TextFields({ text }: Props) {
  return <TextField label={text} />
}
