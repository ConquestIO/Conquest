import React from 'react'

export default function Dropdown() {

    return (
        <DropdownWrapper action={props.action}>
          <StyledLabel htmlFor="services">
            {props.formLabel}
          </StyledLabel>
          <StyledSelect id="services" name="services">
            {props.children}
          </StyledSelect>
          <StyledButton type="submit" value={props.buttonText} />
        </DropdownWrapper>
    );
}







