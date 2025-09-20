import Loader from "../components/Loader";
import { useDeleteBlogMutation, useGetBlogsQuery } from "../redux/services/blogsApi";

const Blogs = () => {
    const { data: blogs = [], error, isLoading } = useGetBlogsQuery()
    const [deleteBlog] = useDeleteBlogMutation()

    const handleDelete = async (id) => {
        await deleteBlog(id)
    }
    return (
        <>
            <div className="max-w-7xl mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {isLoading && <Loader />}
                    {
                        blogs.map((blog, index) => (
                            <div key={index} className="p-4 rounded-md shadow-md">
                                <h3>{blog.name}</h3>
                                <p>{blog.email}</p>
                                <div className="">
                                    <p>{blog.age}</p>
                                    <p>{blog.city}</p>
                                </div>
                                <div className="py-2 flex justify-between items-center">
                                    <button

                                        className="cursor-pointer outline-none px-2 py-1 rounded-sm bg-blue-800 text-white font-bold">Edit</button>
                                    <button onClick={() => handleDelete(blog.id)} className="cursor-pointer outline-none px-2 py-1 rounded-sm bg-red-800 text-white font-bold">Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        </>
    )
}

export default Blogs;