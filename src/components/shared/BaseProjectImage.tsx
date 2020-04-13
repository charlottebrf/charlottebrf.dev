import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const Bordered = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  border: 5px solid ${NordicPalette.snowStorm.white};
`

export const BaseProjectImage = styled.img`
  box-sizing: border-box;
  border-radius: 10px;
  border: 5px solid ${NordicPalette.snowStorm.white};
  width: 100%;
  height: auto;
  max-width: 500px;
  max-height: 500px;
  vertical-align: middle;
`
