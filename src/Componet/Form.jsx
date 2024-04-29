import React, { useMemo, useState } from 'react'

function FormHandling() {
    const [obj, setobj] = useState({})
    const [array, setarray] = useState([])
    let [count, setcount] = useState(0)

    const saveData = (e) => {
        e.preventDefault();

        if (obj.id) {
            let index = array.findIndex(x => x.id == obj.id);
            array.splice(index, 1, obj);
            setarray([...array])
        } else {
            setcount(count + 1);
            obj.id = count + 1;
            setobj({ ...obj })
            setarray([...array, obj])
        }
        setobj({})
    }

    const getInputValue = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }

    const deleteData = (id) => {
        let index = array.findIndex(x => x.id == 15);
        array.splice(index, 1);
        setarray([...array])
    }

    return (
        <>

            <h2 className='text-center'>FormHandling</h2>

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
                    <p className='m-0'>Gender</p>
                    <input type="radio" id="html" name="gender" value={obj.gender ?? ''} />
                    <label for="html">Male</label><br />
                    <input type="radio" id="html" name="gender" value={obj.gender ?? ''} />
                    <label for="html">Female</label>
                </div>
                <input type='submit' className='btn btn-success border-0 mt-4' style={{ backgroundColor: 'purple' }} onClick={saveData} value='Save' />
            </form>

            <table className='table mt-3 myTable'>
                <thead>
                    <tr>
                        <th className='bg-dark text-white'>ID</th>
                        <th className='bg-dark text-white'>First Name</th>
                        <th className='bg-dark text-white'>Middle Name</th>
                        <th className='bg-dark text-white'>Last Name</th>
                        <th className='bg-dark text-white'>Gender</th>
                        <th className='bg-dark text-white'>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        array.map((element, index) => {
                            return <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.fname}</td>
                                <td>{element.mname}</td>
                                <td>{element.lname}</td>
                                <td>{element.gender}</td>
                                <td>
                                    <button className='btn btn-warning py-0 me-2' onClick={() => setobj(element)}>EDIT</button>
                                    <button className='btn btn-danger py-0' onClick={() => deleteData(element.id)}>DELETE</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default FormHandling