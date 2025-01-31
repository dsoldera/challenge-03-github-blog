import { forwardRef, InputHTMLAttributes, LegacyRef } from "react"
import { Container } from "./styles"

type InputSearchProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef(function Input(
  { ...rest}:InputSearchProps, 
  ref: LegacyRef<HTMLInputElement>, 
  ) {
  return (
    <Container>
      <input
        ref={ref} 
        type="text"
        { ...rest} 
      />
    </Container>
  )
})
