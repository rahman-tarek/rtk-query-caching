import { useForm } from "react-hook-form"
import { useAddBlogMutation } from "../redux/services/blogsApi"

const AddNew = () => {
    const [addBlog] = useAddBlogMutation()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const blog = {
            id: toString(Date.now()),
            ...data
        }
        await addBlog(blog);
    }

    return (
        <>
            <div className="w-1/3 mx-auto mt-10">
                <div className="p-8 rounded-md shadow-md">
                    <h2 className="text-center text-3xl font-bold p-4">Add new user</h2>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-2"
                    >
                        <label htmlFor="">Name</label>
                        <input {...register("name", { required: true, maxLength: 20 })} className="outline-none bg-gray-300 py-1 px-4 rounded-md" />
                        <label htmlFor="">Email</label>
                        <input {...register("email", { pattern: /^\S+@\S+$/i })} className="outline-none bg-gray-300 py-1 px-4 rounded-md" />
                        <label htmlFor="Age">Age</label>
                        <input type="number" {...register("age", { min: 18, max: 99 })} className="outline-none bg-gray-300 py-1 px-4 rounded-md" />
                        <label htmlFor="">City</label>
                        <input {...register("city")} className="outline-none bg-gray-300 py-1 px-4 rounded-md" />
                        <input type="submit" className="outline-none bg-blue-800 py-1 px-4 rounded-md text-white font-bold" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNew;