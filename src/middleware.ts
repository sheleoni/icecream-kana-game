export { default } from "next-auth/middleware"
export const config = { matcher: ["/user/:path*"] } // all paths under user/ is protected
