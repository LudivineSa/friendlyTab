import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser, IUserInput } from '../../utils/types';
import { registerUser } from '../services/registerUser';

interface IUseUserDataStore {
    user: IUser | null;
    setUser: (user: IUser) => void;
    registerUser: (user: IUserInput) => void;
    isSuccess: boolean | null;
    setIsSuccess: (isSuccess: boolean) => void;
}

export const useUserDataStore = create<IUseUserDataStore>()(
    persist(
      (set) => ({
        isSuccess: null,
        setIsSuccess: (isSuccess: boolean) => set(() => ({ isSuccess })),
        setUser: (user: any) => set(() => ({ user })),
        user: null,
        registerUser: (user: IUserInput) => {
          registerUser(user).then((result) => {
            console.log("good")
            set(() => ({ isSuccess: true }));
          }).catch((error) => {
            console.log("erreur", error.message)
            set(() => ({ isSuccess: false }));
          })
      }})
  )
);

const useUserData = () => {
    const { user, isSuccess, setIsSuccess } = useUserDataStore()
    console.log(isSuccess)
    return { user, isSuccess, setIsSuccess } as const;
}

export default useUserData
