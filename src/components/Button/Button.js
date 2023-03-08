import PropTypes from "prop-types"
import { Button as MaterialButton } from "@mui/material"

export const Button = (props) => {
    return  (
        <MaterialButton variant="contained">
            {props.text}
        </MaterialButton>
    )
}

Button.propTypes = {
    text: PropTypes.string
}