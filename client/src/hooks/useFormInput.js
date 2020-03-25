import {useState} from 'react'

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return{
    value,
    onChange: (e) => setValue(e.target.value),
    clear: () => setValue('')
  }
}

export default useFormInput