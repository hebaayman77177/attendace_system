const db = require("./models");
const TempUser = db.tempUser;




// delete user that not varified in the last 2 days
async function deleteNotVarefiedUser() {

    const now = new Date();
    await TempUser.destroy({
        where: {
            created_at: {

                [Op.lt]: now.getDate() - 2
            }
        }
    })
}
setInterval(deleteNotVarefiedUser, 24 * 60 * 60 * 1000);