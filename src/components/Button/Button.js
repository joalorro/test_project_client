import PropTypes from "prop-types"
import { Button as MaterialButton } from "@mui/material"

const defaultHandleClick = (e) => console.log(e)

export const Button = (props) => {
    return  (
        <MaterialButton variant="contained" onClick={props.onClick}>
            {props.text}
        </MaterialButton>
    )
}

Button.propTypes = {
    text: PropTypes.string
}