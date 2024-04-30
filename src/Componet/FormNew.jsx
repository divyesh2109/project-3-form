import React, { useState } from 'react';

function Form() {
    const [obj, setObj] = useState({});
    const [array, setArray] = useState([]);
    let [count, setCount] = useState(0);

    const saveData = (e) => {
        e.preventDefault();

        if (obj.id) {
            let index = array.findIndex(x => x.id === obj.id);
            array.splice(index, 1, obj);
            setArray([...array]);
        } else {
            setCount(count + 1);
            obj.id = count + 1;
            setObj({...obj});
            setArray([...array, obj]);
        }
        setObj({});
    };

    const dateChange = (e) => {
        const selectedDate = e.target.value;
        const formattedDate = selectedDate.split('-').reverse().join('-');
        setObj({ ...obj, birthdate: formattedDate });
        
    }
    
     const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setObj({ ...obj, image: event.target.result });
        };
        reader.readAsDataURL(file);
    };

    const getInputValue = (e) => {
        const { name, value} = e.target;
      
            setObj({ ...obj, [name]: value });  
    };
    
    const deleteData = (id) => {
        let index = array.findIndex(x => x.id === id);
        array.splice(index, 1);
        setArray([...array]);
    };

    return (
        <>
            <h2 className='text-center'>Form Handling</h2>

            <form className='w-50 mx-auto p-3 rounded' style={{ backgroundColor: 'lightgray' }}>
                <h4>Registration</h4>
                <div>
                    <label className='w-100'>First Name</label>
                    <input type="text" className='w-100 border-0 rounded py-1 px-2 mb-2 abc' name='fname' value={obj.fname ?? ''} onChange={getInputValue} />
                </div>
                <div>
                    <label className='w-100'>Middle Name</label>
                    <input type="text" className='w-100 border-0 rounded py-1 px-2 mb-2' name='mname' value={obj.mname ?? ''} onChange={getInputValue} />
                </div>
                <div>
                    <label className='w-100'>Last Name</label>
                    <input type="text" className='w-100 border-0 rounded py-1 px-2 mb-2' name='lname' value={obj.lname ?? ''} onChange={getInputValue} />
                </div>
                <div>
                    <label className='w-100'>Email</label>
                    <input type="email" className='w-100 border-0 rounded py-1 px-2 mb-2' name="email" value={obj.email ?? ''} onChange={getInputValue} />
                </div>
                <div>
                    <label className='w-100'>Password</label>
                    <input type="password" className='w-100 border-0 rounded py-1 px-2 mb-2' name="password" value={obj.password ?? ''} onChange={getInputValue} />
                </div>
                <div className="mt-2">
                    <label className="w-100">City</label>
                    <select name="city" className="w-100 border-0 rounded py-1 px-2 mb-2" value={obj.city ?? ''} onChange={getInputValue}>
                        <option value="" selected disabled>-- Select city --</option>
                        <option value="Surat">Surat</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                    </select>
                </div>
                <div>
                    <label className='w-100'>Birth Date</label>
                    <input type="date" className='w-100 border-0 rounded py-1 px-2 mb-2' name="birthdate"  onChange={dateChange}/>
                </div>
                <div className="mt-2">
                    <label className="w-100">Gender</label>
                    <div>
                        <input type="radio" value="Male" name="gender" checked={obj.gender === "Male"} onChange={getInputValue} /> Male
                    </div>
                    <div>
                        <input type="radio" value="Female" name="gender" checked={obj.gender === "Female"} onChange={getInputValue} /> Female
                    </div>
                </div>
                <div className="mt-2">
                    <label className="w-100">Vehicle</label>
                    <div>
                        <input type="checkbox" value="Bike" name="bike" checked={obj.gender === "Bike"} onChange={getInputValue} /> Bike
                    </div>
                    <div>
                        <input type="checkbox" value="Car" name="car" checked={obj.gender === "Car"} onChange={getInputValue} /> Car
                    </div>
                </div>
                <div className="mt-2">
                    <label className='w-100'>Profile</label>
                    <input type="file" accept="image/*" className='w-100 border-0 rounded py-1 px-2 mb-2' name="image" onChange={handleFileChange} />
                </div>
                {obj.image && (
                    <div className="mt-2">
                        <img src={obj.image} alt="Selected" className="previewImage" width="80px" height="80px" />
                    </div>
                )}
             
                <input type='submit' className='btn btn-success border-0 mt-4' style={{ backgroundColor: 'purple' }} onClick={saveData} value='Save' />
            </form>

            <table className='table mt-3 myTable'>
                <thead>
                    <tr>
                        <th className='bg-dark text-white'>ID</th>
                        <th className='bg-dark text-white'>Profile</th>
                        <th className='bg-dark text-white'>First Name</th>
                        <th className='bg-dark text-white'>Middle Name</th>
                        <th className='bg-dark text-white'>Last Name</th>
                        <th className='bg-dark text-white'>Email</th>
                        <th className='bg-dark text-white'>City</th>
                        <th className='bg-dark text-white'>Password</th>
                        <th className='bg-dark text-white'>Birth Date</th>
                        <th className='bg-dark text-white'>Gender</th>
                        <th className='bg-dark text-white'>Vehicle</th>
                        <th className='bg-dark text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((element) => (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>
                                {<img src={element.image} alt="Profile" className="profileImage" width="40px" height="40px" />}
                            </td>
                            <td>{element.fname}</td>
                            <td>{element.mname}</td>
                            <td>{element.lname}</td>
                            <td>{element.email}</td>
                            <td>{element.city}</td>
                            <td>{element.password}</td>
                            <td>{element.birthdate}</td>
                            <td>{element.gender}</td>
                            <td>{element.vehicle}</td>
                            <td>
                                <button className='btn btn-warning py-0 me-2' onClick={() => setObj(element)}>EDIT</button>
                                <button className='btn btn-danger py-0' onClick={() => deleteData(element.id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Form;
