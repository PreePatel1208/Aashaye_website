import React from 'react'
import { Button } from '@mui/material'

const ButtonComponent = ({text,color,variant}) => {
  return (
    <Button
    style={{
        borderRadius: 10,
        backgroundColor: "#21b6ae",
        padding: "10px 20px",
        fontSize: "15px"
    }}
    variant="contained"
    >
    Submit
</Button>
  )
}

export default ButtonComponent