const BlogsTile = ({ title, }) => {
    return (
        <div className="flex border-[20px] ">
            <input type="checkbox" />
            <p>{title}</p>
            <img src={`https://savefiles.org/${blogs.image}?shareable_link=522`} alt="title" />
        </div>
    )
}

export default BlogsTile;