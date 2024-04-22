import Navbar from "../Navbar/Navbar";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffee = {name, quantity, supplier, taste, category, details, photo}
        
        // Send data to server side
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Successfull',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
                form.reset();
            }
        })
    }

    return (
        <div>
            <Navbar/>
            <h1 className='text-2xl font-bold text-center'>All Coffee</h1>
            <div className="container mx-auto px-5">
                <form onSubmit={handleSubmit} className="mt-10 space-y-3">
                    <div className="flex flex-col md:flex-row justify-center md:gap-10 space-y-3 md:space-y-0">
                        <input className="w-full bg-blue-100 px-3 py-2" placeholder="Coffee Name" type="text" name="name" />
                        <input className="w-full bg-blue-100 px-3 py-2" placeholder="Coffee Quantity" type="number" name="quantity" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center md:gap-10 space-y-3 md:space-y-0">
                        <input className="w-full bg-blue-100 px-3 py-2" placeholder="Supplier Name" type="text" name="supplier" />
                        <input className="w-full bg-blue-100 px-3 py-2" placeholder="Taste" type="text" name="taste" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center md:gap-10 space-y-3 md:space-y-0">
                        <input className="w-full bg-blue-100 px-3 py-2" placeholder="Category" type="text" name="category" />
                        <input className="w-full bg-blue-100 px-3 py-2" placeholder="Details" type="text" name="details" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center md:gap-10 space-y-3 md:space-y-0">
                        <input className="w-full bg-blue-100 px-3 py-2" placeholder="Photo URL" type="text" name="photo" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center md:gap-10 space-y-3 md:space-y-0">
                        <input className="w-full bg-blue-400 px-3 py-2 font-bold text-white"type="submit" value="Add Coffee" />
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;