import type LoginData from '@/models/LoginData';
import type LoginResponseData from '@/models/LoginResponseData';
import type User from '@/models/User';
import { loginUser, logoutUser } from '@/Services/AuthService';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const LOCAL_KEY = "auht_app";

// type AythStatus = "idle" | "authenticating" | "authenticated" | "anonymous"; ;


type AuthState = {
    accessToken: string | null;
    user: User | null;
    authStatus: boolean;
    authLoading: boolean;
    login: (loginData: LoginData) => Promise<LoginResponseData>;
    logout: (silent?: boolean) => void;
    checkLogin: () => boolean | undefined;
}


const useAuth = create<AuthState>()(
    persist(
        (set, get) => ({
            accessToken: null,
            user: null,
            authStatus: false,
            authLoading: false,
            login: async (loginData) => {
                console.log("Started login");
                set({ authLoading: true })
                try {
                    const loginResponseData = await loginUser(loginData);
                    console.log(loginResponseData);
                    set({
                        accessToken: loginResponseData.accessToken,
                        user: loginResponseData.user,
                        authStatus: true,
                    });
                    return loginResponseData;
                }
                catch (error) {
                    throw error;
                }
                finally {
                    set({ authLoading: false })
                }
            },

            logout: async () => {
                try {
                    set({ authLoading: true }),
                        await logoutUser();

                }
                catch (error) { }
                finally {
                    set({ authLoading: false })
                }
                set({
                    accessToken: null,
                    user: null,
                    authStatus: false,
                    authLoading: false,
                })
            },
            checkLogin: () => {
                if (get().accessToken && get().authStatus) return true
                else return false
            }

        }),
        {
            name: LOCAL_KEY,
        }
    ));

export default useAuth