import React, {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import ApiLogin from "../Api/Login";
import './Scan.css';
import Loader from './Loader';
import TypingEffect from './TypingEffect';






const Scan = () => 
{

    const [visage , setVisaje] = useState(true) 
    const [result, setResult] = useState({scan_type: '', command: '', options: '' , target:''});
    const [scanResult, setscanResult]= useState("")
    const [finalResult, setfinalResult]= useState("")

    const[componente,setComponente] = useState(null)

    const [estado,setEstado] = useState("")

   
 


   

    const handleInputChange = (event) => {
      setResult({
        ...result,
        [event.target.name]: event.target.value
      });
    };

    const borrar   = () => {

        setResult({scan_type: '', command: '', options: '' , target:''});
    }


    const peticion = async (bodyFormData) => {

     

      setVisaje(false)
        ApiLogin.scan(bodyFormData).then((response)=>{

           setscanResult(response.data.scan_id);


           console.log(response.data.scan_id)
          }).catch((error)=>{
         
          })
          
          setComponente(<Loader/>)
   
    };

    const Peticion2 = async (pe) => {
      ApiLogin.resultScan(pe).then((response)=>{
        console.log(response.data)
        setfinalResult(response.data)
       }).catch((error)=>{
      
       })
    }

    useEffect(() => { 


      const pe = {scan_id: scanResult} 
      if(scanResult != ""){

        // timeout para que de tiempo a que se cree el scan y se pueda hacer el get
        setTimeout(() => {
          Peticion2(pe);
          setComponente(<div className='form'> hola</div>)
        }, 11000);
      
       
      }
    

    }, [scanResult]);





    const   handleSubmit = async (e) => {

        e.preventDefault();

        const per = {scanType:result.scan_type , command : result.command , options : result.options , schedule : "now" , target : result.target }

        peticion(per);
      

    }
 
    

  return (
    <Card sx={{ minWidth: 1080 }}>
    <CardContent style={{ display:'flex', justifyContent:'center' }}>

 
   
   { visage ?
      <div className='form'>

              <div> 
                <InputLabel id="demo-simple-select-label">Scan type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={result.scan_type}
                  label="ve"
                  style={{width: 200}}
                  name='scan_type'
                  onChange={handleInputChange}
                >
                  <MenuItem value={"single"}>One Host or Ip</MenuItem>
                  <MenuItem value={"range"}>Ip Range</MenuItem>
                
                </Select>
              </div> 

              <div>

                 <InputLabel id="demo-simple-select-label">Command</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={result.command}
                    label="Scan type"
                    style={{width: 200}}
                    name='command'
                    onChange={handleInputChange}
                  >
                    <MenuItem value={"normal"}> Normal Scan</MenuItem>
                    <MenuItem value={"fast "}>Fast Scan</MenuItem>
                    <MenuItem value={"ping"}>Ping scan</MenuItem>
                    <MenuItem value={"port"}>Port scan</MenuItem>
                    <MenuItem value={"osinfo"}>Scan OS information and Traceroute</MenuItem>
                    <MenuItem value={"osdetect"}>OS Detection</MenuItem>
                  </Select>
              </div>

              <div>

                  <InputLabel id="demo-simple-select-label">Options</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={result.options}
                    label="scan"
                    style={{width: 200}}
                    name='options'
                    onChange={handleInputChange}
                  >
                    <MenuItem value={"pn"}>No ping</MenuItem>
                    <MenuItem value={"sn"}>No port scan</MenuItem>
                    <MenuItem value={"f"}>fast scan</MenuItem>
                    <MenuItem value={"p"}>All Ports</MenuItem>
                    <MenuItem value={"n"}>no DNS lookup</MenuItem>

                  </Select>
                </div>

                <div>
                <InputLabel id="demo-simple-select-label">Host or Ip</InputLabel>
                <TextField id="outlined-basic" 
                label="Outlined"
                variant="outlined" name='target'
                 value={result.target}  
                 onChange={handleInputChange}
                 style={{width: 200}} 
                 />
                
                </div>


              

                  <div>
                  <Button style={{margin: "10px"}} variant="contained" color="success" onClick={handleSubmit}>
                  Success
                  </Button>
                  </div>

                  <div>
                  <Button style={{margin: "10px"}} variant="outlined" color="error" onClick={borrar}>
                    Clear
                </Button>
                  </div>

                  <TypingEffect text="nachito"></TypingEffect>

    </div>

   :  componente == null ? <p>espere</p> : componente}
    
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default Scan