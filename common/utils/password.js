import bcrypt from 'bcryptjs';

export const hash = (pwd) => {
  const salt = bcrypt.gentSaltSync(10);
  return bcrypt.hashSync(pwd, salt);
};

export const check = (pwd, sh) => bcrypt.compareSync(pwd, sh);
