import { makeStyles } from '@material-ui/core/styles'

const buttonStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    '&:hover': {
      background: '#f0f0f0',
    }
  }
}));

export default buttonStyles