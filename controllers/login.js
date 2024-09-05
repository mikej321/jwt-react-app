const prisma = require("../prisma");
const generateAccessToken = require("./sign");

async function login(req, res = response) {
  const { id } = req.params;
  // Ideally search the user in a database and validate password
  // You'd throw an error if they couldn't be found

  const user = await prisma.user.findUnique({
    where: id,
  });

  if (user) {
    const token = generateAccessToken(user?.username);
    res.json({
      token: `Bearer ${token}`,
    });
  } else {
    res.sendStatus(401);
  }
}

module.exports = login;
