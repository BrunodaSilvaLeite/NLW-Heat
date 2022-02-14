import PrismaClient from "../prisma"


class ProfileUserService {
    async execute(user_id: string){
      const user = await PrismaClient.user.findFirst({
         where: {
             id: user_id,
         }
      });

      return user;
    }
}

export {ProfileUserService}