import React from "react";
import CircularProgress from '@mui/material/CircularProgress';


const Loader = ()=> {

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  


    return(
        
        <div style={{width:"200px" , margin:"60px"}} >
        <CircularProgress variant="determinate" value={progress} />
                    <p>Realizado Analisis</p>
        </div>
    );
}

export default Loader