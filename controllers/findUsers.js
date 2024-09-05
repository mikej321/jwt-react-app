const prisma = require("../prisma");

const findUsers = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    res.json({
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = findUsers;
