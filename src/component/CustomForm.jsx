import {useState} from 'react'


const CustomForm = () => {
    const [people, setPeople] = useState("");
    const [username, setUsername] = useState("");
    const [emailaddress, setEmailaddress] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [genger, setGenger] = useState("");
    const [maritarialStatus, setMaritarialStatus] = useState("");
    const [address, setAddress] = useState("");
    const [messages, setMessages] = useState("");
    const [citygenship, setCitygenship] = useState("yes");
    const [skill, setSkill] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event)=> {
        event.preventDefault()
        console.log('jewel')

    }
   
  return (
    <div>
        <div style={{marginLeft:'35%', marginTop:'5%'}}>
            <form onSubmit={onSubmit}>
            <div>
                <input type="text" name="people" value={people} onChange={(prev)=>setPeople(prev.target.value)} placeholder='People Name'  />
            </div><br/>
            <div>
                <input type="text" name="username" value={username} onChange={(prev)=>setUsername(prev.target.value)} placeholder='User Name'  />
            </div><br/>
            <div>
                <input type="email" name="emailaddress" value={emailaddress} onChange={(prev)=>setEmailaddress(prev.target.value)} placeholder='People Email Address' />
            </div><br/>
            <div>
                <input type="text" name="mobilenumber" value={mobilenumber} onChange={(prev)=>setMobilenumber(prev.target.value)} placeholder='Mobile Number' />
            </div><br/>
            <div>
                <select name="genger" value={genger} onChange={(prev)=>setGenger(prev.target.value)}>
                    <option value="">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Women">Women</option>
                    <option value="Common">Common Gender</option>
                </select>
            </div><br/>
            <div>
                <select name="maritarialStatus" value={maritarialStatus} onChange={(prev)=>setMaritarialStatus(prev.target.value)}>
                    <option value="">Choose Meritarial Status</option>
                    <option value="Married">Married</option>
                    <option value="Women">UnMarried</option>
                </select>
            </div><br/>
            <div>
                <textarea placeholder='Address' value={address} onChange={(prev)=>setAddress(prev.target.value)} name="address"></textarea>
            </div><br/>
            <div>
                <textarea placeholder='Messages' value={messages} onChange={(prev)=>setMessages(prev.target.value)} name='messages'></textarea>
            </div><br/>
            <div>
                <label>Are you citygenship in europe?</label>
                <input type='radio' name="citygenship" echecked value='yes' checked={citygenship === 'yes'} onChange={(prev)=>setCitygenship(prev.target.value)} />
                <input type='radio' name="citygenship" value='no'  checked={citygenship === 'no'} onChange={(prev)=>setCitygenship(prev.target.value)}/>
                
            </div><br/>
             <div>
                <p>Please Select your skill?</p>
                <input type='checkbox' name="skill" value='Html' onChange={(prev)=>setSkill(prev.target.value)} />
                <label>Html</label><br/>
                <input type='checkbox' name="skill" value='PHP'   onChange={(prev)=>setSkill(prev.target.value)}/>
                <label>PHP</label><br/>
                <input type='checkbox' name="skill" value='Javascript'   onChange={(prev)=>setSkill(prev.target.value)}/>
                <label>Javascript</label><br/>
                <input type='checkbox' name="skill" value='Laravel'  onChange={(prev)=>setSkill(prev.target.value)}/>
                <label>Laravel</label><br/>
                <input type='checkbox' name="skill" value='Codeigniter'   onChange={(prev)=>setSkill(prev.target.value)}/>
                <label>Codeigniter</label><br/>
                <input type='checkbox' name="skill" value='React'   onChange={(prev)=>setSkill(prev.target.value)}/>
                <label>React</label><br/>
                <input type='checkbox' name="skill" value='NodeJS'   onChange={(prev)=>setSkill(prev.target.value)}/>
                <label>NodeJS</label><br/>
                <input type='checkbox' name="skill" value='Express'   onChange={(prev)=>setSkill(prev.target.value)}/>
                <label>Express</label><br/>
                <input type='checkbox' name="skill" value='GraphQl'   onChange={(prev)=>setSkill(prev.target.value)}/>
                <label>GraphQl</label><br/>
                
            </div><br/>
            <div>
                <input type="password" name="password" value={password} onChange={(prev)=>setPassword(prev.target.value)} placeholder='Password' />
            </div><br/>
            <div>
                <button type="submit">Form Submit</button>
            </div><br/>
            </form>
        </div>

    </div>
  )
}

export default CustomForm