import PropTypes from 'prop-types';
import { FaEye, FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Coffee = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, supplier, taste, photo } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div className='shadow-lg p-5 flex rounded-lg border'>
            <div className='w-[200px]'>
                <img className='w-[60%]' src={photo} alt="card image" />
            </div>
            <div className='flex-grow flex flex-col justify-center'>
                <h1 className='text-xl font-bold text-start'>{name}</h1>
                <p className='font-bold'>{taste}</p>
                <p className='font-bold'>{supplier}</p>
            </div>
            <div className='flex flex-col justify-between '>
                <button className='px-5 py-2 bg-blue-200 rounded-lg'><FaEye /></button>
                <Link to={`/updateCoffee/${_id}`}><button className='px-5 py-2 bg-blue-200 rounded-lg'><FaPen /></button></Link>
                <button onClick={() => handleDelete(_id)} className='px-5 py-2 bg-blue-200 rounded-lg'><MdDelete /></button>
            </div>
        </div>
    );
};

Coffee.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.object,
    setCoffees: PropTypes.func
};

export default Coffee;