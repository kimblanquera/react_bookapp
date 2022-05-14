import { compare, hash, genSalt } from 'bcryptjs';

export class PasswordUtil {
    private static passwordSalt?: string;
    private static saltRounds: number = parseInt(process.env.PASSWORD_SALT);

    private static async getPasswordSalt() {
        if(!PasswordUtil.passwordSalt) {
            PasswordUtil.passwordSalt = await genSalt(PasswordUtil.saltRounds);
        }

        return PasswordUtil.passwordSalt;
    }

    static async hashPassword(rawPassword: string): Promise<string> {
        const salt: string = await PasswordUtil.getPasswordSalt();
        return await hash(rawPassword, salt);
    }

    static async comparePassword(rawPassword: string, hashedPassword: string) {
        const hashRaw: string = await PasswordUtil.hashPassword(rawPassword);
        return compare(hashRaw, hashedPassword, function(err, res) {
            if(err) {
                console.log(err);
                return false;
            }
            else {
                return res;
            }
        });
    }
}