import {Container, Row, Col} from "react-bootstrap" 
import { useState } from "react";
import PasswordForm from "./PasswordForm";
import GeneratedPassword from "./GeneratedPassword";
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/key-icon.png"

function App() {


  const [password, setPassword] = useState("?")
  
  const symbols = ["@","!","#","%","$","£"]
  const numbers = [1,2,3,4,5,6,7,8,9]
  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const handleSubmit = (e) => {
    e.preventDefault();

    let terms = {
      len: e.target.length.value,
      sym: e.target.symbol.value,
      num: e.target.number.value,
      low: e.target.lowercase.value,
      upp: e.target.uppercase.value
    }

    console.log(terms)

    const fiftyChars = [];
    const pickFrom = [];

    if(terms.sym == "yes"){
      pickFrom.push(symbols);
    }else{}

    if(terms.num == "yes"){
      pickFrom.push(numbers)
    }else{}
    
    if(terms.low == "yes"){
      pickFrom.push(lowercase);
    }else{}

    if(terms.upp == "yes"){
      pickFrom.push(uppercase)
    }else{}

    console.log(pickFrom)

    const newPassChars = [];

    for(let i = 0; i < 50; i++){

      const selectArr = Math.floor(Math.random() * pickFrom.length)

      console.log(pickFrom[selectArr].length)
   

      let selectVal;

      for(let k = 0; k < pickFrom[selectArr].length; k++){
        selectVal = Math.floor(Math.random() * pickFrom[selectArr].length)
      }


      newPassChars.push(pickFrom[selectArr][selectVal])


      const newPass = [];

      switch(terms.len) {
        case "18":

        for(let m = 0; m <= 18; m++){
          newPass.push(newPassChars[m])
        }

          break;
        case "26":

          for(let m = 0; m <= 26; m++){
            newPass.push(newPassChars[m])
          }
  
          break;
          case "34":
         
          for(let m = 0; m <= 34; m++){
             newPass.push(newPassChars[m])
          }
    
          break;

        case "45":
          
        for(let m = 0; m <= 45; m++){
          newPass.push(newPassChars[m])
         }

          break;
          case "50":
          
            for(let m = 0; m <= 50; m++){
              newPass.push(newPassChars[m])
           }

          break;
        default:

      } 


      const newPassString = newPass.join("")

      setPassword(newPassString)

    }

    console.log(newPassChars)

    
  
  }


  return (
    <div className="content">
    <Container>
      <Row className="mt-3">

        <Col xs={8}> <h1 className="mb-3 mt-3">Secure Password Generator</h1></Col>
        <Col xs={2}> <img src={logo} className="center-block mt-2" /></Col>
        <Col xs={2}></Col>

        <p className="mt-3 mb-3">Welcome to the password generator. Fill out the form below and you will be generated a new, secure password. Use the generator as many times
  as you would like to generate as many passwords as you need!
</p>

        </Row>

      <PasswordForm handleSubmit={handleSubmit} />
      <GeneratedPassword password={password} />
    </Container>
      <hr className="divider" />
      <Container>
        <h4 className="mb-3">Some Tips For You..</h4>

        <p>
          1. DO NOT USE letters and numbers in sequence (examples are qwerty,
          abcde, 12345, asdf). 
        </p>

        <p>
          2. NEVER use your birthdate. We know it is easy to remember, but it
          will also be easy for others to crack your password, especially if
          your birthdate information is available online.
        </p>

        <p>
          3. COMBINE letters, numbers and symbols that at least has eight
          characters. Having different combinations will make your password
          tougher to crack.
        </p>

        <p>
          4. REFRAIN using your name. Some websites have this kind of catch
          error to prevent you from using a part of your name as your password.(
          “Eva” and “Alex” are the most common names in passwords.)
        </p>

        <p>
          5. AVOID using any of your personal/families information. Cyber thieves can
          easily check these details online. Steer clear using your family
          members’ name and birthday, pet name, address or hobbies.
        </p>

        <p>
          6. DO NOT use common passwords, such as P@$$w0rd,
          password, 1234567890, ioveyou, etc.
        </p>

        <p>
          7. STOP reusing your passwords. Every time you create a new password,
          do not use previously used and similar passwords from other accounts.
        </p>

        <p>
          8. STRONGER passwords can also be a long passphrase where you combine
          multiple words into a long string of at least 15 characters (ex:
          correcthorsebatterystaple, randommousebottlepickle)
        </p>

        <p>
          9. REFRAIN from changing just one digit whenever you update your
          password every 60-90 days. (ex: MyG@laxyPassw0rd01,
          MyG@laxyPassw0rd02, MyG@laxyPassw0rd03)
        </p>

        <p>
          10. USE a Password Generator and a password manager. Do not store them
          in notepads and sticky notes.
        </p>

        <p><a href="https://news.trendmicro.com/2021/08/23/10-tips-to-create-stronger-passwords-2021/">Source</a></p>
      </Container>
    </div>
  );

}

export default App;
