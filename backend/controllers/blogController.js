import { Blog } from "../models/blogModel.js";

const postBlog = async (req, res) => {
    const { title, imgURL, description,blogLink } = req.body;

    if (!title || !imgURL || !description || !blogLink) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields"
        });
    }

    try {
        const newPost = await Blog.create({
            title,
            imgURL,
            description,
            blogLink
        });

        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            newPost
        });

    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Error creating blog"
        });
    }
};

const getallBlogs = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        const skip = (page - 1) * limit;

        const query = Blog.find()
            .select('title imgURL description blogLink createdAt')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const [blogs, total] = await Promise.all([
            query.exec(),
            Blog.countDocuments()
        ]);

        const totalPages = Math.ceil(total / limit);

        res.status(200).json({
            success: true,
            data: {
                blogs,
                currentPage: page,
                totalPages,
                total
            }
        });
    } catch (e) {
        console.error('Error fetching blogs:', e);
        res.status(500).json({
            success: false,
            message: "Error fetching blogs"
        });
    }
};

export {
    postBlog,
    getallBlogs
};