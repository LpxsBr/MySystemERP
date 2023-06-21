const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const handle = async (req, res) => {
    const { title, url, user_id } = req.body
    try {
        const createLink = await prisma.linkUrl.create({
            data: {
                title,
                url,
                user_id
            }
        })
        res.status(200).json({
            message: 'registro criado com sucesso!',
            data: createLink
        })
    } catch (error) {
        res.status(401).json({
            message: 'não foi possível criar registro!',
            error: error
        })
    }

}

export default handle;