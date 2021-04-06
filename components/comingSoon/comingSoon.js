import { Typography } from '@material-ui/core'

const ComingSoon = () => {
  return (
    <div className="comingsoon-container">
      <Typography className="text">Coming Soon</Typography>
      <style>{`
      .comingsoon-container {
        text-align: center;
        margin-top: 28%;
      }

      .text {
        font-family: "Muli", sans-serif;
        font-size: 3rem;
        font-weight: 500;
      }
      `}</style>
    </div>
  )
}

export default ComingSoon
