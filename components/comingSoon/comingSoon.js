import { Typography } from '@material-ui/core'

const ComingSoon = props => {
  return (
    <div className="container">
      <Typography className="text">Coming Soon</Typography>
      <style>{`
      .container {
        text-align: center;
      }

      .text {
        margin-top: 30%;
        font-family: "Muli", sans-serif;
        font-size: 3rem;
        font-weight: 500;
      }
      `}</style>
    </div>
  )
}

export default ComingSoon