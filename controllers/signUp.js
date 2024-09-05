const prisma = require("../prisma");
const bcrypt = require("bcryptjs");

const createUser = async (req, res, next) => {
  const { name, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
      },
    });
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = createUser;
