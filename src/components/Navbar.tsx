import { NavLink } from "react-router";
import { Button } from "./ui/button";
import useAuth from "@/auth/store";

export default function Navbar() {
  const checkLogin = useAuth().checkLogin;
  const user = useAuth(state => state.user);
  const logout = useAuth(state => state.logout);
  return (
    <nav
      className="
        border-b border-slate-200 dark:border-neutral-800
        bg-slate-50/80 dark:bg-black/80
      "
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="
            flex min-h-16 flex-col gap-4 py-4
            md:h-16 md:flex-row md:items-center md:justify-between md:py-0
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg bg-primary
                text-primary-foreground font-semibold
              "
            >
              A
            </div>

            <span className="font-semibold tracking-tight">
              Auth App
            </span>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {
              checkLogin() ? (
                <>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-sm transition-colors ${isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                      }`
                    }
                  >
                    {user?.name}
                  </NavLink>

                  <NavLink to="/logout">
                    <Button variant="outline" size="sm" onClick={() => logout()}>
                      LogOut
                    </Button>
                  </NavLink>

                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-sm transition-colors ${isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                      }`
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink to="/login">
                    <Button variant="outline" size="sm">
                      Login
                    </Button>
                  </NavLink>

                  <NavLink to="/signup">
                    <Button size="sm">
                      Sign Up
                    </Button>
                  </NavLink>
                </>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
}