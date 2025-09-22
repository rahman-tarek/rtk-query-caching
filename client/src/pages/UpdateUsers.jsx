import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router"
import { useGetBlogQuery, useUpdateBlogMutation } from "../redux/services/blogsApi"


const UpdateUsers = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { id } = useParams();
    console.log(id)
    const { data: blog = [], error, isLoading } = useGetBlogQuery(id);
    const [updateBlog] = useUpdateBlogMutation()
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            await updateBlog({ id, ...data });
            navigate("/")
        } catch (error) {
            console.error("Failed to update the blog:", error);
        }
    }

    if (blog && !isLoading && !error && !reset.called) {
        reset(blog);
        reset.called = true;
    }

    return (
        <>
            <div className="w-1/3 mx-auto mt-10">
                <div className="p-8 rounded-md shadow-md">
                    <h2 className="text-center text-3xl font-bold p-4">Update your info</h2>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-2"
                    >
                        <label htmlFor="">UserId</label>
                        <input {...register("id")} className="outline-none bg-gray-300 py-1 px-4 rounded-md" />
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

export default UpdateUsers;