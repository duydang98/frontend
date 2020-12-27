import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import {gdate} from "../helper/getDate";
//import axios from 'axios';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userAction';
function Register(props) {

    const [name,setName] = useState('');
    const [birthday,setBirthday] = useState(gdate());
    const [sex,setSex] = useState('');
    const [phone,setPhone] = useState(0);
    const [address,setAddress] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [avatar,setAvatar] = useState();
    const dispatch = useDispatch();
    const userRegister = useSelector(state=>state.userRegister);
    const {loading,userInfo,error} = userRegister;
    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[userInfo,props.history,redirect]);

    const onRegister = async (e)=>{

            e.preventDefault();
            const data = new FormData();
            data.append("name_user",name);
            data.append("birthday_user",birthday);
            data.append("sex_user",sex);
            data.append("phone_user",phone);
            data.append("address_user",address);
            data.append("email",email);
            data.append("password",password);
            data.append("avatar_user",avatar);

            dispatch(register(data));
    
            // const rs = await axios.post("/user/register",data);
            // if(rs){
            //     alert("Sign Up Success");
            //     props.history.push("/signin");
            // }else{
            //     alert("Sign Up Failed");
            //     props.history.push("/register");
            // }
            
            
    }
    

    return (
        <Content>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox> {error}</MessageBox>}
            
            
            
             <form className="form-horizontal form-register" onSubmit={onRegister}>
                <h2>Registration Form</h2>
                <div className="form-group">
                    <label for="firstName" className="col-sm-3 control-label">Full Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="firstName" placeholder="Full Name" className="form-control" onChange={(e)=>setName(e.target.value)} required autofocus/>
                        <span className="help-block">Ex: Đặng Phúc Duy,...</span>
                    </div>
                </div>
                <div className="form-group">
                    <label for="birthDate" className="col-sm-3 control-label">Date of Birth</label>
                    <div className="col-sm-9">
                        <input type="date" id="birthDate" onChange={(e)=>setBirthday(e.target.value)} className="form-control" required/>
                    </div>
                </div>
                
                <div className="form-group">
                    <label className="control-label col-sm-3">Gender</label>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio" id="femaleRadio" name="gender" onChange={(e)=>setSex(e.target.value)} value="Female" required/>Female
                                </label>
                            </div>
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio" id="maleRadio" name="gender" onChange={(e)=>setSex(e.target.value)} value="Male" required/>Male
                                </label>
                            </div>
                            
                        </div>
                    </div>
                </div> 
                <div className="form-group">
                    <label for="phone" className="col-sm-3 control-label">Phone</label>
                    <div className="col-sm-9">
                        <input type="text" id="phone" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)} className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="address" className="col-sm-3 control-label">Address</label>
                    <div className="col-sm-9">
                        <input type="text" id="address" placeholder="Address" onChange={(e)=>setAddress(e.target.value)} className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="email" className="col-sm-3 control-label">Email</label>
                    <div className="col-sm-9">
                        <input type="text" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="password" className="col-sm-3 control-label">Password</label>
                    <div className="col-sm-9">
                        <input type="password" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="avatar" className="col-sm-3 control-label">Avatar</label>
                    <div className="col-sm-9">
                        <input type="file" id="avatar" accept=".jpg" 
                            onChange={e=>{
                                const file = e.target.files[0];
                                setAvatar(file);
                            }}
                        className="form-control"/>
                    </div>
                </div>
                
               
                <div className="form-group">
                    <div className="col-sm-9 col-sm-offset-3">
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </div>
                </div>
                
            </form>
        </Content>
    );
}

export default Register;