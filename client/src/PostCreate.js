import React, {useState} from 'react';
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');
    
    const onSubmit = async (Event) =>{
    Event.preventDefault();
    
    await axios.post('http://localhost:4000/posts', {
        title,
});

    setTitle('');

};
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <div className="form-group">
                    <label>Title </label>    
                <input 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                className="form-control"/>
                </div>
                <br/>
                
            <button className="btn btn-primary">Submit</button>
            <p id='postSuccess'>test</p>
            <br/>

            </form>
        </div>
    );

};

export default PostCreate;